import React from "react";

import styled from "styled-components";

import breakpoints from "../../configs/breakpoints";

const Wrapper = styled.div`
  background-image: url(/images/background-hero.jpeg);
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
  width: 50%;
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
          <h2>Welcome to Vikings: War of Clans!</h2>
          <p>
            Let your beard grow wild, sharpen your axe and get that horned helmet out of storage - it is time to lead a Viking invasion! Wield the
            power of a ruthless Viking army, raid lands and Towns for resources, and become the most formidable and feared Jarl in all the North! Play
            Vikings: War of Clans today! After its unprecedented success on mobile devices, Vikings: War of Clans is now available on Internet
            browsers worldwide! Vikings: War of Clans is a phenomenal Massively Multiplayer Real Time Strategy game that takes the player to the grim
            Northern lands, where Viking warlords fight over every piece of precious territory.
          </p>
        </Text>
        <Hero />
      </Content>
    </Wrapper>
  );
}

BoxWelcome.propTypes = {};

export default BoxWelcome;
