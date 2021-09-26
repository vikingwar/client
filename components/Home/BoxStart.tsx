import React from "react";

import styled from "styled-components";

import breakpoints from "../../configs/breakpoints";

const Wrapper = styled.div`
  background-image: url(/images/start-background.png);
  min-height: 696px;
  display: flex;
  align-items: center;
  position: relative;
  background-repeat: no-repeat;
  background-position: 50% 0;
  @media ${breakpoints.tablet} {
    background-size: 250%;
    background-position: 100% 0;
    padding: 288px 0 0 0;
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

function BoxStart() {
  return (
    <Wrapper>
      <Content>
        <Text>
          <h2>START YOUR STRATEGY</h2>
          <p>
            Each character has 4 main skills, every 10 levels will change the form and open one more skill, after opening all 4 skills, the character
            will still increase the level but not change the form anymore.
          </p>
          <p>
            Through the corresponding monster farm maps, each character level can train their level, if fighting monsters on the map is not suitable,
            the EXP will be lower.
          </p>
          <p>
            To start playing the game, players will need to purchase 1 NFT representing their desired character, either on the system or in the NFT
            markets. If purchased from the system, players can only buy basic characters (level 1, form 1, skill 1)
          </p>
        </Text>
      </Content>
    </Wrapper>
  );
}

BoxStart.propTypes = {};

export default BoxStart;
