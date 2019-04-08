const Reservation = require('../database/index.js');

const controller = {
  getAll: (req, res) => {
    Reservation.find({})
      .then(data => res.status(200).send(data))
      .catch(() => res.status(404).send('Get request failed'));
  },
  getOne: (req, res) => {
    const { restaurantID } = req.params;
    Reservation.find({ restaurantID })
      .then(data => res.status(200).send(data))
      .catch(() => res.status(404).send('Get request failed'));
  },
};

module.exports = controller;
