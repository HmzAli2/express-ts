import { appConfig } from '../config/config';
import { Database, aql } from 'arangojs';

export const db = new Database({
  url: `${appConfig.dbConfig.host}`,
  databaseName: 'rcm',
  auth: {
    username: appConfig.dbConfig.username,
    password: appConfig.dbConfig.password,
  },
});

connect();

export function connect() {
  getRecord().then((v) => console.log(v));
}

async function getRecord() {
  const chargeCodeset = db.collection('rcm-charge-codeset');
  return db
    .query({
<<<<<<< HEAD
      query: "FOR p IN @@c RETURN p",
      bindVars: { "@c": "rcm-charge-codeset" }
=======
      query: 'FOR p IN @@c RETURN p',
      bindVars: { '@c': 'rcm-charge-codeset' },
>>>>>>> 57e0903b1bf99b55fdaa465147c13f89f1306d17
    })
    .then(function (result: any) {
      console.log('Charge code:');
      return result.forEach(function (codeset: any) {
        console.log(codeset);
      });
    })
    .catch(function (err: any) {
      console.error(err);
    });
}
