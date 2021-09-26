import React from "react";

import styled from "styled-components";

import breakpoints from "../../configs/breakpoints";

const Wrapper = styled.div`
  background-image: url(/images/become-background.png);
  min-height: 792px;
  display: flex;
  align-items: center;
  position: relative;
  background-repeat: no-repeat;
  background-position: 50% 0;
  @media ${breakpoints.tablet} {
    background-size: 250%;
    background-position: 0 0;
    padding: 288px 0 0 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row-reverse;
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
  color: #ccc;
  width: 40%;
  > h2 {
    font-family: Teko;
    font-size: 32px;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 11px;
    font-weight: 500;
    margin-top: 0;
  }
  > p {
    font-family: Teko;
    font-size: 22px;
    word-wrap: break-word;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 1.5px;
  }
  @media ${breakpoints.tablet} {
    width: auto;
    margin: 0 14px;
    z-index: 2;
    > h2 {
      font-size: 24px;
    }
    > p {
      font-size: 18px;
      line-height: 26px;
    }
  }
`;

function BoxBecome() {
  return (
    <Wrapper>
      <Content>
        <Text>
          <h2>Character upgrade</h2>
          <p>
            In addition, the system still allows players to upgrade their desired form and character by collecting a sufficient number of NFTs of
            lower level characters, the upgraded characters are limited in number, if not, the system Upgrades will not be available. Specifically,
            there are 4 character levels: Beginner ={">"} intermediate ={">"} advanced ={">"} god, respectively with the number of releases: Unlimited
            ={">"} 1000 000 ={">"} 10 000 ={">"} 100 To upgrade, each level requires 100 lower level NFT, low level NFT will be burned and create
            higher level character NFT.
          </p>
        </Text>
      </Content>
    </Wrapper>
  );
}

BoxBecome.propTypes = {};

export default BoxBecome;
