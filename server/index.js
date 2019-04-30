const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const cors = require('cors');
const router = require('./router.js');
const path = require('path');

const server = express();

server.use(morgan('dev'));
server.use(parser.json());
server.use(parser.urlencoded({ extended: true }));
server.use(cors());

server.use('/', express.static(`${__dirname}/../public`));
server.use('/api', router);
server.use(
  '/loaderio-829903ea44142be827d190595de1caaf/',
  (req, res) => {
    console.log('im in here');
    res.status(200).end('found it');
  }
  // express.static(
  //   path.resolve(__dirname, '../loaderio-829903ea44142be827d190595de1caaf.txt')
  // )
);

const port = process.env.PORT || 3002;

server.listen(port, () => console.log(`Server is listening on port: ${port}!`));
