const faker = require("faker");

const randomNullable = (randomAction, probability = 0.5) => {
  const arrRandomActions = [randomAction, null];
  const randomValue = arrRandomActions[Math.floor(Math.random() * 1)];
  if (!randomValue) {
    return null;
  }
  return randomValue();
};

const randomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const randomIdNumber = (max) => {
  return Number.parseInt(faker.datatype.number({ max }), 10);
};

const randomIdString = (max) => {
  return "" + faker.datatype.number({ max });
};

module.exports = {
  randomIdNumber,
  randomNullable,
  randomIdString,
  randomNumber
};
