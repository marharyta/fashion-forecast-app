import React from "react";
import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400');
@import url('https://fonts.googleapis.com/css?family=Unica+One');
/* 
  http://meyerweb.com/eric/tools/css/reset/
  v4.0 | 20180602
  License: none (public domain)
*/

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html, body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
  }
  button {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
  }
  a {
    text-decoration: none;
  }
  #app {
    min-height: 100vh;
    width: 100vw;
    position: relative;
    overflow-y: hidden;
  }
`;

// #app {
//   min-height: 100vh;
//   position: relative;
//   overflow-y: hidden;

//   .app-wrapper{
//     position: relative;
//     min-height: 74vh;
//     overflow-y: hidden;
//   }

//   footer{
//     position: relative;
//     min-height: 26vh;
//   }
// }

export default GlobalStyles;
