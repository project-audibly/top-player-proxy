const express = require('express');
const bodyParser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
// const database = require('../db/index.js');

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/', createProxyMiddleware({ target: 'localhost:3000', changeOrigin: true }))
app.use('/songData', createProxyMiddleware({ target: 'http://localhost:3001' }))
app.use('/api/comments', createProxyMiddleware({ target: 'http://localhost:3002' }))
app.use('/songs', createProxyMiddleware({ target: 'http://localhost:3004' }))

app.use(express.static('client'));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
