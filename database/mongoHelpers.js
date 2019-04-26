const Reservation = require('./mongoInit.js');

module.exports = {
  getAll: () => Reservation.find({}),
  getOne: restaurantID => Reservation.find({ restaurantID }).limit(1),
  updateOne: (restaurantID, obj) =>
    Reservation.findOneAndUpdate({ restaurantID }, obj),
  deleteOne: restaurantID => Reservation.remove({ restaurantID }),
  createOne: (
    obj //expects obj without restaurantID
  ) =>
    Reservation.find({})
      .sort({ restaurantID: -1 })
      .limit(1)
      .then(data => {
        obj.restaurantID = data[0].restaurantID + 1;
        return Reservation.create(obj);
      })
};
