import React from "react";
import styled from "styled-components";

import breakpoints from "../../configs/breakpoints";

import ShortcutItem from "./ShortcutItem";

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1368px;

  display: flex;
  @media ${breakpoints.laptop} {
    width: 960px;
  }
  @media ${breakpoints.tablet} {
    width: 100%;
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  width: 58%;
  padding: 0 14px;
  @media ${breakpoints.tablet} {
    width: 100%;
    margin-bottom: 24px;
  }
`;

const RightSide = styled.div`
  width: 42%;
  padding: 0 14px;
  @media ${breakpoints.tablet} {
    width: 100%;
  }
`;

function Shortcut() {
  return (
    <Wrapper>
      <LeftSide>
        <ShortcutItem
          image="/images/shortcut-news.png"
          title="News"
          description="Amazing Offers Are Now Available! Check out the News section for more Game updates!"
          isHighlight
        />
      </LeftSide>
      <RightSide>
        <ShortcutItem
          image="/images/shortcut-game-guides.png"
          title="GAME GUIDES"
          description="Here are a few guides to help you get started playing Vikings: War of Clans!"
          style={{ marginBottom: "24px" }}
        />
        <ShortcutItem
          image="/images/shortcut-faq.png"
          title="FAQ"
          description="Got questions about Vikings? Click here to get all the answers you need to start playing this strategy game!"
          // style={{ height: "216px" }}
        />
      </RightSide>
    </Wrapper>
  );
}

export default Shortcut;
