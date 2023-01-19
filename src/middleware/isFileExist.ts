import { Request, Response, NextFunction } from 'express';
import path from 'path';
import readFile from '../utilities/readFile';

export const isFileExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const filename = req.query.filename as string;
  const fullDirPath = path.join(__dirname, '../../assets', 'full');

  const file = await readFile(fullDirPath, filename);
  if (!file) {
    return res.status(404).send('This image does not exist');
  }
  res.locals.file = file;
  next();
};
