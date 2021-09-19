import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  background: #1e1e1e;
  border-bottom: 1px solid #414141;
  display: flex;
`;

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 960px;
  padding: 0 8px;
  display: flex;
`;

function Header(props) {
  return (
    <Wrapper>
      <Content></Content>
    </Wrapper>
  );
}

Header.propTypes = {};

export default Header;
