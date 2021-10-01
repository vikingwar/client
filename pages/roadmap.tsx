import React from "react";

import styled from "styled-components";

import breakpoints from "../configs/breakpoints";

import Layout from "../layout";

const Wrapper = styled.div`
  // background-image: url(/images/background-flat.jpg);
  min-height: 696px;
  position: relative;
  background-repeat: no-repeat;
  background-position: 50% 0;
  @media ${breakpoints.tablet} {
    background-size: 250%;
    background-position: 100% 0;
  }
`;

const Content = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 1368px;
  @media ${breakpoints.laptop} {
    width: 960px;
  }
  @media ${breakpoints.tablet} {
    width: 100%;
  }
`;

const Text = styled.div`
  background-color: rgba(24, 40, 55, 0.95);
  padding: 44px;
  position: relative;
  width: 100%;
  > h2 {
    font-family: Teko;
    font-size: 40px;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 11px;
    font-weight: 500;
    margin-top: 0;
  }
  @media ${breakpoints.tablet} {
    margin: 0 14px;
    z-index: 2;
    > h2 {
      font-size: 24px;
    }
  }
`;

const Timeline = styled.ul`
  position: relative;
  z-index: 2;
  list-style: none;
  margin: 0px 0 30px 150px;
  padding-left: 30px;
  border-left: 8px solid #accdff;
  @media ${breakpoints.tablet} {
    margin-left: 0;
    padding-left: 0;
    border-left: none;
  }
`;

const Work = styled.li`
  margin: 40px 0;
  position: relative;
  @media ${breakpoints.tablet} {
    margin: 80px 0;
  }
`;

const Label = styled.label`
  font-size: 1.3em;
  position: absolute;
  z-index: 100;
  cursor: pointer;
  font-family: MuseoSans;
  top: 20px;
  &:before {
    content: "";
    background: url(${(props) =>
        props.done
          ? "https://artofwar.land/assets/img/roadmap_done.svg"
          : "https://artofwar.land/assets/img/roadmap_wait.svg"})
      no-repeat;
    width: 48px;
    height: 48px;
    background-size: contain;
    position: absolute;
    left: -58px;
    top: -8px;
  }
  @media ${breakpoints.tablet} {
    padding: 0 20px;
    width: 85%;
    font-size: 16px;
    line-height: 24px;
    text-overflow: ellipsis;
    width: 100%;
    height: 100%;
    display: flex;
    top: 0px;
    align-items: center;
    &:before {
      left: 110px !important;
      top: -50px !important;
    }
  }
`;

const Date = styled.span`
  margin-top: -15px;
  top: 36px;
  left: -190px;
  font-size: 0.95em;
  line-height: 20px;
  position: absolute;
  background: #fff;
  border-radius: 25px;
  height: 30px;
  min-width: 110px;
  padding: 5px 15px;
  text-align: center;
  color: #454545;
  box-shadow: 0px 0px 13px 5px rgb(0 0 0 / 3%);
  font-family: "Harmonia-Sans-Bold";
  background: #6ba0ee;
  color: #fff;
  font-family: MuseoSans;
  @media ${breakpoints.tablet} {
    display: block;
    left: 0px;
    top: -25px;
  }
`;

const Item = styled.div`
  position: relative;
  width: 100%;
  height: 115px;
  @media ${breakpoints.tablet} {
    border-color: #4983d9;
    border-width: 2px;
    border-style: solid;
    border-radius: 0.5em;
  }
`;

function Roadmap() {
  return (
    <Layout>
      <Wrapper>
        <Content>
          <Text>
            <h2>Roadmap</h2>
            <Timeline>
              <Work>
                <Item>
                  <Label done>
                    Open website and communication channels(Medium / Twitter /
                    Telegram)
                  </Label>
                  <Date>15 sep 2021</Date>
                </Item>
              </Work>
              <Work>
                <Item>
                  <Label done>
                    Release Viking War token (BEP20) and Viking War NFT
                    (BEP721). Open the Viking War NFT mint system randomly with
                    Viking War tokens
                  </Label>
                  <Date>20 sep 2021</Date>
                </Item>
              </Work>
              <Work>
                <Item>
                  <Label done>Affiliate with an NFT market</Label>
                  <Date>25 sep 2021</Date>
                </Item>
              </Work>
              <Work>
                <Item>
                  <Label done>
                    Running a marketing campaign to give NFT characters
                  </Label>
                  <Date>30 sep 2021</Date>
                </Item>
              </Work>
              <Work>
                <Item>
                  <Label>Open character upgrade system</Label>
                  <Date>05 oct 2021</Date>
                </Item>
              </Work>
              <Work>
                <Item>
                  <Label>Open the NFT system of equipment and weapons</Label>
                  <Date>25 oct 2021</Date>
                </Item>
              </Work>
              <Work>
                <Item>
                  <Label>Open system to upgrade equipment and weapons</Label>
                  <Date>30 oct 2021</Date>
                </Item>
              </Work>
            </Timeline>
          </Text>
        </Content>
      </Wrapper>
    </Layout>
  );
}

Roadmap.propTypes = {};

export default Roadmap;
