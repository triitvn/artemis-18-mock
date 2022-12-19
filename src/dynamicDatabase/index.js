const generateApiData = require("./apiData");
const {
  generateCancelledShipment,
  generateBookedSuccessShipment,
  generateCustomReturnShipment
} = require("./dataGenerator/shipment/returnShipment");

module.exports = {
  generateApiData,
  generateCancelledShipment,
  generateBookedSuccessShipment,
  generateCustomReturnShipment
};
