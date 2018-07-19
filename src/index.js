import fs from 'fs';
import path from 'path';
import parse from './parser';
import buildAst from './buildAst';
import render from './render';

export default (firstFilePath, secondFilePath) => {
  const obj1 = parse(path.extname(firstFilePath), fs.readFileSync(firstFilePath, 'utf8'));
  const obj2 = parse(path.extname(secondFilePath), fs.readFileSync(secondFilePath, 'utf8'));
  return render(buildAst(obj1, obj2));
};
