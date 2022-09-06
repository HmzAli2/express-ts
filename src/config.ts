import 'dotenv/config'
import { AppConfig } from './types/config';

export const appConfig: AppConfig = {
    storageFilePath: process.env.STORAGE_FILE_PATH || ''
}