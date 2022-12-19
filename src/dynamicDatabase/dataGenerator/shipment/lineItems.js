const faker = require("faker");

const generateLineItems = (numberOfLineItems) => {
  const lineItems = [];
  Array.from(new Array(numberOfLineItems)).forEach(() => {
    const lineItem = {
      product_name: faker.commerce.productName(),
      product_description: faker.commerce.productDescription(),
      product_image_url: faker.image.imageUrl(),
      product_image_original_url: faker.image.imageUrl(),
      product_url: faker.internet.url(),
      quantity: Number.parseInt(faker.datatype.number({ max: 999 }), 10),
      currency_code: "USD",
      total_price: Number.parseFloat(faker.commerce.price),
      product_id: "RFT001-UPDATE",
      guid: "0184371f-817c-056f-bf75-c8ae59d5085e"
    };
    lineItems.push(lineItem);
  });
  return lineItems;
};

module.exports = generateLineItems;
