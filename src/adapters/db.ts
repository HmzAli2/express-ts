import { Database, aql } from "arangojs";
import { appConfig } from "../config/config";

export let db: Database = new Database({
  url: appConfig.dbConfig.host,
});

export const connect = () => {
  db.useDatabase(appConfig.dbConfig.dbName);
  db.useBasicAuth(appConfig.dbConfig.username, appConfig.dbConfig.password);
};

export async function getRecord(collection: object) {
  return await db.query(aql`
      FOR code in ${collection} RETURN d
  `);
}
