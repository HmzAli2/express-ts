import { Request, Response } from 'express'
import express from 'express'

import { getAll, create } from './controllers/charge-master'

const app = express()
const port = 8080

app.get('/', (request: Request, response: Response) => {
    response.send('RCM test backend.')
})

app.post('/user', create)
app.get('/users', getAll)

app.listen(port, () => {
    console.log(`app running in port ${port}`)
})
