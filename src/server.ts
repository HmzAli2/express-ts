import cors from 'cors';
import bodyParser from 'body-parser';
import { db } from './adapters/db';
import { appConfig } from './config/db.config';
import { StatusCodes } from 'http-status-codes';
import { Error } from './utils/logger';
import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request: Request, response: Response) => {
  response.send('RCM server pinged');
});

app.get('/chargeCodeSets', (request: Request, response: Response) => {
  console.log('Database', db);
  const chargeCodeSetCollection = db.collection('rcm-charge-codeset');
  chargeCodeSetCollection
    .all()
    .then((data: any) => {
      response.send(data);
    })
    .catch((err: any) => {
      Error(StatusCodes.INTERNAL_SERVER_ERROR, 'Database error', err);
    });
});

app.listen(appConfig.port, () => {
  console.log(`App running on port ${appConfig.port}`);
});
