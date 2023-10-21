"use strict";

const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const moduleFileExtensions = [
  "web.mjs",
  "mjs",
  "web.js",
  "js",
  "web.ts",
  "ts",
  "web.tsx",
  "tsx",
  "json",
  "web.jsx",
  "jsx",
];

const resolveModule = (filePath, resolveFn) => {
  // find file extension
  const extension = moduleFileExtensions.find((extension) =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  );

  // Returns
  if (extension) return resolveFn(`${filePath}.${extension}`);
  return resolveFn(`${filePath}.js`);
};

module.exports = {
  appPath: resolveApp("."),
  appBuild: resolveApp("dist"),
  pluginIndex: resolveModule("./src/plugin/index", resolveApp),
  uiIndex: resolveModule("./src/ui/index", resolveApp),
  uiHtml: resolveApp("./src/ui/index.html"),
};
