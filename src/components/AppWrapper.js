import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AppWrapper = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const StyledAppWrapper = styled(AppWrapper)`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: block;
`;

AppWrapper.propTypes = {
  className: PropTypes.any,
  text: PropTypes.string
};

export default StyledAppWrapper;
