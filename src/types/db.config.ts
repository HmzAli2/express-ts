interface DatabaseConfig {
  host: string;
  port: string;
  dbName: string;
  username: string;
  password: string;
}

export interface AppConfig {
  port: number;
  dbConfig: DatabaseConfig;
}
