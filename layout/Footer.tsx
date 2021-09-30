import React from "react";

import styled from "styled-components";

import breakpoints from "../configs/breakpoints";

const Wrapper = styled.div`
  width: 100%;
  border-top: 1px solid #3e4044;
  background-color: #1e1e1e;
`;

const Content = styled.div`
  height: 61px;
  margin-left: auto;
  margin-right: auto;
  width: 1368px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${breakpoints.laptop} {
    width: 960px;
  }
  @media ${breakpoints.tablet} {
    width: 100%;
    height: unset;
    flex-direction: column;
    align-items: start;
    padding: 12px 14px;
  }
`;

const Menu = styled.div`
  display: flex;
  @media ${breakpoints.tablet} {
    flex-direction: column;
  }
`;
const MenuItem = styled.a`
  color: white;
  margin-right: 50px;
  text-decoration: none;
  font-family: MuseoSans;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media ${breakpoints.tablet} {
    height: 36px;
    display: flex;
    align-items: center;
  }
`;
const Copyright = styled.div`
  color: #8a8a8a;
  font-size: 12px;
  white-space: nowrap;
  font-family: MuseoSans;
  font-weight: 300;
  margin: 12px 0;
`;

function Footer() {
  return (
    <Wrapper>
      <Content>
        <Menu>
          <MenuItem>Privacy Policy</MenuItem>
          <MenuItem>Terms of Use</MenuItem>
          <MenuItem href="https://t.me/vikingwar_io" target="_blank">
            Telegram Group
          </MenuItem>
          <MenuItem href="https://t.me/vikingwarnews" target="_blank">
            Telegram Channel
          </MenuItem>
          <MenuItem href="https://twitter.com/VikingWar_io" target="_blank">
            Twitter
          </MenuItem>
        </Menu>
        <Copyright>©2021 Viking War</Copyright>
      </Content>
    </Wrapper>
  );
}

export default Footer;
