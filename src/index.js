import fs from 'fs';
import yaml from 'js-yaml';
import _ from 'lodash';
import path from 'path';

let obj1;
let obj2;

const getDiff = keys => keys.map((key) => {
  const removed = `  - ${key}: ${obj1[key]}\n`;
  const added = `  + ${key}: ${obj2[key]}\n`;

  if (_.has(obj1, key) && _.has(obj2, key)) {
    if (obj1[key] === obj2[key]) {
      return `    ${key}: ${obj1[key]}\n`;
    }
    return `${added}${removed}`;
  }
  if (_.has(obj1, key)) {
    return removed;
  }
  return added;
});

export default (pathToFile1, pathToFile2) => {
  if (path.extname(pathToFile1) === '.json') {
    obj1 = JSON.parse(fs.readFileSync(pathToFile1, 'utf8'));
    obj2 = JSON.parse(fs.readFileSync(pathToFile2, 'utf8'));
  } else {
    obj1 = yaml.safeLoad(fs.readFileSync(pathToFile1, 'utf8'));
    obj2 = yaml.safeLoad(fs.readFileSync(pathToFile2, 'utf8'));
  }

  const keys = _.union(_.keys(obj1), _.keys(obj2));

  return `{\n${getDiff(keys).join('')}}`;
};
