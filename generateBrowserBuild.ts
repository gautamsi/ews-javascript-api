/**
 * generateBrowserBuild.ts
 *
 * Generates the combined single-file browser build of ews-javascript-api.
 *
 * Reads singleFileBuildSequence.txt and concatenates all referenced source files
 * (stripping import statements) into a single ExchangeWebService.ts for the browser repo.
 *
 * Key transformations:
 * - Resolves relative paths from sequence file against source root
 * - Strips all 'import ... from ...' lines
 * - Injects inline code from '--' prefixed lines
 * - Patches XHRFactory to use XHRBrowser instead of @ewsjs/xhr
 * - Skips files that no longer exist
 * - Reports missing/new files for manual review
 *
 * Usage:
 *   npx tsx generateBrowserBuild.ts
 *   npx tsx generateBrowserBuild.ts --report-only
 *   npx tsx generateBrowserBuild.ts --output "path/to/output.ts"
 */

import * as fs from "fs";
import * as path from "path";

// ---------------------------------------------------------------------------
// ANSI color helpers for console output
// ---------------------------------------------------------------------------
const color = {
  cyan: (s: string) => `\x1b[36m${s}\x1b[0m`,
  green: (s: string) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s: string) => `\x1b[33m${s}\x1b[0m`,
  magenta: (s: string) => `\x1b[35m${s}\x1b[0m`,
  gray: (s: string) => `\x1b[90m${s}\x1b[0m`,
};

// ---------------------------------------------------------------------------
// Parse CLI arguments
// ---------------------------------------------------------------------------
function parseArgs() {
  const args = process.argv.slice(2);
  const scriptDir = __dirname;

  let sequenceFile = path.join(scriptDir, "singleFileBuildSequence.txt");
  let sourceRoot = path.join(scriptDir, "src", "js");
  let outputFile = path.join(
    scriptDir,
    "..",
    "ews-javascript-api-browser",
    "src",
    "ExchangeWebService.ts"
  );
  let reportOnly = false;

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "--sequence-file":
        sequenceFile = args[++i];
        break;
      case "--source-root":
        sourceRoot = args[++i];
        break;
      case "--output":
        outputFile = args[++i];
        break;
      case "--report-only":
        reportOnly = true;
        break;
      case "--help":
        console.log(`Usage: npx tsx generateBrowserBuild.ts [options]

Options:
  --sequence-file <path>  Path to singleFileBuildSequence.txt
  --source-root <path>    Root of TypeScript source files (src/js)
  --output <path>         Output path for the combined .ts file
  --report-only           Only report missing/new files, don't write output
  --help                  Show this help message`);
        process.exit(0);
    }
  }

  return { sequenceFile, sourceRoot, outputFile, reportOnly };
}

// ---------------------------------------------------------------------------
// Recursively collect .ts files (excluding .d.ts / .d__.ts)
// ---------------------------------------------------------------------------
function collectTsFiles(dir: string, base: string = dir): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectTsFiles(fullPath, base));
    } else if (
      entry.isFile() &&
      entry.name.endsWith(".ts") &&
      !entry.name.endsWith(".d.ts") &&
      !entry.name.endsWith(".d__.ts")
    ) {
      const rel = path.relative(base, fullPath).replace(/\\/g, "/");
      results.push(rel);
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
function main() {
  const { sequenceFile, sourceRoot, outputFile, reportOnly } = parseArgs();

  console.log(color.cyan("=== EWS JavaScript API - Browser Build Generator ==="));
  console.log(`Sequence file : ${sequenceFile}`);
  console.log(`Source root    : ${sourceRoot}`);
  console.log(`Output file    : ${outputFile}`);
  console.log();

  // -----------------------------------------------------------------------
  // 1. Read sequence file
  // -----------------------------------------------------------------------
  if (!fs.existsSync(sequenceFile)) {
    console.error(`Error: Sequence file not found: ${sequenceFile}`);
    process.exit(1);
  }

  const sequenceLines = fs
    .readFileSync(sequenceFile, "utf-8")
    .split(/\r?\n/);
  console.log(color.gray(`Read ${sequenceLines.length} lines from sequence file`));

  // -----------------------------------------------------------------------
  // 2. Collect all source .ts files for comparison
  // -----------------------------------------------------------------------
  const allSourceFiles = collectTsFiles(sourceRoot);
  const sourceFileSet = new Set(allSourceFiles.map((f) => f.toLowerCase()));

  // Track which source files are referenced by the sequence
  const referencedFiles = new Set<string>();

  // -----------------------------------------------------------------------
  // 3. Process sequence lines
  // -----------------------------------------------------------------------
  const missingFiles: string[] = [];
  const skippedCommented: string[] = [];
  const output: string[] = [];

  // Header
  output.push("// Copyright (c) 2014-2017 Gautam Singh");
  output.push(
    "// MIT License; Full text at - https://github.com/gautamsi/ews-javascript-api/blob/master/LICENSE"
  );
  output.push("// Auto-generated browser build - do not edit manually");
  output.push(`// Generated on: ${new Date().toISOString().replace("T", " ").slice(0, 19)}`);
  output.push("");

  const importRegex = /^\s*import\s+.*\s+from\s+/;
  const reexportRegex = /^\s*export\s+\{.*\}\s+from\s+/;
  const exportStarRegex = /^\s*export\s+\*\s+from\s+/;

  let fileCount = 0;

  for (const line of sequenceLines) {
    // Preserve empty lines as spacing
    if (!line.trim()) {
      output.push("");
      continue;
    }

    // Lines starting with '--' are inline code or comments
    if (line.startsWith("--")) {
      const inlineContent = line.substring(2);

      // Commented-out file paths (end with .ts and don't contain spaces typical of prose)
      if (inlineContent.startsWith("//") && /\.ts\s*$/.test(inlineContent) && !inlineContent.includes(" - ")) {
        skippedCommented.push(inlineContent);
        continue;
      }

      // Inject as-is
      output.push(inlineContent);
      continue;
    }

    // Must be a file path (relative to source root, e.g. "AltDictionary.ts" or "Core\ExchangeService.ts")
    const trimmed = line.trim();
    if (!trimmed.endsWith(".ts")) {
      continue;
    }

    const relativePath = trimmed.replace(/\\/g, "/");
    referencedFiles.add(relativePath.toLowerCase());

    // Resolve to actual source file
    const actualPath = path.join(sourceRoot, relativePath);

    if (!fs.existsSync(actualPath)) {
      missingFiles.push(relativePath);
      output.push(`// [MISSING] File not found: ${relativePath}`);
      console.warn(color.yellow(`Warning: Source file missing: ${relativePath}`));
      continue;
    }

    fileCount++;

    // Read and process file content
    const fileLines = fs.readFileSync(actualPath, "utf-8").split(/\r?\n/);
    const filteredLines: string[] = [];

    for (let fileLine of fileLines) {
      // Strip import/re-export statements
      if (importRegex.test(fileLine)) continue;
      if (reexportRegex.test(fileLine)) continue;
      if (exportStarRegex.test(fileLine)) continue;

      // Patch XHRFactory: use XHRBrowser instead of @ewsjs/xhr
      if (relativePath === "XHRFactory.ts") {
        if (/new XhrApi\(\)/.test(fileLine)) {
          fileLine = fileLine.replace(/new XhrApi\(\)/, "new XHRBrowser()");
        }
      }

      filteredLines.push(fileLine);
    }

    // Trim leading and trailing blank lines from file content
    while (filteredLines.length > 0 && !filteredLines[0].trim()) {
      filteredLines.shift();
    }
    while (filteredLines.length > 0 && !filteredLines[filteredLines.length - 1].trim()) {
      filteredLines.pop();
    }

    // Single blank line before the file comment, then the content
    output.push("");
    output.push(`// ================================ ${relativePath} ================================`);
    output.push(...filteredLines);
  }

  // -----------------------------------------------------------------------
  // 4. Find source files NOT referenced by sequence
  // -----------------------------------------------------------------------
  const expectedMissing = new Set([
    "exchangewebservice.ts", // entry point - replaced by combined file
    "webservice.extra.ts", // commented-out code
    "xhroutlook.ts", // outlook-specific
  ]);

  const newFiles = allSourceFiles
    .filter(
      (f) =>
        !referencedFiles.has(f.toLowerCase()) &&
        !expectedMissing.has(f.toLowerCase())
    )
    .sort();

  const expectedExclusions = allSourceFiles.filter(
    (f) =>
      !referencedFiles.has(f.toLowerCase()) &&
      expectedMissing.has(f.toLowerCase())
  );

  // -----------------------------------------------------------------------
  // 5. Report
  // -----------------------------------------------------------------------
  console.log();
  console.log(color.cyan("=== Build Report ==="));
  console.log(color.green(`Files processed from sequence : ${fileCount}`));
  console.log(color.green(`Output lines                  : ${output.length}`));

  if (missingFiles.length > 0) {
    console.log();
    console.log(color.yellow(`MISSING source files (${missingFiles.length}):`));
    for (const f of missingFiles) console.log(color.yellow(`  - ${f}`));
  }

  if (skippedCommented.length > 0) {
    console.log();
    console.log(
      color.gray(`Skipped commented-out entries (${skippedCommented.length}):`)
    );
    for (const f of skippedCommented) console.log(color.gray(`  - ${f}`));
  }

  if (newFiles.length > 0) {
    console.log();
    console.log(
      color.magenta(`NEW source files NOT in sequence (${newFiles.length}):`)
    );
    console.log(
      color.magenta(
        "(These may need to be added to singleFileBuildSequence.txt)"
      )
    );
    for (const f of newFiles) console.log(color.magenta(`  + ${f}`));
  }

  if (expectedExclusions.length > 0) {
    console.log();
    console.log(
      color.gray("Expected exclusions (not in sequence by design):")
    );
    for (const f of expectedExclusions) console.log(color.gray(`  ~ ${f}`));
  }

  // -----------------------------------------------------------------------
  // 6. Write output
  // -----------------------------------------------------------------------
  if (!reportOnly) {
    const outputDir = path.dirname(outputFile);
    if (!fs.existsSync(outputDir)) {
      console.warn(`Warning: Output directory does not exist: ${outputDir}`);
      console.warn("Creating directory...");
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Collapse consecutive blank lines to a single blank line
    const collapsed: string[] = [];
    let prevBlank = false;
    for (const line of output) {
      const isBlank = !line.trim();
      if (isBlank && prevBlank) continue;
      collapsed.push(line);
      prevBlank = isBlank;
    }

    fs.writeFileSync(outputFile, collapsed.join("\r\n"), "utf-8");
    const stats = fs.statSync(outputFile);
    console.log();
    console.log(color.green(`Output written to: ${outputFile}`));
    console.log(`Total size: ${Math.round(stats.size / 1024)} KB`);
  } else {
    console.log();
    console.log(color.gray("(Report only mode - no output file written)"));
  }

  console.log();
  console.log(color.cyan("Done."));
}

main();
