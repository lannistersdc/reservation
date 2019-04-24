const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://localhost/reservation', { useNewUrlParser: true })
  .then(() => console.log('Connected to Mongo'));

const reservationSchema = new mongoose.Schema({
  restaurantID: {
    type: Number,
    unique: true,
    index: true
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

// reservationSchema.index({ restaurantID: -1 });

const Reservation = mongoose.model('Reservation', reservationSchema);
// mongoose.connection.close();

module.exports = Reservation;
