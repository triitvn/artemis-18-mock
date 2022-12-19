const { randomNullable } = require("../../utils/random");
const {
  DAYS_IN_WEEK,
  FIRST_HALF_TIME,
  SECOND_HALF_TIME
} = require("./../../constants/values");

const randomTimeRange = () => {
  const maxNumberOfDays = Math.floor(Math.random() * 7);
  const timeRange = [];
  let index = 0;
  Array.from(new Array(maxNumberOfDays)).forEach(() => {
    index += 1;
    timeRange.push({
      operating_day: DAYS_IN_WEEK[index],
      first_open_hours: randomNullable(
        () => FIRST_HALF_TIME[Math.floor(Math.random() * 10)]
      ),
      second_open_hours: randomNullable(
        () => SECOND_HALF_TIME[Math.floor(Math.random() * 10)]
      )
    });
  });
  return timeRange;
};

const generateOperatingHourCalc = () => {
  return randomTimeRange();
};

module.exports = generateOperatingHourCalc;
