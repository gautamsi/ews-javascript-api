const { cat, rm, cp, exec, mkdir } = require("shelljs")
const replace = require('replace-in-file');
const ora = require('ora');

const typingSource = "build/output/node/js/**/*.d.ts";
const typingFile = "typings/ExchangeWebService.d.ts";
const typePrefixFile = "scripts/config/tsd.start";
const typeSuffixFile = "scripts/config/tsd.end";

const spinner = ora({ spinner: "arc", color: "yellow" });

(async () => {
  spinner.start("Cleaning up from previous session");
  preClean();
  spinner.succeed();
  spinner.start("Compiling TypeScript");
  await compile();
  spinner.succeed();

  spinner.start("Combining TypeScript definitions")
  mergeDef();
  cleanDef();
  fixDef();
  cleanupDef();
  spinner.succeed();
  spinner.start("Copying npm files")
  copyFiles();
  spinner.succeed();
  spinner.stop();
  spinner.clear();
})();


function preClean() {
  rm('-rf', 'build/output/node');
  mkdir("-p", "build/output/node/");
}

function compile() {
  return new Promise(resolve => {
    exec("tsc -p tsconfig.build.json", { shell: true, stdio: 'inherit' }, resolve);
  })
}

function mergeDef() {
  cat(typingSource).to(typingFile);
}

function cleanDef() {
  const options = {
    files: typingFile,
    from: [
      /\r?\n?^.*import.*\{.*\}.*from.*\;/gm,
      /\r?\nimport \* as moment from 'moment-timezone';/g,
      /^.*export.*\{.*\}.*from.*\;/gm,
      /^.*export.*\{.*\};$/gm,
      /^.*\/\/\/\s*\<reference.*\>/gm,
      /(\r?\n\s*\/\*\*\s*\r?\n([^\*]|(\*(?!\/)))*\*\/)?\r?\n\s*private\s.*;/gm, // replace line with private and also preceding lines with jsdoc comments
      // /^\s*private\s.*;/gm, // original replacing private did not replace p
      /\r\n\r\n/g,
      /\n\n/g,
      /export declare/g,
    ],
    to: '',
  };
  replace.sync(options);
}

function fixDef() {
  cat(typePrefixFile, typingFile, typeSuffixFile).to(typingFile)
}

function cleanupDef() {
  rm(typingSource);
}
function copyFiles() {
  cp([
    "./README.md",
    "./LICENSE",
    "./COPYRIGHT",
    "./package.json",
  ], "build/output/node");
  mkdir("build/output/node/typings");
  cp("./typings/ExchangeWebService.d.ts", "build/output/node/typings/ExchangeWebService.d.ts");
}
