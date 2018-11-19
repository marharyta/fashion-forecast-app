import React from "react";
import { render } from "react-dom";
import ConnectedWeatherContainer from "./containers/WeatherContainer";
import { Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { fetchWeather } from "./redux/weatherActions";
// import StyledAppWrapper from "./components/GlobalStyles";
import StyledHeader from "./components/Header";
import GlobalStyles from "./components/GlobalStyles";

export const history = createBrowserHistory();

class App extends React.Component {
  componentDidMount() {
    store.dispatch(fetchWeather());
  }

  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <GlobalStyles />
          <StyledHeader />
          <ConnectedWeatherContainer />
        </React.Fragment>
      </Provider>
    );
  }
}
render(<App />, document.getElementById("app"));
