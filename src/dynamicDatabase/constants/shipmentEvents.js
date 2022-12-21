const returnApproved = {
  event_type: "Request has been approved",
  event_time: "2022-01-01T00:05:00Z",
  parsed_event_time_timezone: "Etc/GMT-8",
  event_type_master_data: {
    key: "RETURN_EVENT_REQUEST_APPROVED",
    analytics: "regular",
    event_phase: {
      key: 'TEMPORARILY_KEY__APPROVED'
    }
  }
};

const returnCancelled = {
  event_type: "Request has been cancelled",
  event_time: "2022-01-01T01:05:00Z",
  parsed_event_time_timezone: "Etc/GMT-8",
  event_type_master_data: {
    key: "RETURN_EVENT_REQUEST_CANCELLED",
    analytics: "regular",
    event_phase: {
      key: 'TEMPORARILY_KEY__CANCELLED'
    }
  }
};

const returnBookedSuccess = {
  event_type: "Parcel Book success",
  event_time: "2022-01-01T02:05:00Z",
  parsed_event_time_timezone: "Etc/GMT-8",
  event_type_master_data: {
    key: "RETURN_EVENT_BOOKED_SUCCESS",
    analytics: "regular",
    event_phase: {
      key: 'TEMPORARILY_KEY__SHIPPING'
    }
  }
};

const returnBookedError = {
  event_type: "Parcel Book error",
  event_time: "2022-01-01T02:05:00Z",
  parsed_event_time_timezone: "Etc/GMT-8",
  event_type_master_data: {
    key: "RETURN_EVENT_BOOKED_ERROR",
    analytics: "exception",
    event_phase: {
      key: 'TEMPORARILY_KEY__BOOK_FAILED'
    }
  }
};

const returnReceived = {
  event_type: "Refunded",
  event_time: "2022-01-10T00:05:00Z",
  parsed_event_time_timezone: "Etc/GMT-8",
  event_type_master_data: {
    key: "RETURN_EVENT_RECEIVED",
    analytics: "regular",
    event_phase: {
      key: 'TEMPORARILY_KEY__RECEIVED'
    }
  }
};

const returnCompleted = {
  event_type: "Refunded",
  event_time: "2022-01-10T00:05:00Z",
  parsed_event_time_timezone: "Etc/GMT-8",
  event_type_master_data: {
    key: "RETURN_EVENT_REFUND_COMPLETED",
    analytics: "regular",
    event_phase: {
      key: 'TEMPORARILY_KEY__REFUND_COMPLETED'
    }
  }
};

module.exports = {
  returnApproved,
  returnCancelled,
  returnBookedSuccess,
  returnBookedError,
  returnReceived,
  returnCompleted,
};
