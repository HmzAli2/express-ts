import { appConfig } from '../config'
import { Database, aql } from 'arangojs'

export const db = new Database({
    url: `${appConfig.dbConfig.host}`
});