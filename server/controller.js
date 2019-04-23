const Reservation = require('../database/mongoInit.js'); //change to import dbHelpers
//import statement for postgresInit helpers

const controller = {
  getAll: (req, res) => {
    console.log('hello from getAll controller');
    Reservation.find({})
      .then(data => res.status(200).send(data))
      .catch(() => res.status(404).send('Get request failed'));
  },
  getOne: (req, res) => {
    console.log('hello from getOne controller');
    const { restaurantID } = req.params;
    Reservation.find({ restaurantID })
      .then(data => res.status(200).send(data))
      .catch(() => res.status(404).send('Get request failed'));
  }
};

module.exports = controller;
