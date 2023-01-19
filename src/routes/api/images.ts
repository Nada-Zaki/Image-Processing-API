import { Request, Response, Router } from 'express';
import path from 'path';
import resizeImage from '../../utilities/resizeImage';
import { isValidUrl } from '../../middleware/isValidUrl';
import { isFileExist } from '../../middleware/isFileExist';
import { isFileResized } from '../../middleware/isFileResized';

const images = Router();
images.get(
  '/',
  isValidUrl,
  isFileExist,
  isFileResized,
  async (req: Request, res: Response): Promise<void> => {
    const width = parseInt(req.query.width as string) as number;
    const height = parseInt(req.query.height as string) as number;

    const { file } = res.locals;

    const fullDirPath = path.join(__dirname, '../../../assets', 'full');
    const thumbDirPath = path.join(__dirname, '../../../assets', 'thumbnail');

    try {
      await resizeImage(fullDirPath, thumbDirPath, file, width, height);
      res.sendFile(path.join(thumbDirPath, file));
    } catch (err) {
      res.status(500).send((err as Error).message);
    }
  }
);

export default images;
