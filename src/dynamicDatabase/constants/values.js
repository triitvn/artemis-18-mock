const SHIPMENT_TYPE = ["return", null];
const SHIPMENT_STATUS = ["inactive", "active"];

const RETURN_STATUS = [
  "booking pending",
  "pending approval",
  "rejected",
  "approved",
  "shipping",
  "completed",
  "cancelled",
  "inactive",
  "archived"
];

const DAYS_IN_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const FIRST_HALF_TIME = [
  "5hh30 - 12h30",
  "6h30 - 12h30",
  "7h30 - 12h30",
  "8h30 - 12h30",
  "9h30 - 12h30",
  "10h30 - 12h30",
  "11h30 - 12h30",
  "7h30 - 11h30",
  "8h30 - 11h30",
  "9h30 - 11h30"
];

const SECOND_HALF_TIME = [
  "13hh30 - 17h30",
  "14h30 - 18h30",
  "15h30 - 19h30",
  "16h30 - 20h30",
  "17h30 - 21h30",
  "18h30 - 22h30",
  "19h30 - 23h30",
  "20h30 - 21h30",
  "17h30 - 22h30",
  "17h30 - 23h30"
];

module.exports = {
  SHIPMENT_TYPE,
  SHIPMENT_STATUS,
  DAYS_IN_WEEK,
  FIRST_HALF_TIME,
  SECOND_HALF_TIME,
  RETURN_STATUS
};
