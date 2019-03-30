const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/opentable');

const reservationSchema = new mongoose.Schema({
  restaurantID: Number,
  restaurantCrossStreet: String,
  restaurantNeighborhood: String,
  restaurantHoursOfOperation: Array,
  restaurantCuisine: String,
  restaurantDiningStyle: String,
  restaurantDressCode: String,
  restaurantParkingDetails: String,
  restaurantPaymentOptions: Array,
  restaurantChef: String,
  restaurantAddtional: Array,
  restaurantWebsite: String,
  restaurantPhoneNumber: String,
  restaurantBookCount: Number,
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
