const Faker = require('faker/locale/en_US');
const fs = require('fs');
const path = require('path');

let reservationData = fs.createWriteStream(
  path.resolve(__dirname, './postgresData.csv')
);

/*
 ** opentable.com random data generators
 */

// helpers
const randomizer = data => {
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

const neighborhood = [
  'Downtown',
  'Hollywood',
  'Long Beach',
  'Santa Monica',
  'Pasadena',
  'Ventura County',
  'Westside Hollywood',
  'Beverly Hills',
  'Valencia',
  'Uptown',
  'Downtown',
  'Westtown',
  'Easttown',
  'Funkytown'
];
const diningStyle = ['Casual Dining', 'Fine Dining', 'Casual Elegant'];
const dressCode = [
  'Casual',
  'Smart Casual',
  'Business Casual',
  'Casual Dress',
  'Jacket Preffered',
  'Formal',
  'Black Tie'
];
const cuisines = [
  'Contemporary American',
  'Global',
  'International',
  'Italian',
  'Continental',
  'American',
  'Vegitarian',
  'Farm-to-table',
  'French',
  'Californian',
  'Asian Fusion',
  'French American',
  'Steak House',
  'Japanese',
  'Barbecue',
  'Tapas / Small Plates',
  'Sushi',
  'Italian',
  'Seafood',
  'Contemporary Italian',
  'BBQ',
  'Comfort food'
];
const parkingDetails = [
  'We offer valet service at a charge',
  'Hotel offers valet service',
  'Hotel offers valet service at reduced rate',
  'Street Parking',
  'Metered Parking',
  '$10.00 for first 3 hours with validation; $20 for anything after that',
  'Free public parking located in the back',
  'Valet, $10 per vehicle',
  'You can park on the street at a meter, if available, or use our valet',
  'Private parking lot on both sides of the restaurant',
  'Valet Parking is complimentary'
];
const paymentOptions = [
  ['AMEX', 'Discover', 'Diners Club'],
  ['AMEX', 'Discover'],
  ['Discover', 'Diners Club'],
  ['Discover']
];
const additional = [
  'Bar Dining',
  'Bar/Lounge',
  'Beer',
  'BYO Wine',
  'Cocktails',
  'Corkage Fee',
  'Entertainment',
  'Full Bar',
  'High Tea',
  'Late Night',
  'Non-Smoking',
  'Outdoor Dining',
  'Weekend Brunch',
  'Wheelchair Access',
  'Wine',
  'Outdoor Smoking Area',
  'Private Room',
  'View',
  'Counter Seating',
  'Cafe',
  'Cocktails',
  'Banquet',
  'Happy Hour',
  'Takeout',
  'Gluten-Free Menu'
];

const hoursWeekday = [
  'Monday - Friday: 11am - 8pm',
  'Monday - Wednesday 11 AM - 10 PM Thursday - Friday 11 AM - 11 PM',
  'Monday - Friday: 11:30 am - 9:00 pm'
];
const hoursWeekend = [
  'Saturday - Sunday: 11am - 10pm',
  'Weekend Breakfast 8 AM - 12 PM Saturday Lunch/Dinner 12 PM - 11 PM Sunday Lunch/Dinner 12 PM - 10 PM',
  'Saturday & Sunday: 3:00 pm - 9:00 pm'
];
const website = [
  'www.bestfoodla.com',
  'www.lacuisine.com',
  'www.topchefdining.com',
  'www.goodeats.com',
  'www.yummyinmytummy.com',
  'www.foodcoma.com',
  'www.dontbothermeimeating',
  'www.toasted.com',
  'www.besteats.com',
  'www.eatandsleep.com'
];

// additional information generator
const additionalGenerator = () => {
  const array = [];
  for (let i = 0; i < 14; i += 1) {
    const random = randomizer(additional);
    if (!array.includes(random)) {
      array.push(random);
    }
  }
  return array;
};

// book counter generator
const bookCountGenerator = () => randomNumber();

// cross street generator
const crossStreetGenerator = () => Faker.address.streetName();

// cuisine generator
const cuisineGenerator = () => randomizer(cuisines);

// dining style generator
const diningStyleGenerator = () => randomizer(diningStyle);

// dress code generator
const dressCodeGenerator = () => randomizer(dressCode);

// executive chef generator
const chefGenerator = () => Faker.name.findName();

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
const phoneNumberGenerator = () => Faker.phone.phoneNumber();

// website generator
const websiteGenerator = () => randomizer(website);

// master generator
const populate = async () => {
  for (let i = 1; i <= 10; i += 1) {
    let line = '';
    line += crossStreetGenerator() + '| ';
    line += neighborhoodGenerator() + '| ';
    line += '"{' + hoursOfOperationGenerator().toString() + '}"' + '| ';
    line += cuisineGenerator() + '| ';
    line += diningStyleGenerator() + '| ';
    line += dressCodeGenerator() + '| ';
    line += parkingDetailsGenerator() + '| ';
    line += '"{' + paymentOptionsGenerator() + '}"' + '| ';
    line += chefGenerator() + '| ';
    line += '"{' + additionalGenerator() + '}"' + '| ';
    line += websiteGenerator() + '| ';
    line += phoneNumberGenerator() + '| ';
    line += bookCountGenerator();

    if (!reservationData.write(line + '\n')) {
      await new Promise(resolve => reservationData.once('drain', resolve));
    }
  }
};

reservationData.write(
  'restaurantCrossStreet|restaurantNeighborhood|restaurantHoursOfOperation|restaurantCuisine|restaurantDiningStyle|restaurantDressCode|restaurantParkingDetails|restaurantPaymentOptions|restaurantChef|restaurantAdditional|restaurantWebsite|restaurantPhoneNumber|restaurantBookCount|restaurantID\n',
  () => populate()
);
