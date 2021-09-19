import React from "react";
import styled from "styled-components";

import breakpoints from "../configs/breakpoints";

import Header from "./Header";
import CTA from "./CTA";
import Footer from "./Footer";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-image: url(/images/background-desktop.jpeg), linear-gradient(to bottom, #0b181d, #0b181d);
  background-color: #0d0d0d;
  background-repeat: no-repeat;
  background-position: top;
  position: relative;
  color: #fff;
  display: flex;
  flex-direction: column;
  @media ${breakpoints.laptop} {
    background-image: url(/images/background-laptop.jpeg), linear-gradient(to bottom, #0b181d, #0b181d);
  }
  @media ${breakpoints.tablet} {
    background-image: url(/images/background-tablet.jpeg), linear-gradient(to bottom, #0b181d, #0b181d);
    background-size: contain;
  }
`;

function DefaultLayout({ children }) {
  return (
    <Container>
      <Header />
      <CTA />
      {children}
      <Footer />
    </Container>
  );
}

export default DefaultLayout;
