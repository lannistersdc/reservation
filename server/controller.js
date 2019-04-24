const dbHelpers = require('../database/mongoHelpers.js'); //change to import dbHelpers
//import statement for postgresInit helpers

const controller = {
  getAll: (req, res) => {
    dbHelpers
      .getAll()
      .then(data => res.status(200).send(data))
      .catch(() => res.status(404).send('Get request failed'));
  },
  getOne: (req, res) => {
    const { restaurantID } = req.params;
    dbHelpers
      .getOne(restaurantID)
      .then(data => res.status(200).send(data))
      .catch(() => res.status(404).send('Get request failed'));
  },
  updateOne: (req, res) => {
    const { restaurantID } = req.params;
    dbHelpers
      .updateOne(restaurantID, req.body)
      .then(() => res.status(200).end('successfully updated'))
      .catch(err => {
        console.error(err);
        res.status(500).end('failed to update');
      });
  },
  deleteOne: (req, res) => {
    const { restaurantID } = req.params;
    dbHelpers
      .deleteOne(restaurantID)
      .then(() => res.status(200).end('successfully deleted'))
      .catch(err => {
        console.error(err);
        res.status(500).end('failed to delete');
      });
  },
  createOne: (req, res) => {
    dbHelpers
      .createOne(req.body)
      .then(() => res.status(200).end('successfully added user'))
      .catch(err => {
        console.error(err);
        res.status(500).end('failed to add user');
      });
  }
};

module.exports = controller;
