require('dotenv').config();
const { join } = require('path');

module.exports = {
  type: process.env.ORM_DB_TYPE,
  host: process.env.ORM_DB_HOST,
  port: process.env.ORM_DB_PORT,
  username: process.env.ORM_DB_USERNAME,
  password: process.env.ORM_DB_PASSWORD,
  database: process.env.ORM_DB_NAME,
  schema: 'main',
  synchronize: false,
  name: 'default',
  logging: true,
  entities: [join(__dirname, 'build/entities/*.*')],
  migrations: [join(__dirname, 'build/migrations/*.*')],
  migrationsTableName: `migrations_${process.env.APP_ZONE}`,
  cli: {
    migrationsDir: 'src/migrations',
  },
};
