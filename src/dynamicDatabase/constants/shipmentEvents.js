const STAGE_KEYS = {
  // Return shipment
  // TODO: need to confirm with product
  returnRequestReturn: "temporarily_key_request_return",
  returnSelectShipmentMethod: "temporarily_key_select_shipment_method",
  returnReturnProduct: "temporarily_key_return_product",
  returnRefundCompleted: "temporarily_key_refund_completed",
};

const returnApproved = {
  event_type: "Request has been approved",
  event_time: "2022-01-01T00:05:00Z",
  parsed_event_time_timezone: "Etc/GMT-8",
  event_type_master_data: {
    key: "RETURN_EVENT_REQUEST_APPROVED",
    analytics: "regular",
    event_phase: {
      event_stage: {
        key: STAGE_KEYS.returnSelectShipmentMethod,
      },
    },
  },
};

const returnCancelled = {
  event_type: "Request has been cancelled",
  event_time: "2022-01-02T00:05:00Z",
  parsed_event_time_timezone: "Etc/GMT-8",
  event_type_master_data: {
    key: "RETURN_EVENT_REQUEST_CANCELLED",
    analytics: "regular",
    event_phase: {
      event_stage: {
        key: STAGE_KEYS.returnSelectShipmentMethod,
      },
    },
  },
};

const returnBookedSuccess = {
  event_type: "Parcel Book success",
  event_time: "2022-01-02T02:00:00Z",
  parsed_event_time_timezone: "Etc/GMT-8",
  event_type_master_data: {
    key: "RETURN_EVENT_BOOKED_SUCCESS",
    analytics: "regular",
    event_phase: {
      event_stage: {
        key: STAGE_KEYS.returnReturnProduct,
      },
    },
  },
};

const returnBookedError = {
  event_type: "Parcel Book error",
  event_time: "2022-01-02T00:05:00Z",
  parsed_event_time_timezone: "Etc/GMT-8",
  event_type_master_data: {
    key: "RETURN_EVENT_BOOKED_ERROR",
    analytics: "exception",
    event_phase: {
      event_stage: {
        key: STAGE_KEYS.returnReturnProduct,
      },
    },
  },
};

const qualityCheckInProgress = {
  event_type: "Quality check in progress",
  event_time: "2022-01-10T00:05:00Z",
  parsed_event_time_timezone: "Etc/GMT-8",
  event_type_master_data: {
    key: "RETURN_EVENT_QUALITY_CHECK_IN_PROGRESS",
    analytics: "regular",
    event_phase: {
      event_stage: {
        key: STAGE_KEYS.returnReturnProduct,
      },
    },
  },
};

const returnCompleted = {
  event_type: "Refunded",
  event_time: "2022-01-10T02:00:00Z",
  parsed_event_time_timezone: "Etc/GMT-8",
  event_type_master_data: {
    key: "RETURN_EVENT_REFUND_COMPLETED",
    analytics: "regular",
    event_phase: {
      event_stage: {
        key: STAGE_KEYS.returnRefundCompleted,
      },
    },
  },
};

module.exports = {
  returnApproved,
  returnCancelled,
  returnBookedSuccess,
  returnBookedError,
  qualityCheckInProgress,
  returnCompleted,
};
