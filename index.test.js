const request = require('supertest');
const app = require('./index'); 

test('GET / responds with JSON message', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ message: 'Hello, CI/CD World!' });
});
