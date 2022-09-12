import bodyParser from 'body-parser'
import { appConfig } from './config/config'
import express, { Application, Request, Response, NextFunction } from 'express'

const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (request: Request, response: Response) => {
    response.send('RCM server pinged')
})

app.listen(appConfig.port, () => {
    console.log(`App running on port ${appConfig.port}`)
})
