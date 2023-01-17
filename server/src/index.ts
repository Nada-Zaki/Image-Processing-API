import express from 'express';
import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

const app = express();
const port = 3000;

app.get('/api/images', (req, res) => {
  const filename = req.query.filename;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  const fullDirPath = path.join(
    __dirname.split('\\').slice(0, -1).join('\\'),
    'assets',
    'full'
  );
  const thumbDirPath = path.join(
    __dirname.split('\\').slice(0, -1).join('\\'),
    'assets',
    'thumb'
  );
  let file: string;

  fs.readdir(fullDirPath, (err, images) => {
    if (err) {
      res.send('Unable to scan directory: ' + err);
    }
    images.forEach((image) => {
      if (image.split('.')[0] === filename) {
        file = image;
      }
    });
    if (!file) {
      res.send('This image does not exist');
    } else {
      sharp(path.join(fullDirPath, file))
        .resize(width, height)
        .toFile(thumbDirPath + `\\${file}`)
        .then(() => res.sendFile(path.join(thumbDirPath, file)));
    }
  });
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
