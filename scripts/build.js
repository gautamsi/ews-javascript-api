const { cat, rm, cp, exec, mkdir } = require("shelljs")
const replace = require('replace-in-file');
const ora = require('ora');
const { readFile, writeFile } = require('jsonfile')
const os = require("os");

const typingSource = "build/output/node/js/**/*.d.ts";
const typingFile = "typings/ExchangeWebService.d.ts";
const typePrefixFile = "scripts/config/tsd.start";
const typeSuffixFile = "scripts/config/tsd.end";
const outputDir = "build/output/node";

const spinner = ora({ spinner: "arc", color: "yellow" });

(async () => {
  try {
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
    copyPackageJson();
    spinner.succeed();
  } catch (error) {
    console.error(error);
    spinner.fail();
  } finally {
    spinner.stop();
    spinner.clear();
  }
})();


function preClean() {
  rm('-rf', outputDir);
  try {
    mkdir("-p", outputDir);
  } catch (error) { }
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
  ], outputDir);
  mkdir("build/output/node/typings");
  cp("./typings/ExchangeWebService.d.ts", "build/output/node/typings/ExchangeWebService.d.ts");
}

function copyPackageJson() {
  return new Promise(async resolve => {
    const file = 'package.json'
    try {
      const obj = await readFile(file);
      delete obj.devDependencies;
      delete obj.scripts;
      delete obj.private;
      await writeFile(`${outputDir}/package.json`, obj, { spaces: 4, EOL: os.EOL });
      resolve();
    } catch (error) {
      console.error(error);
    }
  });
}
