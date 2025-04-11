const request = require('supertest');
const express = require('express');
const app = express();

app.get('/health', (req, res) => res.status(200).send('OK'));

test('GET /health returns 200', async () => {
  const response = await request(app).get('/health');
  expect(response.statusCode).toBe(200);
});
