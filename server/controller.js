const Reservation = require('../database/index.js');

const controller = {
  get: (req, res) => {
    Reservation.find({})
      .then(data => res.status(200).send(data))
      .catch(() => res.status(404).send('Get request failed'));
  },
};

module.exports = controller;
