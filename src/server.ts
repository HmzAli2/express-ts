import bodyParser from 'body-parser'
import { appConfig } from './config/config'
import { Info, Debug, Warn, Error } from './config/logger';
import express, { Application, Request, Response, NextFunction } from 'express'

const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (request: Request, response: Response) => {
    Info("RCM server pinged", "Status 200")
    response.send('RCM server pinged')
})

app.listen(appConfig.port, () => {
    console.info(`App running on port ${appConfig.port}`)
})
