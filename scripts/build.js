const { cat, rm, cp, exec, mkdir } = require("shelljs")
const replace = require('replace-in-file');

const typingSource = "build/output/node/js/**/*.d.ts";
const typingFile = "typings/ExchangeWebService.d.ts";
const typePrefixFile = "scripts/config/tsd.start";
const typeSuffixFile = "scripts/config/tsd.end";

preClean();
compile();
mergeDef();
cleanDef();
fixDef();
cleanupDef();
copyFiles();

function preClean() {
  rm('-rf', 'build/output/node');
}

function compile() {
  exec("tsc -p tsconfig.build.json", { shell: true, stdio: 'inherit' })
}

function mergeDef(){
  cat(typingSource).to(typingFile);
}

function cleanDef() {
  const options = {
    files: typingFile,
    from: [
      /\n?^.*import.*\{.*\}.*from.*\;/gm,
      /\nimport \* as moment from 'moment-timezone';/g,
      /^.*export.*\{.*\}.*from.*\;/gm,
      /^.*export.*\{.*\};$/gm,
      /^.*\/\/\/\s*\<reference.*\>/gm,
      /(\n\s*\/\*\*\s*\n([^\*]|(\*(?!\/)))*\*\/)?\n\s*private\s.*;/gm, // replace line with private and also preceding lines with jsdoc comments
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
