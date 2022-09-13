import "dotenv/config";
import * as dotenv from "dotenv";
import { AppConfig } from "../types/config";
import { StatusCodes } from "http-status-codes";
import { Info, Debug, Warn, Error } from "./logger";

export const appConfig = getConfig();

function getConfig(): AppConfig {
  dotenv.config();

  if (!process.env.ARANGO_HOST_URL) {
    Error(StatusCodes.INTERNAL_SERVER_ERROR, "ARANGO_HOST_URL not defined");
  }

  if (!process.env.ARANGO_HOST_PORT) {
    Error(StatusCodes.INTERNAL_SERVER_ERROR, "ARANGO_HOST_PORT not defined");
  }

  if (!process.env.ARANGO_DB_NAME) {
    Error(StatusCodes.INTERNAL_SERVER_ERROR, "ARANGO_DB_NAME not defined");
  }

  if (!process.env.ARANGO_ROOT_PASSWORD) {
    Error(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "ARANGO_ROOT_PASSWORD not defined"
    );
  }

  return {
    port: 8080,
    dbConfig: {
      host: process.env.ARANGO_HOST_URL || "",
      port: process.env.ARANGO_HOST_PORT || "8080",
      dbName: process.env.ARANGO_DB_NAME || "",
      username: process.env.ARANGO_USER_NAME || "",
      password: process.env.ARANGO_ROOT_PASSWORD || "",
    },
  };
}
