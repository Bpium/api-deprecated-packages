const exec = require('child_process').exec;
const packages = require('./package.json');

const command = Object.keys(packages.dependencies).map(packageName=> {
  return `echo "module.exports = require('${packageName}')" > packages/${packageName}.js`;
}).join(' && ');

exec(command, err=> {
  if (err) {
    console.error('Generate deprecated packages err: ', err);
    process.abort();
  }
});
