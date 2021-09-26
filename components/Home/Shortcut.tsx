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
          hiddenText
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/xshfF40odoo?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </ShortcutItem>
      </LeftSide>
      <RightSide>
        <ShortcutItem
          onClick={() => router.push("/game")}
          image="/images/shortcut-game-guides.png"
          title="GAME"
          description="Viking War is an online game to conquer ancient lands - Play2Earn - NFT, game on blockchain - BSC"
          style={{ marginBottom: "24px" }}
          isHighlight={false}
        />
        <ShortcutItem
          onClick={() => window.open("https://t.me/vikingwar_io", "_blank")}
          image="/images/shortcut-faq.png"
          title="FAQ"
          description="Got questions about Vikings? Click here to get all the answers you need to start playing this strategy game!"
          isHighlight={false}
          // style={{ height: "216px" }}
        />
      </RightSide>
    </Wrapper>
  );
}

export default Shortcut;
