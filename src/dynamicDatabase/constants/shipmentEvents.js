const returnApproved = {
  event_type: "Request has been approved",
  event_time: "2022-01-01T00:05:00Z",
  parsed_event_time_timezone: "Etc/GMT-8",
  event_type_master_data: {
    key: "RETURN_EVENT_REQUEST_APPROVED",
    analytics: "regular"
  }
};

const returnCancelled = {
  event_type: "Request has been cancelled",
  event_time: "2022-01-01T01:05:00Z",
  parsed_event_time_timezone: "Etc/GMT-8",
  event_type_master_data: {
    key: "RETURN_EVENT_REQUEST_CANCELLED",
    analytics: "regular"
  }
};

const returnBookedSuccess = {
  event_type: "Parcel Book success",
  event_time: "2022-01-01T02:05:00Z",
  parsed_event_time_timezone: "Etc/GMT-8",
  event_type_master_data: {
    key: "RETURN_EVENT_BOOKED_SUCCESS",
    analytics: "regular"
  }
};

const returnBookedError = {
  event_type: "Parcel Book error",
  event_time: "2022-01-01T02:05:00Z",
  parsed_event_time_timezone: "Etc/GMT-8",
  event_type_master_data: {
    key: "RETURN_EVENT_BOOKED_ERROR",
    analytics: "exception"
  }
};

const returnCompleted = {
  event_type: "Refunded",
  event_time: "2022-01-10T00:05:00Z",
  parsed_event_time_timezone: "Etc/GMT-8",
  event_type_master_data: {
    key: "RETURN_EVENT_REFUND_COMPLETED",
    analytics: "regular"
  }
};

module.exports = {
  returnApproved,
  returnCancelled,
  returnCompleted,
  returnBookedSuccess,
  returnBookedError
};
