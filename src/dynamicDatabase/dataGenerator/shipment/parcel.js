const faker = require("faker");
const PARCEL_STATUS = ["active", "pending", "delivery"];

const generateParcel = () => {
  const parcel = {
    id: Number.parseInt(faker.datatype.number({ max: 99999 }), 10),
    parcel_id: "",
    status: PARCEL_STATUS[Math.floor(Math.random() * 3)],
    updated_date: new Date().toISOString(),
    carrier: null,
    last_event: null,
    events: []
  };
  return parcel;
};

module.exports = generateParcel;
