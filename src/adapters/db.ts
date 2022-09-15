import { DatabaseConfig } from '../types/config';
import { Database } from 'arangojs';

export class DB {
  _db: Database;

  constructor(config: DatabaseConfig) {
    this._db = new Database({
      url: config.host,
      databaseName: config.dbName,
      auth: {
        username: config.username,
        password: config.password,
      },
    });
  }
}
