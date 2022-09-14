import { db } from '../adapters/db';
import { loadJson } from '../adapters/fs';
import { ChargeMaster } from '../models/db.rcm';

export const getAll = async () => {
  const chargeMaster = await db
    .query({
      query: 'FOR p IN @@c RETURN p',
      bindVars: { '@c': 'rcm-charge-codeset' },
    });

  return chargeMaster;
};
