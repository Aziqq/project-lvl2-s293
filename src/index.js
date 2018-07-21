import fs from 'fs';
import path from 'path';
import parse from './parser';
import buildAst from './builder';
import render from './renderers';

const getParsedFile = pathToFile => parse(path.extname(pathToFile), fs.readFileSync(pathToFile, 'utf8'));

export default (firstFilePath, secondFilePath, format = 'standart') => {
  const obj1 = getParsedFile(firstFilePath);
  const obj2 = getParsedFile(secondFilePath);
  return render(buildAst(obj1, obj2), format);
};
