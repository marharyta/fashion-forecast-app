// require("es6-promise").polyfill();
// require("isomorphic-fetch");

// ACTIONS VARIABLES FOR WEATHER
export const REQUEST_WEATHER = "REQUEST_WEATHER";
export const RECEIVE_WEATHER = "RECEIVE_WEATHER";
export const FAIL_WEATHER = "FAIL_WEATHER";

// ACTION CREATORS FOR WEATHER
export function requestWeather() {
  return {
    type: REQUEST_WEATHER,
    isFetching: true,
    payload: {},
    error: null
  };
}

export function receiveWeather(data) {
  console.log("redux action 2", data);
  return {
    type: RECEIVE_WEATHER,
    isFetching: false,
    payload: {
      weather: {
        descriotion: data.weather[0].description,
        weatherLocation: {
          coords: data.coord,
          city: name,
          countryCode: data.sys.country,
          sunrice: data.sys.sunrise,
          sunset: data.sys.sunset
        },
        temperature: {
          temp: data.main.temp,
          maxTemp: data.main.temp_max,
          minTemp: data.main.temp_min
        },
        wind: {
          deg: data.wind.deg,
          speed: data.wind.speed
        },
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        clouds: data.clouds.all
      }
    },
    lastUpdated: new Date(),
    error: null
  };
}

export function failWeather(error) {
  return {
    type: FAIL_WEATHER,
    payload: {
      error: error,
      payload: {},
      isFetching: false
    }
  };
}

export function fetchWeather() {
  return function(dispatch) {
    dispatch(requestWeather());
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Helsinki&APPID=804651b00a6f6491fbd5fc7bc0e63209"
    )
      .then(res => res.json())
      .then(result => {
        // console.log("test", res);
        // if (res.cod === 200) {
        //   store.dispatch(fetchWeather(res));
        // }
        if (result) {
          console.log("redux action", result);
          dispatch(receiveWeather(result));
        }
      })
      .catch(error => {
        console.log("redux action 3", error);
        dispatch(failWeather(error));
      });
  };
}
