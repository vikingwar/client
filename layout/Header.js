import React from "react";
import Image from "next/image";

import styled from "styled-components";

import breakpoints from "../configs/breakpoints";

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
  width: 1368px;
  padding: 0 14px;
  display: flex;
  @media ${breakpoints.laptop} {
    width: 960px;
  }
  @media ${breakpoints.tablet} {
    width: 100%;
  }
`;

const Logo = styled.a`
  cursor: pointer;
`;

const Menu = styled.a`
  display: flex;
`;

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  text-transform: uppercase;
  cursor: pointer;
  font-family: MuseoSans;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  transition: border-color 0s;
  border: solid transparent;
  border-width: 0 1px;
  &:hover {
    background-color: #2e2e2e;
    border-color: #504e4e;
  }
`;

function Header() {
  return (
    <Wrapper>
      <Content>
        <Logo>
          <Image src="/images/logo.png" alt="Logo" width={43} height={43} />
        </Logo>
        <Menu>
          <MenuItem>Game Info</MenuItem>
          <MenuItem>Game Guides</MenuItem>
          <MenuItem>News</MenuItem>
          <MenuItem>Faq</MenuItem>
        </Menu>
      </Content>
    </Wrapper>
  );
}

Header.propTypes = {};

export default Header;
