import bodyParser from "body-parser";
import { connect, db } from "./adapters/db";
import { appConfig } from "./config/config";
import { Info, Debug, Warn, Error } from "./config/logger";
import express, { Application, Request, Response, NextFunction } from "express";

connect();

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request: Request, response: Response) => {
  response.send("RCM server pinged");
});

app.get("/chargeCodeSets", (request: Request, response: Response) => {
  const chargeCodeSetCollection = db.collection("rcm-charge-codeset");
  chargeCodeSetCollection.all().then((data) => {
    response.send(data);
  });
});

app.listen(appConfig.port, () => {
  console.info(`App running on port ${appConfig.port}`);
});
