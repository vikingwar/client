import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Header from "./Header";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-image: url(https://cdn01.x-plarium.com/browser/content/minisites/vikings/bg/inner-page-bg.jpg),
    linear-gradient(to bottom, #0b181d, #0b181d);
  background-color: #0d0d0d;
  background-repeat: no-repeat;
  background-position: top;
  position: relative;
`;

function DefaultLayout({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

DefaultLayout.propTypes = {};

export default DefaultLayout;
