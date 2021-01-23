const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ it: 'works!' });
});

module.exports = {
  path: '/api',
  handler: app,
};
