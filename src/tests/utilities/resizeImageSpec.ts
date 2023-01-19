import path from 'path';
import resizeImage from '../../utilities/resizeImage';

describe('test resize image function', () => {
  it('should return resized image name if name,width and height are valid', async () => {
    const imgDir = path.join(__dirname, '../../../assets');
    const resizedImage = await resizeImage(
      path.join(imgDir, 'full'),
      path.join(imgDir, 'thumbnail'),
      'fjord.jpg',
      500,
      500
    );
    expect(resizedImage).toBeTruthy();
  });
});
