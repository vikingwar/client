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
            Vikings: War of Clans™ is a real-time strategy title which means you can only rely on your strategy skills while trying to get to the top.
            Yes, you can count on brute force and sheer numbers and throw everything you have at your enemy’s gate in the hopes of bringing them down
            but other Jarls will quickly learn to anticipate your mindless attacks and repel them with ease. If you want to make your enemies fear
            your every move, you will need to devise your own unique battle strategies.
          </p>
        </Text>
      </Content>
    </Wrapper>
  );
}

BoxStart.propTypes = {};

export default BoxStart;
