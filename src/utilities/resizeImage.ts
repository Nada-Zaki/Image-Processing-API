import sharp from 'sharp';
import path from 'path';

const resizeImage = async (
  fullDirPath: string,
  thumbDirPath: string,
  file: string,
  width: number,
  height: number
): Promise<sharp.OutputInfo | void> => {
  // Prevent sharp library from keeping previously resized image open even if we changed the scale next time
  sharp.cache(false);
  try {
    return await sharp(path.join(fullDirPath, file))
      .resize(width, height)
      .toFile(thumbDirPath + `\\${file}`);
  } catch {
    throw new Error("Can't resize the image");
  }
};

export default resizeImage;
