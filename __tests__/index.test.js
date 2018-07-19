import fs from 'fs';
import genDiff from '../src';

const getFilePath = name => `__tests__/__fixtures__/${name}`;

describe('Flat files comparsion', () => {
  const expected = fs.readFileSync(getFilePath('expected.txt'), 'utf8');

  test('json', () => {
    const pathToFile1 = getFilePath('before.json');
    const pathToFile2 = getFilePath('after.json');

    expect(genDiff(pathToFile1, pathToFile2)).toBe(expected);
  });

  test('yml', () => {
    const pathToFile1 = getFilePath('before.yml');
    const pathToFile2 = getFilePath('after.yml');

    expect(genDiff(pathToFile1, pathToFile2)).toBe(expected);
  });

  test('ini', () => {
    const pathToFile1 = getFilePath('before.ini');
    const pathToFile2 = getFilePath('after.ini');

    expect(genDiff(pathToFile1, pathToFile2)).toBe(expected);
  });
});

describe('Recursive comparison', () => {
  const expected = fs.readFileSync(getFilePath('expectedNested.txt'), 'utf8');

  test('json', () => {
    const pathToFile1 = getFilePath('beforeNested.json');
    const pathToFile2 = getFilePath('afterNested.json');

    expect(genDiff(pathToFile1, pathToFile2)).toBe(expected);
  });

  test('yml', () => {
    const pathToFile1 = getFilePath('beforeNested.yml');
    const pathToFile2 = getFilePath('afterNested.yml');

    expect(genDiff(pathToFile1, pathToFile2)).toBe(expected);
  });

  test('ini', () => {
    const pathToFile1 = getFilePath('beforeNested.ini');
    const pathToFile2 = getFilePath('afterNested.ini');

    expect(genDiff(pathToFile1, pathToFile2)).toBe(expected);
  });
});
