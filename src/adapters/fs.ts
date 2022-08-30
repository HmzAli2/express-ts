import { raw } from 'express'
import fs from 'fs'

import { appConfig } from '../config'

// import { loadJsonFile } from 'load-json-file'  # TODO: not working. see terminal for error(s).

export const loadJsonFile = async (filename: string): Promise<any> => {
    const rawData = fs.readFileSync(filename, 'utf8')
    try {
        return JSON.parse(rawData)
    } catch(error) {
        console.log(error)
    }
}
