import { appConfig } from '../config/config'
import { Database, aql } from 'arangojs'

let db: Database

export const connect = () => {
    db = new Database({
        url: ``,
        databaseName: "rcm",
    });

    db.useBasicAuth(appConfig.dbConfig.username, appConfig.dbConfig.password)

    // test
    const collection = db.collection('rcm-charge-codeset')

    getRecord(collection)
        .then((v: any) => console.log(v))
}

async function getRecord(collection: object) {
    return await db.query(aql`
        FOR code in ${collection}
            RETURN d
    `)
}
