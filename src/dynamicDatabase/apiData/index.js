const generateCollectionPoints = require("./collectionPoints");
const generateListParcels = require("./listParcels");

const generateDatabase = () => {
  return {
    "collection-points": generateCollectionPoints(),
    "list-parcels": generateListParcels()
  };
};

module.exports = generateDatabase;
