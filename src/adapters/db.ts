import { appConfig } from '../config/config'
import { Database, aql } from 'arangojs'

export const db = new Database({
    url: `${appConfig.dbConfig.host}`
});