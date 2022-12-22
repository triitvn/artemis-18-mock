const { produce } = require("immer");
const RETURN_STATUSES = require("../../constants/returnStatuses");
const SHIPMENT_EVENTS = require("../../constants/shipmentEvents");
const PARCEL_EVENTS = require("../../constants/parcelEvents");
const generateShipment = require("./shipment");
const generateCollectionPoint = require("../collectionPoint");
const generateCarrier = require("../carrier");
const faker = require("faker");

// Utils

const addConfirmedCollectionPointData = (shipment, options = {}) => {
  const { documentFileFormat = "QR" } = options;

  return produce(shipment, (draft) => {
    draft.booking = {
      id: 1,
      collection_point: generateCollectionPoint(),
      carrier_label_response: {
        documents: {
          file_format: documentFileFormat,
        },
      },
    };
    draft.parcel.carrier = generateCarrier();
  });
};

const addBookPendingData = (shipment) => {
  let newShipment = produce(shipment, (draft) => {
    draft.return.return_status = "TO BE CONFIRMED";
  });
  newShipment = addConfirmedCollectionPointData(newShipment);
  return newShipment;
};

const updateReturnId = (shipment, returnId) =>
  produce(shipment, (draft) => {
    draft.return.return_id = returnId;
  });

// Return shipment lifecicle

const generateReturnShipment = () => {
  const shipment = generateShipment();
  return produce(shipment, (draft) => {
    shipment.id = "1";
    draft.shipment_type = "return";
    draft.shipment_events = [];
    draft.return = {
      return_comment: faker.lorem.lines(),
      return_item_image: [
        faker.image.abstract(),
        faker.image.abstract(),
        faker.image.abstract(),
      ],
    };
    draft.from_address = {
      postal_code: "saigon",
      email: "artemis@pp.com",
    };
    draft.line_items.forEach((lineItem) => {
      lineItem.reason_for_return = faker.lorem.lines();
    });
    draft.parcel.parcel_id = "PARCEL_ID_001";
    draft.parcel.status = "active";
  });
};

const generateApprovedShipment = () => {
  let shipment = generateReturnShipment();
  shipment = produce(shipment, (draft) => {
    draft.return.return_status = RETURN_STATUSES.approved;
    draft.shipment_events = [SHIPMENT_EVENTS.returnApproved];
  });
  shipment = updateReturnId(shipment, "APPROVED");
  return shipment;
};

const generateCancelledShipment = () => {
  let shipment = generateApprovedShipment();
  shipment = produce(shipment, (draft) => {
    draft.return.return_status = RETURN_STATUSES.cancelled;
    draft.shipment_events.unshift(SHIPMENT_EVENTS.returnCancelled);
  });
  shipment = updateReturnId(shipment, "CANCELLED");
  return shipment;
};

const generateBookPendingShipment = () => {
  let shipment = generateReturnShipment();
  shipment = addBookPendingData(shipment);
  shipment = updateReturnId(shipment, "BOOK_PENDING");
  return shipment;
};

const generateBookErrorShipment = () => {
  let shipment = generateApprovedShipment();
  shipment = produce(shipment, (draft) => {
    draft.shipment_events.unshift(SHIPMENT_EVENTS.returnBookedError);
  });
  shipment = updateReturnId(shipment, "BOOKED_ERROR");
  shipment = addConfirmedCollectionPointData(shipment);
  return shipment;
};

const generateBookedSuccessShipment = () => {
  let shipment = generateApprovedShipment();
  shipment = produce(shipment, (draft) => {
    draft.shipment_events.unshift(SHIPMENT_EVENTS.returnBookedSuccess);
    draft.return.return_status = RETURN_STATUSES.shipping;
  });
  shipment = addConfirmedCollectionPointData(shipment);
  shipment = updateReturnId(shipment, "BOOKED_SUCCESS");
  return shipment;
};

const generateBookedSuccessWithLabelShipment = () => {
  let shipment = generateApprovedShipment();
  shipment = produce(shipment, (draft) => {
    draft.shipment_events.unshift(SHIPMENT_EVENTS.returnBookedSuccess);
    draft.return.return_status = RETURN_STATUSES.shipping;
  });
  shipment = addConfirmedCollectionPointData(shipment, {
    documentFileFormat: "PDF",
  });
  shipment = updateReturnId(shipment, "BOOKED_SUCCESS--LABEL");
  return shipment;
};

const generateShippingShipment = () => {
  let shipment = generateBookedSuccessShipment();
  shipment = produce(shipment, (draft) => {
    shipment.return.return_status = RETURN_STATUSES.shipping;
    draft.parcel.events = [
      PARCEL_EVENTS.parcelPickedUp,
      PARCEL_EVENTS.parcelOrderProcessed,
    ];
  });
  shipment = updateReturnId(shipment, "SHIPPING");
  return shipment;
};

const generateReturnReceivedShipment = () => {
  let shipment = generateShippingShipment();
  shipment = produce(shipment, (draft) => {
    draft.return.return_status = RETURN_STATUSES.received;
    draft.shipment_events.unshift(SHIPMENT_EVENTS.qualityCheckInProgress);
  });
  shipment = updateReturnId(shipment, "RETURN_RECEIVED");
  return shipment;
};

const generateReturnCompletedShipment = () => {
  let shipment = generateReturnReceivedShipment();
  shipment = produce(shipment, (draft) => {
    draft.return.return_status = RETURN_STATUSES.completed;
    draft.shipment_events.unshift(SHIPMENT_EVENTS.returnCompleted);
  });
  shipment = updateReturnId(shipment, "RETURN_COMPLETED");
  return shipment;
};

const generateOrderShipments = () => {
  let approvedShipment = produce(generateApprovedShipment(), (draft) => {
    draft.id = 1;
    draft.return.return_id = "RETURN_1";
    draft.order_tracking = { order_code: "RETURN_APPROVED_COMPLETED" };
  });

  let returnCompleted = produce(generateReturnCompletedShipment(), (draft) => {
    draft.id = 2;
    draft.return.return_id = "RETURN_2";
    draft.order_tracking = { order_code: "RETURN_APPROVED_COMPLETED" };
  });

  return [approvedShipment, returnCompleted];
};

// Return shipment UI testing

const generateCustomReturnShipment = ({
  commentWord = 0,
  attachmentNo = 0,
}) => {
  let shipment = generateApprovedShipment();

  shipment = produce(shipment, (draft) => {
    draft.return.return_comment = commentWord
      ? faker.lorem.words(commentWord)
      : null;

    if (attachmentNo) {
      draft.return.return_item_image = [];
      for (let i = 0; i < parseInt(attachmentNo); i++) {
        draft.return.return_item_image.push(faker.image.abstract());
      }
    } else {
      draft.return.return_item_image = null;
    }
  });

  return shipment;
};

const generateAllShipmentKinds = () => {
  return [
    generateApprovedShipment(),
    generateBookErrorShipment(),
    generateBookedSuccessShipment(),
    generateCancelledShipment(),
    generateBookPendingShipment(),
    generateShippingShipment(),
    generateReturnCompletedShipment(),
    generateBookedSuccessWithLabelShipment(),
    generateReturnReceivedShipment(),
    ...generateOrderShipments(),
  ];
};

module.exports = {
  generateAllShipmentKinds,
  generateCancelledShipment,
  generateBookedSuccessShipment,
  generateCustomReturnShipment,
};
