const faker = require("faker");
const { randomNullable, randomIdNumber } = require("../utils/random");

const generateCarrier = () => {
  return {
    id: randomIdNumber(9999),
    carrier_id: "dhleco",
    carrier_logo: "//assets.parcelperform.com/logo/dhleco.png",
    carrier_url: randomNullable(() => faker.internet.url()),
    name: randomNullable(() => faker.company.companyName()),
    phone: "8798790808098098"
  };
};

module.exports = generateCarrier;
