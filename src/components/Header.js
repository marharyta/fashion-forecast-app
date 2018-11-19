import { Logo } from "../../assets/images";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Header = ({ className }) => {
  return (
    <div className={className}>
      <img src={Logo} />
    </div>
  );
};

const StyledHeader = styled(Header)`
  width: 100%;
  background-color: white;
  padding: 10px;
  font-size: 18px;
  box-shadow: 2px 2px 2px black;
  height: 42px;

  img {
    display: block;
    margin: 0 auto;
    vertical-align: middle;
  }
`;

Header.propTypes = {
  className: PropTypes.any
};

export default StyledHeader;
