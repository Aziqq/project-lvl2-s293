import fs from 'fs';
import genDiff from '../src';

const getFilePath = name => `__tests__/__fixtures__/${name}`;

test('Compare flat files', () => {
  const pathToFile1 = getFilePath('before.json');
  const pathToFile2 = getFilePath('after.json');
  const expected = fs.readFileSync(getFilePath('expected.txt'), 'utf8');

  expect(genDiff(pathToFile1, pathToFile2)).toBe(expected);
});
