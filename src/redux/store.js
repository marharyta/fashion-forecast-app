import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";
import { weather } from "./weatherReducer";
// import { createStore } from "redux";

// const combinedReducer = combineReducers({
//   weather: weather
// });

// export const store = createStore(weather);

export const store = createStore(weather, applyMiddleware(thunkMiddleware));
