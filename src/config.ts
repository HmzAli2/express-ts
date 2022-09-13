import { AppConfig } from './types/config'

export const appConfig: AppConfig = {
    port: process.env.NODE_HOST_PORT || '8080',
    dbConfig: {
        host: process.env.ARANGO_HOST_URL || '',
        port: process.env.ARANGO_HOST_PORT || '8529',
        name: process.env.ARANGO_DB_NAME || '',
        username: process.env.ARANGO_USER_NAME || '',
        password: process.env.ARANGO_ROOT_PASSWORD || ''
    }
}