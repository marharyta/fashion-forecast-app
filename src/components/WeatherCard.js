import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const WeatherCard = ({ className, weather }) => {
  console.log("weather", weather);
  return (
    <div className={className}>
      <p>{weather ? weather.temperature.temp : ""}</p>
      <p>hello 2</p>
      <p>hello 3</p>
    </div>
  );
};

const StyledWeatherCard = styled(WeatherCard)`
  width: 100%;
  background-color: orange;
  padding: 10px;
  font-size: 18px;
  box-shadow: 2px 2px 2px black;
  height: 300px;
`;

WeatherCard.propTypes = {
  className: PropTypes.any
};

export default StyledWeatherCard;
