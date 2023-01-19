import { Request, Response, NextFunction } from 'express';
import path from 'path';
import sharp from 'sharp';
import readFile from '../utilities/readFile';

export const isFileResized = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string) as number;
  const height = parseInt(req.query.height as string) as number;

  const thumbDirPath = path.join(
    __dirname.split('\\').slice(0, -2).join('\\'),
    'assets',
    'thumbnail'
  );

  try {
    const file = await readFile(thumbDirPath, filename);
    if (!file) {
      next();
    } else {
      const metadata = await sharp(path.join(thumbDirPath, file)).metadata();
      if (metadata.width === width && metadata.height === height) {
        return res.sendFile(path.join(thumbDirPath, file));
      } else {
        next();
      }
    }
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
};
