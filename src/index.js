import fs from 'fs';
import _ from 'lodash';
import path from 'path';
import parse from './parser';

export default (pathToFile1, pathToFile2) => {
  const obj1 = parse(path.extname(pathToFile1), fs.readFileSync(pathToFile1, 'utf8'));
  const obj2 = parse(path.extname(pathToFile2), fs.readFileSync(pathToFile2, 'utf8'));
  const keys = _.union(_.keys(obj1), _.keys(obj2));

  const getDiff = keys.map((key) => {
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
  }).join('');

  return `{\n${getDiff}}`;
};
