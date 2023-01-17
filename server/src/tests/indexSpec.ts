import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Tests for image information end point', () => {
  it('should return status code 200 to be ok', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
  });
});
