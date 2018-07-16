import fs from 'fs';
import _ from 'lodash';

export default (pathToFile1, pathToFile2) => {
  const obj1 = JSON.parse(fs.readFileSync(pathToFile1));
  const obj2 = JSON.parse(fs.readFileSync(pathToFile2));

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
