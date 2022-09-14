import bodyParser from 'body-parser';
import { appConfig } from './config/db.config';
import { StatusCodes } from 'http-status-codes';
import { router } from './routes/charge-master';
import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/chargeMaster', router);

app.get('/', (request: Request, response: Response) => {
  response.send('RCM server pinged');
});

app.listen(appConfig.port, () => {
  console.log(`App running on port ${appConfig.port}`);
});
