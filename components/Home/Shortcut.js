import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

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
  const router = useRouter();
  return (
    <Wrapper>
      <LeftSide>
        <ShortcutItem
          onClick={() => window.open("https://twitter.com/VikingWar_io", "_blank")}
          image="/images/shortcut-news.png"
          title="TWITTER"
          description="Amazing Offers Are Now Available! Check out the News section for more Game updates!"
          isHighlight
        >
          <video autoPlay muted loop style={{ position: "absolute", width: "100%", objectFit: "fill", height: "100%" }}>
            <source src="/images/trailer-viking.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </ShortcutItem>
      </LeftSide>
      <RightSide>
        <ShortcutItem
          onClick={() => router.push("/game")}
          image="/images/shortcut-game-guides.png"
          title="GAME"
          description="Viking War is an online game to conquer ancient lands - Play2Earn - NFT, game on blockchain - BSC"
          style={{ marginBottom: "24px" }}
        />
        <ShortcutItem
          onClick={() => window.open("https://t.me/vikingwar_io", "_blank")}
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
