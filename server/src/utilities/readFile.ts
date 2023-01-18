import fs from 'fs';

const readFile = async (path: string, filename: string) => {
  let file;
  const images = await fs.promises.readdir(path);
  for (const image of images) {
    if (image.split('.')[0] === filename) {
      file = image;
      return file;
    }
  }
};

export default readFile;
