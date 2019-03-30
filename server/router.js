const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/reservation/:restaurantID')
  .get(controller.get);

module.exports = router;
