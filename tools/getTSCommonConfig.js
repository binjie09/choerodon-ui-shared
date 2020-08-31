const fs = require('fs');
const path = require('path');

module.exports = function () {
  let my = {};
  if (fs.existsSync(path.resolve('tsconfig.json'))) {
    my = require(path.resolve('tsconfig.json'));
  }
  return {
    declaration: true,
    ...my.compilerOptions,
  };
};
