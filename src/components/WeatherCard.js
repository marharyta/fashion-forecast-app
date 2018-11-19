import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Slider from "rc-slider";
import { Cloud } from "../../assets/icons";
// import "rc-slider/assets/index.css";
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Slider1 = createSliderWithTooltip(Slider.Range);

const marks = {
  0: {
    style: {
      color: "black"
    },
    label: (
      <div class="note">
        <p class="now-here">10°C</p> <p class="now-now">now</p>
      </div>
    )
  },
  1: {
    style: {
      color: "black"
    },
    label: (
      <div class="note">
        <p class="now">18°C</p> <p class="nowTwo">5pm</p>
      </div>
    )
  },
  2: {
    style: {
      color: "black"
    },
    label: (
      <div class="note">
        <p class="now"> 18°C</p> <p class="nowTwo">5pm</p>
      </div>
    )
  },
  3: {
    style: {
      color: "black"
    },
    label: (
      <div class="note">
        <p class="now">18°C</p> <p class="nowTwo">5pm</p>
      </div>
    )
  },
  4: {
    style: {
      color: "black"
    },
    label: (
      <div class="note">
        <p class="now">18°C</p> <p class="nowTwo">5pm</p>
      </div>
    )
  },
  5: {
    style: {
      color: "black"
    },
    label: (
      <div class="note">
        <p class="now">18°C</p> <p class="nowTwo">5pm</p>
      </div>
    )
  },
  6: {
    style: {
      color: "black"
    },
    label: (
      <div class="note">
        <p class="now">18°C</p> <p class="nowTwo">5pm</p>
      </div>
    )
  },
  7: {
    style: {
      color: "black"
    },
    label: (
      <div class="note">
        <p class="now">18°C</p> <p class="nowTwo">5pm</p>
      </div>
    )
  },
  10: {
    style: {
      color: "black"
    },
    label: (
      <div class="note">
        <p class="now">18°C</p> <p class="nowTwo">5pm</p>
      </div>
    )
  },
  11: {
    style: {
      color: "black"
    },
    label: (
      <div class="note">
        <p class="now">18°C</p> <p class="nowTwo">5pm</p>
      </div>
    )
  },
  12: {
    style: {
      color: "black"
    },
    label: (
      <div class="note">
        <p class="now">18°C</p> <p class="nowTwo">5pm</p>
      </div>
    )
  }
};

const WeatherCard = ({ className, weather }) => {
  //console.log("weather", weather);
  return (
    <div className={className}>
      <div className="weatherDescription">
        <div className="weatherIcon">
          <img src={Cloud} />
        </div>
        <div className="weatherMessage">
          <p>
            Take your gloves today is
            {weather ? weather.temperature.temp : ""}
          </p>
        </div>
      </div>
      <div className="feelsLikePanel">
        <p>Feels like</p>
        <div className="feelsLikeSlider">
          <Slider1
            allowCross={false}
            step={1}
            marks={marks}
            min={0}
            max={12}
            tipProps={{ placement: "top" }}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

const StyledWeatherCard = styled(WeatherCard)`
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  padding: 10px;
  font-size: 18px;
  min-height: 300px;
  height: 77vh;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 300;
  font-size: 27px;
  box-shadow: 0 3px 12px #6d6a6a;

  .weatherDescription {
    height: 50%;
  }

  .weatherIcon {
    display: inline-block;
    float: left;
    width: 50%;
    // height: 100px;
    background-color: pink;
    background-color: transparent;
    img {
      width: auto;
      height: 170px;
      max-width: 100%;
    }
  }

  .weatherMessage {
    display: inline-block;
    position: relative;
    float: left;
    width: 50%;
    // height: 100px;
    background-color: transparent;
    text-align: right;
    color: #6d6a6a;
    height: 170px;
    font-size: 27px;
    line-height: 1.5;

    p {
      position: absolute;
      top: 50%;
      transform: translate(0%, -50%);
    }
  }

  > .feelsLikePanel {
    display: inline-block;
    float: left;
    width: 100%;
    height: 200px;
    // background-color: green;
    padding-left: 5px;
    color: #6d6a6a;

    .feelsLikeSlider {
      padding-left: 50px;
      height: 200px;
    }

    .note {
      height: 100%;
      position: relative;
      color: #6d6a6a;
    }

    .now-here {
      height: 40px;
      // top: -20px;
      position: relative;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      line-height: 40px;
      top: -12px;
      font-size: 52px;
      font-family: "Unica One", cursive;
    }

    .now-now {
      height: 40px;
      font-size: 27px;
      // top: 0px;
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      line-height: 40px;
      font-size: 27px;
    }

    .now {
      height: 40px;
      // top: -20px;
      position: relative;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      line-height: 40px;
      font-size: 23px;
      font-family: "Unica One", cursive;
    }

    .nowTwo {
      height: 40px;
      // top: 10px;
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      line-height: 40px;
      font-size: 14px;
    }

    .rc-slider {
      position: relative;
      padding: 5px 0;
      border-radius: 6px;
      -ms-touch-action: none;
      touch-action: none;
      box-sizing: border-box;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

      top: 50px;
      width: 450%;
      height: 100px;
      top: 35px;
    }
    .rc-slider * {
      box-sizing: border-box;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .rc-slider-rail {
      position: absolute;
      width: 100%;
      background-color: #e9e9e9;
      height: 4px;
      border-radius: 6px;

      background-color: #6d6a6a;
      height: 2px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .rc-slider-track {
      position: absolute;
      left: 0;
      height: 4px;
      border-radius: 6px;
      background-color: #abe2fb;

      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .rc-slider-handle {
      position: absolute;
      margin-left: -7px;
      width: 14px;
      height: 14px;
      cursor: pointer;
      cursor: -webkit-grab;
      cursor: grab;
      border-radius: 50%;
      border: solid 2px #96dbfa;
      background-color: #fff;
      -ms-touch-action: pan-x;
      touch-action: pan-x;

      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .rc-slider-handle:focus {
      border-color: #57c5f7;
      box-shadow: 0 0 0 5px #96dbfa;
      outline: none;
    }
    .rc-slider-handle-click-focused:focus {
      border-color: #96dbfa;
      box-shadow: unset;
    }
    .rc-slider-handle:hover {
      border-color: #57c5f7;
    }
    .rc-slider-handle:active {
      border-color: #57c5f7;
      box-shadow: 0 0 5px #57c5f7;
      cursor: -webkit-grabbing;
      cursor: grabbing;
    }
    .rc-slider-mark {
      position: absolute;
      top: 18px;
      left: 0;
      width: 100%;
      font-size: 12px;

      top: -40px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      height: 100px;
    }
    .rc-slider-mark-text {
      position: absolute;
      display: inline-block;
      vertical-align: middle;
      text-align: center;
      cursor: pointer;
      color: #999;
      top: 10px;
      font-size: 23px;

      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      height: 100%;
    }
    .rc-slider-mark-text-active {
      color: #666;
      font-size: 48px;
      // top: -15px;
      height: 100%;
    }
    .rc-slider-step {
      position: absolute;
      width: 100%;
      height: 4px;
      background: transparent;

      height: 3px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .rc-slider-dot {
      position: absolute;
      bottom: -2px;
      margin-left: -4px;
      width: 8px;
      height: 8px;
      border: 2px solid #e9e9e9;
      background-color: #fff;
      cursor: pointer;
      border-radius: 50%;
      vertical-align: middle;

      background-color: black;
      border: 1px solid black;
    }
    .rc-slider-dot-active {
      border-color: #96dbfa;
      background-color: black;
    }
    .rc-slider-disabled {
      // background-color: #e9e9e9;
      // background-color: black;
    }
    .rc-slider-disabled .rc-slider-track {
      background-color: #ccc;
    }
    .rc-slider-disabled .rc-slider-handle,
    .rc-slider-disabled .rc-slider-dot {
      border-color: #ccc;
      box-shadow: none;
      background-color: #fff;
      cursor: not-allowed;
    }
    .rc-slider-disabled .rc-slider-mark-text,
    .rc-slider-disabled .rc-slider-dot {
      cursor: not-allowed !important;
    }
    .rc-slider-disabled .rc-slider-handle,
    .rc-slider-disabled .rc-slider-dot {
      background-color: #6d6a6a !important;
      border: 1px solid #6d6a6a !important;
    }
    .rc-slider-vertical {
      width: 14px;
      height: 100%;
      padding: 0 5px;
    }
    .rc-slider-vertical .rc-slider-rail {
      height: 100%;
      width: 4px;
    }
    .rc-slider-vertical .rc-slider-track {
      left: 5px;
      bottom: 0;
      width: 4px;
    }
    .rc-slider-vertical .rc-slider-handle {
      margin-left: -5px;
      margin-bottom: -7px;
      -ms-touch-action: pan-y;
      touch-action: pan-y;
    }
    .rc-slider-vertical .rc-slider-mark {
      top: 0;
      left: 18px;
      height: 100%;
    }
    .rc-slider-vertical .rc-slider-step {
      height: 100%;
      width: 4px;
    }
    .rc-slider-vertical .rc-slider-dot {
      left: 2px;
      margin-bottom: -4px;
    }
    .rc-slider-vertical .rc-slider-dot:first-child {
      margin-bottom: -4px;
    }
    .rc-slider-vertical .rc-slider-dot:last-child {
      margin-bottom: -4px;
    }
    .rc-slider-tooltip-zoom-down-enter,
    .rc-slider-tooltip-zoom-down-appear {
      animation-duration: 0.3s;
      animation-fill-mode: both;
      display: block !important;
      animation-play-state: paused;
    }
    .rc-slider-tooltip-zoom-down-leave {
      animation-duration: 0.3s;
      animation-fill-mode: both;
      display: block !important;
      animation-play-state: paused;
    }
    .rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,
    .rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {
      animation-name: rcSliderTooltipZoomDownIn;
      animation-play-state: running;
    }
    .rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {
      animation-name: rcSliderTooltipZoomDownOut;
      animation-play-state: running;
    }
    .rc-slider-tooltip-zoom-down-enter,
    .rc-slider-tooltip-zoom-down-appear {
      transform: scale(0, 0);
      animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    }
    .rc-slider-tooltip-zoom-down-leave {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }
    @keyframes rcSliderTooltipZoomDownIn {
      0% {
        opacity: 0;
        transform-origin: 50% 100%;
        transform: scale(0, 0);
      }
      100% {
        transform-origin: 50% 100%;
        transform: scale(1, 1);
      }
    }
    @keyframes rcSliderTooltipZoomDownOut {
      0% {
        transform-origin: 50% 100%;
        transform: scale(1, 1);
      }
      100% {
        opacity: 0;
        transform-origin: 50% 100%;
        transform: scale(0, 0);
      }
    }
    .rc-slider-tooltip {
      position: absolute;
      left: -9999px;
      top: -9999px;
      visibility: visible;
      box-sizing: border-box;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .rc-slider-tooltip * {
      box-sizing: border-box;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .rc-slider-tooltip-hidden {
      display: none;
    }
    .rc-slider-tooltip-placement-top {
      // padding: 4px 0 8px 0;
    }
    .rc-slider-tooltip-inner {
      padding: 6px 2px;
      min-width: 24px;
      height: 24px;
      font-size: 12px;
      line-height: 1;
      color: #fff;
      text-align: center;
      text-decoration: none;
      background-color: #6c6c6c;
      border-radius: 6px;
      box-shadow: 0 0 4px #d9d9d9;
    }
    .rc-slider-tooltip-arrow {
      position: absolute;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
    }
    .rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
      bottom: 4px;
      left: 50%;
      margin-left: -4px;
      border-width: 4px 4px 0;
      border-top-color: #6c6c6c;
    }
  }
`;

WeatherCard.propTypes = {
  className: PropTypes.any
};

export default StyledWeatherCard;
