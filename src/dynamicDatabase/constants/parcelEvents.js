const parcelOrderProcessed = {
  id: 97653699,
  carrier: {
    id: 81,
    name: "DHL eCommerce",
    carrier_id: "dhleco",
    carrier_logo: "//assets.parcelperform.com/logo/dhleco.png",
    carrier_url: "www.globalmail.dhl.com",
    carrier_cs_phone: "+1 317 554 5192",
    carrier_countries_iso: [],
    carrier_language: "en",
    carrier_support_languages: ["en"],
    cms_url: "https://www.parcelmonitor.com/track-dhl-ecommerce/",
    carrier_countries: [],
    timezone_awareness: "location_local_time",
    has_source_site: true,
    carrier_url_tracking: "www.globalmail.dhl.com"
  },
  event_type: "Order processed",
  event_type_master_data: null,
  event_time: "2022-12-08T23:20:03Z",
  event_location: "Thành phố Hồ Chí Minh, Thành phố Hồ Chí Minh, Việt Nam",
  additional_params: {},
  imported_date: "2022-12-13T13:01:06.352385Z",
  timezone_awareness: null,
  event_location_mapper_data: {
    id: 915890,
    locality: "Ho Chi Minh City",
    country: "Vietnam",
    postal_code: ""
  },
  original_time: "2022-12-09T06:20:03",
  original_event_type: "Order processed",
  original_location: "Ho Chi Minh",
  parsed_event_time: "2022-12-08T23:20:03Z",
  has_location_mapped: true,
  parsed_event_time_timezone: "Asia/Ho_Chi_Minh",
  event_input_source: "api",
  event_channel_type: "api",
  event_channel_details: "/v5/shipment",
  event_source_type: "account",
  event_source_details: "592",
  timezone_source: "location",
  event_type_mapped_date: null,
  event_type_mapper_data: {
    id: 242389
  }
};

const parcelPickedUp = {
  id: 97653700,
  carrier: {
    id: 81,
    name: "DHL eCommerce",
    carrier_id: "dhleco",
    carrier_logo: "//assets.parcelperform.com/logo/dhleco.png",
    carrier_url: "www.globalmail.dhl.com",
    carrier_cs_phone: "+1 317 554 5192",
    carrier_countries_iso: [],
    carrier_language: "en",
    carrier_support_languages: ["en"],
    cms_url: "https://www.parcelmonitor.com/track-dhl-ecommerce/",
    carrier_countries: [],
    timezone_awareness: "location_local_time",
    has_source_site: true,
    carrier_url_tracking: "www.globalmail.dhl.com"
  },
  event_type: "Pick-up successful",
  event_type_master_data: {
    id: 81,
    event_phase: {
      id: 3,
      event_stage: {
        id: 5,
        name: "Picked Up",
        key: "picked_up"
      },
      name: "(D) Pickup",
      key: "D"
    },
    name: "(R) Pick-up successful",
    key: "D20",
    display_name: "Pick-up successful",
    analytics: "regular",
    delay_exception_source: null,
    is_consumer_visible: true,
    is_shipping_event: true,
    is_final_event: false,
    is_cross_border: false,
    is_cod: false,
    is_fixed_address: false,
    owner_type: "parcel"
  },
  event_time: "2022-12-13T01:01:01Z",
  event_location: "Thành phố Hồ Chí Minh, Thành phố Hồ Chí Minh, Việt Nam",
  additional_params: {},
  imported_date: "2022-12-13T13:01:06.367138Z",
  timezone_awareness: null,
  event_location_mapper_data: {
    id: 915890,
    locality: "Ho Chi Minh City",
    country: "Vietnam",
    postal_code: ""
  },
  original_time: "2022-12-13T08:01:01",
  original_event_type: "Pick-up successful",
  original_location: "Ho Chi Minh",
  parsed_event_time: "2022-12-13T01:01:01Z",
  has_location_mapped: true,
  parsed_event_time_timezone: "Asia/Ho_Chi_Minh",
  event_input_source: "api",
  event_channel_type: "api",
  event_channel_details: "/v5/shipment",
  event_source_type: "account",
  event_source_details: "592",
  timezone_source: "location",
  event_type_mapped_date: "2022-12-13T13:01:06.361575Z",
  event_type_mapper_data: {
    id: 202174
  }
};

module.exports = {
  parcelOrderProcessed,
  parcelPickedUp
};