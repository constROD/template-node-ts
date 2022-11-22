/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-console */

import minimist from 'minimist';

import { exec } from 'child_process';

const argv = minimist(process.argv.slice(2));

const option = argv._[0]; // schema:sync,
const dataSource = `./src/typeorm/typeorm.config.ts`;

if (!option) {
  console.log(
    'Please, choose an option: \n - schema:sync\n - migration:generate\n - migration:create\n - migration:run\n - migration:revert\n - migration:show'
  );
  process.exit(0);
}

let command = '';

if (option === 'migration:generate' || option === 'migration:create') {
  const fileName = argv.fn || 'no-name';
  const migrationsDir = `./src/typeorm/migrations/${fileName}`;

  command = `npx typeorm-ts-node-commonjs ${option} -d ${dataSource} ${migrationsDir}`;
} else {
  command = `npx typeorm-ts-node-commonjs ${option} -d ${dataSource}`;
}

if (command)
  exec(command, (_err, stdout, stderr) => {
    console.log(`${stdout}`);
    console.log(`${stderr}`);
  });
