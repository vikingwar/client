import React from "react";

import styled from "styled-components";

import breakpoints from "../configs/breakpoints";

const Wrapper = styled.div`
  width: 100%;
  border-top: 1px solid #3e4044;
  background-color: #1e1e1e;
`;

const Content = styled.div`
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
  flex-wrap: wrap;
  margin: 20px 0;
  @media ${breakpoints.tablet} {
    flex-direction: column;
    margin: 0;
  }
`;
const MenuItem = styled.a`
  width: 50%;
  height: 46px;
  line-height: 46px;
  text-decoration: none;
  font-family: MuseoSans;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media ${breakpoints.tablet} {
    width: 100%;
    height: 36px;
    display: flex;
    align-items: center;
  }
`;
const Copyright = styled.div`
  color: #8a8a8a;
  font-size: 14px;
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
          <MenuItem>Support</MenuItem>
          <MenuItem href="https://t.me/vikingwar_io" target="_blank">
            Telegram Group
          </MenuItem>
          <MenuItem>Company</MenuItem>
          <MenuItem href="https://t.me/vikingwarnews" target="_blank">
            Telegram Channel
          </MenuItem>
          <MenuItem>Privacy Policy</MenuItem>
          <MenuItem href="https://twitter.com/VikingWar_io" target="_blank">
            Twitter
          </MenuItem>
          <MenuItem>Terms of Use</MenuItem>
        </Menu>
        <Copyright>©2021 Viking War</Copyright>
      </Content>
    </Wrapper>
  );
}

export default Footer;
