const collectionPoinGenerator = require("../dataGenerator/collectionPoint");

const generateCollectionPoints = (numberOfCollectionPoints) => {
  const collectionPoints = [];
  Array.from(new Array(numberOfCollectionPoints)).forEach(() => {
    collectionPoints.push(collectionPoinGenerator());
  });
  return collectionPoints;
};

module.exports = () => {
  const NUMBER_OF_COLLECTION_POINTS = 100;
  return generateCollectionPoints(NUMBER_OF_COLLECTION_POINTS);
};
