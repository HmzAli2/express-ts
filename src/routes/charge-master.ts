import express from 'express';
import { Request, Response } from 'express';
import { getAll } from '../controllers/charge-master';

export const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const response = await getAll();
  console.log(response);
  // res.send(JSON.stringify(response));
});
