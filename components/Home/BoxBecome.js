import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import breakpoints from "../../configs/breakpoints";

const Wrapper = styled.div`
  background-image: url(/images/become-background.jpeg);
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
  width: 50%;
  > h2 {
    font-family: MuseoSans;
    font-size: 28px;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 11px;
    font-weight: 300;
    margin-top: 0;
  }
  > p {
    font-family: MuseoSans;
    font-size: 16px;
    word-wrap: break-word;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 1px;
  }
  @media ${breakpoints.tablet} {
    width: auto;
    margin: 0 14px;
    z-index: 2;
  }
`;

function BoxBecome(props) {
  return (
    <Wrapper>
      <Content>
        <Text>
          <h2>BECOME A WARRIOR</h2>
          <p>
            As the Jarl of your Town, you must be loyal to your warriors and the lands under your influence. It’s your duty to develop and master your
            own different strategies for times of war, rely on diplomatic solutions in times of peace, and do whatever it takes to ensure the
            prosperity of your army and Town. Do you have what it takes to crush your enemies, drive them from your lands and achieve true greatness?
            Only those who tasted victory know that nothing else tastes as sweet. Engage in fierce PvE and PvP battle and gain rewards beyond your
            wildest dreams. Raid Towns, or destroy roaming gangs of Invaders to collect precious resource and raise your stature among the Northern
            Clans. Master different battle strategies, and you’ll soon be the most feared Jarl in all the North.
          </p>
        </Text>
      </Content>
    </Wrapper>
  );
}

BoxBecome.propTypes = {};

export default BoxBecome;
