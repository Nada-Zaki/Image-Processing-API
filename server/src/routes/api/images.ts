import { Router } from 'express';
import path from 'path';
import resizeImage from '../../utilities/resizeImage';
import { isValidUrl } from '../../middleware/isValidUrl';
import { isFileExist } from '../../middleware/isFileExist';
import { isFileResized } from '../../middleware/isFileResized';

const images = Router();
images.get('/', isValidUrl, isFileExist, isFileResized, async (req, res) => {
  const width = parseInt(req.query.width as string) as number;
  const height = parseInt(req.query.height as string) as number;
  const { file } = res.locals;
  const fullDirPath = path.join(
    __dirname.split('\\').slice(0, -2).join('\\'),
    'assets',
    'full'
  );
  const thumbDirPath = path.join(
    __dirname.split('\\').slice(0, -2).join('\\'),
    'assets',
    'thumbnail'
  );
  try {
    await resizeImage(fullDirPath, thumbDirPath, file, width, height);
    res.sendFile(path.join(thumbDirPath, file));
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
});

export default images;