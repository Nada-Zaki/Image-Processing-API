import sharp from 'sharp';
import path from 'path';

const resizeImage = async (
  fullDirPath: string,
  thumbDirPath: string,
  file: string,
  width: number,
  height: number
) => {
  return await sharp(path.join(fullDirPath, file))
    .resize(width, height)
    .toFile(thumbDirPath + `\\${file}`);
};

export default resizeImage;
