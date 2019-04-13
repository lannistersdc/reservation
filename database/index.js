const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reservation');

const reservationSchema = new mongoose.Schema({
  restaurantID: {
    type: Number,
    unique: true,
  },
  restaurantCrossStreet: String,
  restaurantNeighborhood: String,
  restaurantHoursOfOperation: Array,
  restaurantCuisine: String,
  restaurantDiningStyle: String,
  restaurantDressCode: String,
  restaurantParkingDetails: String,
  restaurantPaymentOptions: Array,
  restaurantChef: String,
  restaurantAdditional: Array,
  restaurantWebsite: String,
  restaurantPhoneNumber: String,
  restaurantBookCount: Number,
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
