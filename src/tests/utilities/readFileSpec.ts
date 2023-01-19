import path from 'path';
import readFile from '../../utilities/readFile';

describe('test read file function', () => {
  it('should return truthy value if file exists', async () => {
    const imgDir = path.join(__dirname, '../../../assets', 'full');
    const file = await readFile(imgDir, 'fjord');
    expect(file).toBeTruthy();
  });

  it('should return undefined if file is not exist', async () => {
    const imgDir = path.join(__dirname, '../../../assets', 'thumbnail');
    const file = await readFile(imgDir, 'anything');
    expect(file).toBeUndefined();
  });
});
