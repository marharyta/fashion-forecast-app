import {
  REQUEST_WEATHER,
  RECEIVE_WEATHER,
  FAIL_WEATHER
} from "./weatherActions";

// INITIAL STATES FOR ALL PRODUCT CATALOGUE REDUCERS
export const initialWeather = {
  isFetching: false,
  payload: {},
  lastUpdated: 0,
  error: null
};

// REDUCER FOR WEATHER
export const weather = (state = initialWeather, action) => {
  switch (action.type) {
    case REQUEST_WEATHER:
      console.log("REQUEST_WEATHER", action);
      return {
        ...state,
        isFetching: action.isFetching,
        payload: action.payload,
        error: action.error
      };
    case RECEIVE_WEATHER:
      console.log("RECEIVE_WEATHER", action);
      return {
        ...state,
        isFetching: action.isFetching,
        payload: action.payload,
        error: action.error
      };
    case FAIL_WEATHER:
      console.log("FAIL_WEATHER", action);
      return {
        ...state,
        isFetching: action.isFetching,
        payload: action.payload,
        error: action.error
      };

    default:
      return state;
  }
};
