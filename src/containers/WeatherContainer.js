import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchWeather } from "../redux/weatherActions";
import { store } from "../redux/store";
import StyledWeatherCard from "../components/WeatherCard";

const mapStateToProps = store => {
  return {
    weather: store.payload.weather
  };
};

class ConnectedWeatherContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("component re-rendered");
    console.log("weather", this.props.weather);
    return <StyledWeatherCard weather={this.props.weather} />;
  }
}

ConnectedWeatherContainer.propTypes = {
  fetchWeather: PropTypes.func
};

const WeatherContainer = connect(mapStateToProps)(ConnectedWeatherContainer);
export default WeatherContainer;
