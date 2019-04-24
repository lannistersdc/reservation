const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/reservation')
  .get(controller.getAll)
  .post(controller.createOne);

router
  .route('/reservation/id/:restaurantID')
  .get(controller.getOne)
  .put(controller.updateOne)
  .delete(controller.deleteOne);

module.exports = router;
