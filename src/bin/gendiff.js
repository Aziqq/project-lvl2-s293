#!/usr/bin/env node

import genDiff from '..';
import program from 'commander';
import { version, description } from '../../package.json';

program
  .version(version)
  .description(description)
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    console.log(genDiff(firstConfig, secondConfig));
  });

program.parse(process.argv);
