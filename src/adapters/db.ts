import { appConfig } from '../config/db.config';
import { Database } from 'arangojs';

export const db = new Database({
  url: `${appConfig.dbConfig.host}`,
  databaseName: 'rcm',
  auth: {
    username: appConfig.dbConfig.username,
    password: appConfig.dbConfig.password,
  },
});
