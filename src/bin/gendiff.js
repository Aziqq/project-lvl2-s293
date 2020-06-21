#!/usr/bin/env node

import program from 'commander';
import genDiff from '..';
import { version, description } from '../../package.json';

program
  .version(version)
  .description(description)
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig, options) => {
    console.log(genDiff(firstConfig, secondConfig, options.format));
  });

program.parse(process.argv);
