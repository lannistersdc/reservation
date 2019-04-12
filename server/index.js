const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const cors = require('cors');
const router = require('./router');

const server = express();

server.use(morgan('dev'));
server.use(parser.json());
server.use(parser.urlencoded({ extended: true }));
server.use(cors());

server.use('/', express.static(`${__dirname}/../public`));
server.use('/api', router);

const port = process.env.PORT || 3002;

server.listen(port, () => console.log(`Server is listening on port: ${port}!`));
