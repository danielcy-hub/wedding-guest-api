import * as dotenv from 'dotenv';
import * as ormconfig from './ormconfig';

dotenv.config();

export const appPort = parseInt(process.env.APP_PORT || '3000');

export const dbConfig = ormconfig;

export const localeList = ['en', 'id'];
