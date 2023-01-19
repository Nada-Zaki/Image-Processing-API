import fs from 'fs';

const readFile = async (
  path: string,
  filename: string
): Promise<string | void> => {
  const images = await fs.promises.readdir(path);
  for (const image of images) {
    if (image.split('.')[0] === filename) {
      return image;
    }
  }
};

export default readFile;
