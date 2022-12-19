const faker = require("faker");
const { randomNullable, randomIdString } = require("../../utils/random");
const generateCarrier = require("../carrier");
const generateOperatingHourCalc = require("./operatingHoursCalc");

const generateCollectionPoint = () => {
  const postal_code = faker.address.zipCode("#####");
  const collectionPoint = {
    id: randomIdString(99999),
    uuid: randomIdString(99999),
    collection_point_identifier: randomIdString(99999),
    lat: Number.parseFloat(faker.address.latitude()),
    lng: Number.parseFloat(faker.address.longitude()),
    postal_code,
    address: {
      postal_code,
      name: randomNullable(() => faker.address.streetName()),
      full: randomNullable(() => faker.address.streetAddress(true)),
      line1: "",
      line2: "",
      line3: "",
      phone: faker.phone.phoneNumber()
    },
    carrier: generateCarrier(),
    operating_hours_calc: generateOperatingHourCalc()
  };
  return collectionPoint;
};

module.exports = generateCollectionPoint;
