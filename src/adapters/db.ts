import { Database, aql } from 'arangojs'
import { appConfig } from '../config'

const db = new Database({
    url: `http://localhost:${appConfig.dbConfig.port}`
});