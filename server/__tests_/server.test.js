// server.test.js
const request = require('supertest');
const express = require('express');
const path = require('path');

// Set up a minimal Express server to serve the React app
const app = express();
app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

describe('GET /', () => {
  it('should serve the React app', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('<div id="root"></div>');  // React app's default root div
  });
});
