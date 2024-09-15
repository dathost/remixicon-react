const childProcess = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

childProcess.execFileSync(
  "pnpm",
  [
    "svgr",
    "--typescript",
    "--no-index",
    "--memo",
    "--out-dir=build",
    "node_modules/remixicon/icons",
  ],
  { stdio: "inherit" }
);

for (const category of fs.readdirSync("build")) {
  const categoryDir = path.join("build", category);
  for (const filename of fs.readdirSync(categoryDir)) {
    fs.renameSync(
      path.join("build", category, filename),
      path.join("build", `Svg${filename}`)
    );
  }
  fs.rmdirSync(categoryDir);
}

childProcess.execFileSync("pnpm", ["tsc"], { stdio: "inherit" });
