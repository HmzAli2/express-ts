import { Request, Response } from 'express'
import { loadJsonFile } from '../adapters/fs'
import { appConfig } from '../config'
import User from '../models/user'

export const create = (request: Request, response: Response) => {

}

export const getAll = async (request: Request, response: Response) => {
    let users: User[]
    // TODO: wrape below in try, catch with logging
    users = await loadJsonFile(appConfig.storageFilePath)
    response.send(users)
}

