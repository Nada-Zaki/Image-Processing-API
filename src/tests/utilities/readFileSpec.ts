import path from 'path';
import readFile from '../../utilities/readFile';

describe('test read file function', () => {
  it('should return truthy value if file exists', async () => {
    const imgDir = __dirname.split('\\').slice(0, -3).join('\\');
    const file = await readFile(path.join(imgDir, 'assets', 'full'), 'fjord');
    expect(file).toBeTruthy();
  });

  it('should return undefined if file is not exist', async () => {
    const imgDir = __dirname.split('\\').slice(0, -3).join('\\');
    const file = await readFile(
      path.join(imgDir, 'assets', 'thumbnail'),
      'anything'
    );
    expect(file).toBeUndefined();
  });
});
