const pg = require('pg');

const connectionString = 'postgresql://localhost:5432/reservation';
const pool = new pg.Pool({ connectionString });

pool
  .query(
    'CREATE TABLE reservations("restaurantID" serial, "restaurantCrossStreet" text NOT NULL, "restaurantNeighborhood" text NOT NULL, "restaurantHoursOfOperation" text[] NOT NULL, "restaurantCuisine" text NOT NULL, "restaurantDiningStyle" text NOT NULL, "restaurantDressCode" text NOT NULL, "restaurantParkingDetails" text NOT NULL, "restaurantPaymentOptions" text[] NOT NULL, "restaurantChef" text NOT NULL, "restaurantAdditional" text[] NOT NULL, "restaurantWebsite" text NOT NULL, "restaurantPhoneNumber" text NOT NULL, "restaurantBookCount" integer NOT NULL);'
  )
  .then(data => console.log('table created', data))
  .then(() =>
    pool.query(
      `COPY reservations("restaurantCrossStreet","restaurantNeighborhood","restaurantHoursOfOperation","restaurantCuisine","restaurantDiningStyle","restaurantDressCode","restaurantParkingDetails","restaurantPaymentOptions","restaurantChef","restaurantAdditional","restaurantWebsite","restaurantPhoneNumber","restaurantBookCount") from '/Users/charlesspinosa/Documents/Hack Reactor/SDC/reservation/data/postgresData.csv' delimiter '|' CSV header`
    )
  )
  .then(() =>
    pool.query(
      'CREATE INDEX restID_desc on reservations ("restaurantID" DESC);'
    )
  )
  .catch(err => console.log(err));

module.exports = pool;
