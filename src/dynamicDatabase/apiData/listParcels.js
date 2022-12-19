const {
  generateAllShipmentKinds
} = require("../dataGenerator/shipment/returnShipment");

module.exports = () => {
  return generateAllShipmentKinds();
};
