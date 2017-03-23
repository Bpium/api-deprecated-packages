const fs = require('fs');
const packages = require('./package.json');

Object.keys(packages.dependencies).map(packageName=> {
  fs.writeFileSync(
    `packages/${packageName}.js`, 
    `module.exports = require('${packageName}')`
  );
})