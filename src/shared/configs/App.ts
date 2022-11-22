import { Zones } from '../constants/Common';

import dotenv from 'dotenv';

dotenv.config();

/* APP */
export const APP_PORT = process.env.PORT;
export const APP_ZONE: Zones = (process.env.APP_ZONE as Zones) || Zones.Develop;

/* ORM */
export const ORM_DB_LOGGING = process.env.ORM_DB_LOGGING === 'true';
export const { ORM_DB_TYPE } = process.env;
export const { ORM_DB_HOST } = process.env;
export const { ORM_DB_PORT } = process.env;
export const { ORM_DB_USERNAME } = process.env;
export const { ORM_DB_PASSWORD } = process.env;
export const { ORM_DB_NAME } = process.env;
export const ORM_DB_SCHEMA = 'main';
