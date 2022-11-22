import {
  ORM_DB_HOST,
  ORM_DB_NAME,
  ORM_DB_PASSWORD,
  ORM_DB_PORT,
  ORM_DB_SCHEMA,
  ORM_DB_USERNAME,
} from '../shared/configs/App';

import { config } from 'dotenv';
import { DataSource } from 'typeorm';

import { join } from 'path';

config();

export default new DataSource({
  type: 'postgres',
  host: ORM_DB_HOST,
  port: Number(ORM_DB_PORT),
  username: ORM_DB_USERNAME,
  password: ORM_DB_PASSWORD,
  database: ORM_DB_NAME,
  schema: ORM_DB_SCHEMA,
  synchronize: false,
  name: 'default',
  logging: true,
  entities: [join(__dirname, '../typeorm/entities/*.*')],
  migrations: [join(__dirname, '../typeorm/migrations/*.*')],
});
