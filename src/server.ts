import express, { Application, Request, Response, NextFunction } from 'express'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { getAll, create } from './controllers/charge-master'

dotenv.config()

const app: Application = express()
const port = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (request: Request, response: Response) => {
    response.send('RCM server pinged')
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})
