require('newrelic');
const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const router = require('./router.js');
const path = require('path');

const server = express();

server.use(parser.json());
server.use(parser.urlencoded({ extended: true }));
server.use(cors());

server.use('/', express.static(`${__dirname}/../public`));
server.use('/api', router);
server.use('/loaderio-a0bdbe05317715285c8f52bc4061ce32/', (req, res) => {
  res.status(200).end('loaderio-a0bdbe05317715285c8f52bc4061ce32');
});

const port = process.env.PORT || 3002;

server.listen(port, () => console.log(`Server is listening on port: ${port}!`));
