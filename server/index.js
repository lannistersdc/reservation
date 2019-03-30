const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const router = require('./router');

const server = express();

server.use(morgan('dev'));
server.use(parser.json());
server.use(parser.urlencoded({ extended: true }));

server.use('/api', router);

const port = 3002;

server.listen(port, () => console.log(`Server is listening on port: ${port}!`));
