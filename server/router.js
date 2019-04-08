const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/reservation')
  .get(controller.getAll);

router
  .route('/reservation/id/:restaurantID')
  .get(controller.getOne);

module.exports = router;
