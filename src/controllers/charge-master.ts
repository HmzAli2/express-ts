import { Request, Response } from "express";
import { appConfig } from "../config/db.config";
import { loadJson } from "../adapters/fs";
import { ChargeCategory, ChargeMaster } from "../types/rcm";

export const create = (request: Request, response: Response) => {
  let chargeMaster: ChargeMaster;
};

export const getAll = async (request: Request, response: Response) => {
  let chargeMaster: ChargeMaster;
};
