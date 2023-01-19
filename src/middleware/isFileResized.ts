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
  const width = +(req.query.width as string);
  const height = +(req.query.height as string);

  const thumbDirPath = path.join(__dirname, '../../assets', 'thumbnail');

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
