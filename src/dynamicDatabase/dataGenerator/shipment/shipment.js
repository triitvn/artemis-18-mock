const faker = require("faker");
const generateLineItems = require("./lineItems");
const generateParcel = require("./parcel");

const generateShipment = () => {
  const shipment = {
    id: Number.parseInt(faker.datatype.number({ max: 99999 }), 10),
    shipment_status: "inactive",
    shipment_id: "SHIP7101192",
    line_items: generateLineItems(3),
    parcel: generateParcel()
  };
  return shipment;
};

module.exports = generateShipment;
