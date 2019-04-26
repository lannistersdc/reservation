const pool = require('./postgresInit.js');

module.exports = {
  getAll: () => pool.query('select * from reservations'),
  getOne: restaurantID => {
    return pool
      .query('select * from reservations where "restaurantID" = $1', [
        restaurantID
      ])
      .then(data => data.rows[0]);
  },
  updateOne: (restaurantID, obj) => {
    let {
      restaurantCrossStreet,
      restaurantNeighborhood,
      restaurantHoursOfOperation,
      restaurantCuisine,
      restaurantDiningStyle,
      restaurantDressCode,
      restaurantParkingDetails,
      restaurantPaymentOptions,
      restaurantChef,
      restaurantAdditional,
      restaurantWebsite,
      restaurantPhoneNumber,
      restaurantBookCount
    } = obj;
    let params = [
      restaurantID,
      restaurantCrossStreet,
      restaurantNeighborhood,
      restaurantHoursOfOperation,
      restaurantCuisine,
      restaurantDiningStyle,
      restaurantDressCode,
      restaurantParkingDetails,
      restaurantPaymentOptions,
      restaurantChef,
      restaurantAdditional,
      restaurantWebsite,
      restaurantPhoneNumber,
      restaurantBookCount
    ];
    let queryString =
      'UPDATE RESERVATIONS SET "restaurantCrossStreet" = $2, "restaurantNeighborhood" = $3, "restaurantHoursOfOperation" = $4, "restaurantCuisine" = $5, "restaurantDiningStyle" = $6, "restaurantDressCode" = $7, "restaurantParkingDetails" = $8, "restaurantPaymentOptions" = $9, "restaurantChef" = $10, "restaurantAdditional" = $11, "restaurantWebsite" = $12, "restaurantPhoneNumber" = $13, "restaurantBookCount" = $14 WHERE "restaurantID" = $1';
    return pool.query(queryString, params).then(data => console.log(data));
  },
  deleteOne: restaurantID =>
    pool
      .query('DELETE FROM reservations WHERE "restaurantID" = $1', [
        restaurantID
      ])
      .then(data => console.log(data)),
  createOne: obj => {
    let {
      restaurantCrossStreet,
      restaurantNeighborhood,
      restaurantHoursOfOperation,
      restaurantCuisine,
      restaurantDiningStyle,
      restaurantDressCode,
      restaurantParkingDetails,
      restaurantPaymentOptions,
      restaurantChef,
      restaurantAdditional,
      restaurantWebsite,
      restaurantPhoneNumber,
      restaurantBookCount
    } = obj;
    let params = [
      restaurantCrossStreet,
      restaurantNeighborhood,
      restaurantHoursOfOperation,
      restaurantCuisine,
      restaurantDiningStyle,
      restaurantDressCode,
      restaurantParkingDetails,
      restaurantPaymentOptions,
      restaurantChef,
      restaurantAdditional,
      restaurantWebsite,
      restaurantPhoneNumber,
      restaurantBookCount
    ];
    let queryString =
      'INSERT INTO reservations ("restaurantCrossStreet","restaurantNeighborhood","restaurantHoursOfOperation","restaurantCuisine","restaurantDiningStyle","restaurantDressCode","restaurantParkingDetails","restaurantPaymentOptions","restaurantChef","restaurantAdditional","restaurantWebsite","restaurantPhoneNumber","restaurantBookCount") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)';
    return pool.query(queryString, params);
  }
};
