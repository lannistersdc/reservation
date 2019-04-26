const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://localhost/reservation', { useNewUrlParser: true })
  .then(() => console.log('Connected to Mongo'));

const reservationSchema = new mongoose.Schema({
  restaurantID: {
    type: Number,
    index: -1
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
  restaurantBookCount: Number
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
