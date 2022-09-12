import 'dotenv/config'
import { fail } from '../adapters/logging'
import * as dotenv from 'dotenv'
import { AppConfig } from '../types/config'

export const appConfig = getConfig()

function getConfig(): AppConfig {
    dotenv.config()

    if (!process.env.ARANGO_HOST_URL) {
        fail('ARANGO_HOST_URL not defined')
    }

    if (!process.env.ARANGO_HOST_PORT) {
        fail('ARANGO_HOST_PORT not defined')
    }

    if (!process.env.ARANGO_DB_NAME) {
        fail('ARANGO_DB_NAME not defined')
    }

    if (!process.env.ARANGO_ROOT_PASSWORD) {
        fail('ARANGO_ROOT_PASSWORD not defined')
    }

    return {
        port: 8080,
        dbConfig: {
            host: process.env.ARANGO_HOST_URL || '',
            port: process.env.ARANGO_HOST_PORT || '8080',
            name: process.env.ARANGO_DB_NAME || '',
            username: process.env.ARANGO_USER_NAME || '',
            password: process.env.ARANGO_ROOT_PASSWORD || '',
        }
    }
}