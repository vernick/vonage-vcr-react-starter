
// server.test.js
const request = require('supertest');
const express = require('express');
const path = require('path');

const app = express();
const distPath = path.join(__dirname, '../..', 'client', 'dist');
console.log("Serving from:", distPath);


app.use(express.static(distPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

describe('GET /', () => {
  it('should serve the React app', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('<div id="root"></div>');
  });
});

