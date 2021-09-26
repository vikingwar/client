import React from "react";

import styled from "styled-components";

import breakpoints from "../../configs/breakpoints";

const Wrapper = styled.div`
  background-image: url(/images/background-flat.jpg);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: 50% 0;
  height: 800px;
  @media ${breakpoints.tablet} {
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
  width: 45%;
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
    line-height: 30px;
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

const Hero = styled.div`
  background-image: url(/images/background-hero.png);
  display: block;
  position: absolute;
  top: 0;
  right: 47%;
  background-repeat: no-repeat;
  width: 905px;
  height: 827px;
  @media ${breakpoints.tablet} {
    left: 50%;
    margin-left: -340px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 60%;
  }
`;

function BoxWelcome() {
  return (
    <Wrapper>
      <Content>
        <Text>
          <h2>Welcome to Vikings: Play & earn!</h2>
          <p>
            During this era, groups of Vikings went to trade, pillaging much of Europe, southwestern Asia, and exploring the North Atlantic and
            northeastern America. In addition to trading and looting, they also mercenary, slave-collecting and also contributed to the development of
            feudalism in Europe.
          </p>
          <p>
            Viking society in this era did not form a nation, but only small units in the form of independent villages. Medieval Nordic
            nation-building. Players participate in the game fighting monsters to train levels, complete missions to conquer the land, destroy
            monsters, etc. There are quests that require the player to have enough materials to build ships and maps to conquer, or to have enough
            weapons to destroy monsters. During their conquest, the player can play in groups to assist. support each other and can attack other
            groups to compete for the right to conquer (there are bosses that only appear once a day) When winning a Boss, the player will randomly
            receive dropped items, which the player can use or sell on the NFT Market.
          </p>
        </Text>
        <Hero />
      </Content>
    </Wrapper>
  );
}

BoxWelcome.propTypes = {};

export default BoxWelcome;
