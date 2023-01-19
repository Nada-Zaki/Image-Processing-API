import path from 'path';
import resizeImage from '../../utilities/resizeImage';

describe('test resize image function', () => {
  it('should return resized image name if name,width and height are valid', async () => {
    const imgDir = __dirname.split('\\').slice(0, -3).join('\\');
    const resizedImage = await resizeImage(
      path.join(imgDir, 'assets', 'full'),
      path.join(imgDir, 'assets', 'thumbnail'),
      'fjord.jpg',
      500,
      500
    );
    expect(resizedImage).toBeTruthy();
  });
});
