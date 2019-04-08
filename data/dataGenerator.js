const mongoose = require('mongoose');
const Reservation = require('../database/index.js');

/*
** opentable.com random data generators
*/

// helpers
const randomizer = (data) => {
  const i = Math.floor(Math.random() * data.length);
  return data[i];
};

const randomBoolean = () => {
  const conditions = [true, false];
  const i = Math.floor(Math.random() * conditions.length);
  return conditions[i];
};

const randomNumber = () => {
  const num = Math.floor(Math.random() * 50);
  return num;
};

// datasets
const streets = ['7th Street', 'Santa Fe Avenue', 'N. La Brea Boulevard', 'Alameda Boulevard', 'Sepulveda Boulevard', '11th Street', 'Flower Street', 'Santa Monica Boulevard', 'Valley Boulevard'];
const neighborhood = ['Downtown', 'Hollywood', 'Long Beach', 'Santa Monica', 'Pasadena', 'Ventura County', 'Westside Hollywood', 'Beverly Hills', 'Valencia'];
const diningStyle = ['Casual Dining', 'Fine Dining', 'Casual Elegant'];
const dressCode = ['Smart Casual', 'Business Casual', 'Casual Dress', 'Jacket Preffered'];
const cuisines = ['Contemporary American', 'Global', 'International', 'Italian', 'Continental', 'American', 'Vegitarian', 'French', 'Californian', 'French American', 'Steak House', 'Japanese', 'Barbecue', 'Tapas / Small Plates', 'Sushi', 'Italian', 'Seafood', 'Contemporary Italian'];
const parkingDetails = ['We offer valet service at a charge', 'Hotel offers valet service', 'Hotel offers valet service at reduced rate', 'Street Parking', 'Metered Parking', '$10.00 for first 3 hours with validation; $20 for anything after that', 'Free public parking located in the back', 'Valet, $10 per vehicle', 'You can park on the street at a meter, if available, or use our valet', 'Private parking lot on both sides of the restaurant', 'Valet Parking is complimentary'];
const paymentOptions = [['AMEX', 'Discover', 'Diners Club'], ['AMEX', 'Discover'], ['Discover', 'Diners Club'], ['Discover']];
const additional = ['Bar Dining', 'Bar/Lounge', 'Beer', 'BYO Wine', 'Cocktails', 'Corkage Fee', 'Entertainment', 'Full Bar', 'High Tea', 'Late Night', 'Non-Smoking', 'Outdoor Dining', 'Weekend Brunch', 'Wheelchair Access', 'Wine', 'Outdoor Smoking Area', 'Private Room', 'View', 'Counter Seating', 'Cafe', 'Cocktails', 'Banquet', 'Happy Hour', 'Takeout', 'Gluten-Free Menu'];
const chef = ['Mireya Medina', 'Ryan DeNicola', 'Gerardo Lopez', 'Nicola Mastronardi', 'Suzanne Goin', 'Suzanne Tracht', 'Gerry Benitez', 'Gary T. Menes', 'Walter Manzke', 'Marcello Fiorentino'];
const phoneNumber = ['(213) 827-2777', '(213) 907-9123', '(213) 691-3131', '(213) 627-2434', '(310) 826-2654', '(310) 537-7600', '(310) 760-2332', '(310) 704-6410', '(710) 627-2434', '(710) 324-2434', '(710) 899-9913', '(818) 813-1239', '(710) 913-4455', '(710) 677-9913'];
const hoursWeekday = ['Monday - Friday: 11am - 8pm', 'Monday - Wednesday 11 AM - 10 PM Thursday - Friday 11 AM - 11 PM', 'Monday - Friday, 11:30 am - 9:00 pm'];
const hoursWeekend = ['Saturday - Sunday: 11am - 10pm', 'Weekend Breakfast 8 AM - 12 PM Saturday Lunch/Dinner 12 PM - 11 PM Sunday Lunch/Dinner 12 PM - 10 PM', 'Saturday & Sunday, 3:00 pm - 9:00 pm'];

// additional information generator
const additionalGenerator = () => {
  const array = [];
  for (let i = 0; i < 14; i += 1) {
    if (!array.includes(randomizer(additional))) {
      array.push(randomizer(additional));
    }
  }
  return array;
};

// book counter generator
const bookCountGenerator = () => randomNumber();

// cross street generator
const crossStreetGenerator = () => randomizer(streets);

// cuisine generator
const cuisineGenerator = () => randomizer(cuisines);

// dining style generator
const diningStyleGenerator = () => randomizer(diningStyle);

// dress code generator
const dressCodeGenerator = () => randomizer(dressCode);

// executive chef generator
const chefGenerator = () => randomizer(chef);

// hours of operation generator
const hoursOfOperationGenerator = () => {
  const array = [];
  array.push(randomizer(hoursWeekday));
  array.push(randomizer(hoursWeekend));
  return array;
};

// neighborhood generator
const neighborhoodGenerator = () => randomizer(neighborhood);

// parking details generator
const parkingDetailsGenerator = () => randomizer(parkingDetails);

// payment options generator
const paymentOptionsGenerator = () => {
  const array = ['Mastercard', 'Visa'];
  if (randomBoolean()) {
    array.push(randomizer(paymentOptions));
  } else if (randomBoolean()) {
    array.push(randomizer(paymentOptions));
  }
  return [].concat(...array);
};

// phone number generator
const phoneNumberGenerator = () => randomizer(phoneNumber);

// master generator
const masterGenerator = () => {
  const array = [];
  for (let i = 1; i <= 100; i += 1) {
    let obj = {};
    obj.restaurantID = i;
    obj.restaurantCrossStreet = crossStreetGenerator();
    obj.restaurantNeighborhood = neighborhoodGenerator();
    obj.restaurantHoursOfOperation = hoursOfOperationGenerator();
    obj.restaurantCuisine = cuisineGenerator();
    obj.restaurantDiningStyle = diningStyleGenerator();
    obj.restaurantDressCode = dressCodeGenerator();
    obj.restaurantParkingDetails = parkingDetailsGenerator();
    obj.restaurantPaymentOptions = paymentOptionsGenerator();
    obj.restaurantChef = chefGenerator();
    obj.restaurantAddtional = additionalGenerator();
    obj.restaurantWebsite = '';
    obj.restaurantPhoneNumber = phoneNumberGenerator();
    obj.restaurantBookCount = bookCountGenerator();
    array.push(obj);
    obj = {};
  }
  return array;
};

const data = masterGenerator();

const seeder = (array) => {
  Reservation.insertMany(array)
    .then(() => mongoose.connection.close())
    .catch(err => console.error(err));
};

seeder(data);
