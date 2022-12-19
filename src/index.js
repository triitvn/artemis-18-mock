const jsonServer = require("json-server");
const {
  generateApiData,
  generateCancelledShipment,
  generateBookedSuccessShipment,
  generateCustomReturnShipment
} = require("./dynamicDatabase");
const server = jsonServer.create();
const router = jsonServer.router(generateApiData());
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

router.render = (req, res, next) => {
  // mock cancel API
  if (/cancel\//.test(req._parsedUrl.pathname)) {
    res.status(200).jsonp(generateCancelledShipment());
    return;
  }

  // mock booking API
  if (/book\//.test(req._parsedUrl.pathname)) {
    res.status(200).jsonp(generateBookedSuccessShipment());
    return;
  }

  // mock custom return shipment
  if (/^CUSTOM/.test(req.query["return.return_id"])) {
    const returnId = req.query["return.return_id"];

    // Sample format: CUSTOM_comment:100_attachment:100
    const query = returnId
      .split("CUSTOM")[1]
      .split("_")
      .reduce((acc, item) => {
        const [key, value] = item.split(":");
        return {
          ...acc,
          [key]: value
        };
      }, {});

    res.status(200).jsonp([generateCustomReturnShipment(query)]);
    return;
  }

  return res.jsonp(res.locals.data);
};

// Use default router
server.use("/api", router);
server.listen(3000, () => {
  console.log("JSON Server is running");
  console.log("aaa");
  console.log("aaaaaaab");
});
