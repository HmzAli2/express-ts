import { Request, Response } from 'express';
import { appConfig } from '../config/db.config';
import { loadJson } from '../adapters/fs';
import { ChargeMaster } from '../types/db.rcm';
import { db } from '../adapters/db';

export const getAll = async (req: Request, res: Response) => {
  const chargeMaster = await db
    .query({
      query: 'FOR p IN @@c RETURN p',
      bindVars: { '@c': 'rcm-charge-codeset' },
    });

  return chargeMaster;
};
