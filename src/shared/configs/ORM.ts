import {
  ORM_DB_HOST,
  ORM_DB_LOGGING,
  ORM_DB_NAME,
  ORM_DB_PASSWORD,
  ORM_DB_PORT,
  ORM_DB_SCHEMA,
  ORM_DB_SYNCHRONIZE,
  ORM_DB_TYPE,
  ORM_DB_USERNAME,
} from './App';

import { createConnection } from 'typeorm';

import { join } from 'path';

export const ORM_CONFIG = {
  type: ORM_DB_TYPE,
  host: ORM_DB_HOST,
  port: ORM_DB_PORT,
  username: ORM_DB_USERNAME,
  password: ORM_DB_PASSWORD,
  database: ORM_DB_NAME,
  schema: ORM_DB_SCHEMA,
  synchronize: ORM_DB_SYNCHRONIZE,
  name: 'default',
  logging: ORM_DB_LOGGING,
  entities: [join(__dirname, '../../entities/*.*')],
  migrations: [join(__dirname, '../../migrations/*.*')],
  cli: {
    migrationsDir: 'src/migrations',
  },
} as Parameters<typeof createConnection>[0];
