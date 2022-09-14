import 'dotenv/config';
import * as dotenv from 'dotenv';
import { AppConfig } from '../types/db.config';
import { StatusCodes } from 'http-status-codes';
import { Info, Debug, Warn, Error } from '../utils/logger';

const getConfig = (): AppConfig => {
  dotenv.config();

  if (!process.env.ARANGO_HOST_URL) {
    Error(StatusCodes.INTERNAL_SERVER_ERROR, 'ARANGO_HOST_URL not defined');
  }

  if (!process.env.ARANGO_HOST_PORT) {
    Error(StatusCodes.INTERNAL_SERVER_ERROR, 'ARANGO_HOST_PORT not defined');
  }

  if (!process.env.ARANGO_DB_NAME) {
    Error(StatusCodes.INTERNAL_SERVER_ERROR, 'ARANGO_DB_NAME not defined');
  }

  if (!process.env.ARANGO_DB_PASSWORD) {
    Error(StatusCodes.INTERNAL_SERVER_ERROR, 'ARANGO_DB_PASSWORD not defined');
  }

  return {
    port: 8080,
    dbConfig: {
      host: process.env.ARANGO_HOST_URL || '',
      port: process.env.ARANGO_HOST_PORT || '',
      dbName: process.env.ARANGO_DB_NAME || '',
      username: process.env.ARANGO_USER_NAME || '',
      password: process.env.ARANGO_DB_PASSWORD || '',
    },
  };
};

export const appConfig = getConfig();
