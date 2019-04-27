const pg = require('pg');

// const connectionString =
//   'postgresql://sdcuser2:testing@13.59.2.110:5432/reservation';
// // 'postgresql://localhost:5432/reservation';
// console.log(connectionString);
// const pool = new pg.Pool({ connectionString });

const pool = new pg.Pool({
  user: 'sdcuser2',
  host: '13.59.2.110',
  database: 'reservation',
  password: 'testing',
  port: 5432
});

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
