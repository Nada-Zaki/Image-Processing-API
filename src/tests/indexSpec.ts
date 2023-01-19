import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Tests for image information end point', () => {
  it('should return status code 200 to be ok', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });

  it('should return status code 400 as a bad request because of invalid width', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=200gjh&height=200'
    );
    expect(response.status).toBe(400);
  });

  it('should return status code 400 as a bad request because of invalid url', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(400);
  });

  it('should return status code 404 as a not found because the file name does not exist', async () => {
    const response = await request.get(
      '/api/images?filename=anything&width=200&height=200'
    );
    expect(response.status).toBe(404);
  });
});
