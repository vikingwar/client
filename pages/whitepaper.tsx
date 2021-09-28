import React from "react";
import styled from "styled-components";

import breakpoints from "../configs/breakpoints";

import Layout from "../layout";

const Wrapper = styled.div`
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
  color: #ccc;
  width: 100%;
  display: flex;
  flex-direction: column;

  > h2 {
    font-family: Teko;
    font-size: 40px;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 11px;
    font-weight: 500;
    margin-top: 0;
  }
  > img {
    width: 75%;
    margin: auto;
  }
  p {
    font-family: Teko;
    font-size: 22px;
    word-wrap: break-word;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: 1.5px;
    margin-top: 0;
  }
  @media ${breakpoints.tablet} {
    margin: 0 14px;
    z-index: 2;
    > h2 {
      font-size: 24px;
    }
    > img {
      width: 100%;
    }
    p {
      font-size: 18px;
      line-height: 26px;
    }
  }
`;

function WhitePaper() {
  return (
    <Layout>
      <Wrapper>
        <Content>
          <Text>
            <h2>Introducing Viking War</h2>
            <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
              <p>
                Viking war is a game play to earn, combining blockchain technology and 3D effects to bring an unprecedented experience to players.
              </p>
              <p>
                {`The game is set in the Middle Ages, the Viking Age was an era in Norse history from about 793 to 1066. This period is known for Viking
                invasions and plunder. The Danish Vikings ravaged and plundered England, Ireland and the "kingdom of Francia" while the Norwegian
                Vikings made expeditions to Scotland, the Orkney Islands, the Faroe Islands, Iceland and Greenland and the Swedish Vikings went east,
                to Russia and as far as the Byzantine Empire.`}
              </p>
              <p>
                During this era, groups of Vikings went to trade, pillaging much of Europe, southwestern Asia, and exploring the North Atlantic and
                northeastern America. In addition to trading and looting, they also mercenary, slave-collecting and also contributed to the
                development of feudalism in Europe.
              </p>
              <p>Viking society in this era did not form a nation, but only small units in the form of independent villages.</p>
              <p>
                Players participating in the game need to fight monsters to level up, complete missions to conquer the land, destroy monsters, etc.
              </p>
              <p>
                There are quests that require the player to have enough materials to build ships and maps to be able to conquer or to have enough
                weapons to destroy monsters. In their conquest journey, players can play in groups to support each other and can attack other groups
                to compete for the right to conquer (there are bosses that only appear once a day).
              </p>
              <p>When winning a Boss, the player will randomly receive dropped items, which the player can use or sell on the NFT Market.</p>
              <p>Version 2 of the game: allows players to challenge in single or team mode, Winners will receive worthy rewards and experience.</p>
              <p>Version 3 of the game: Allows you to build and attack castles</p>
            </div>
            <h2 style={{ marginTop: "20px" }}>Character description</h2>
            <p>The game builds characters according to genres:</p>
            <p style={{ marginLeft: "40px" }}>-Warrior: Has high combat skills</p>
            <p style={{ marginLeft: "40px" }}>-Mage: There are powerful spells</p>
            <p>
              Each character has 4 main skills, every 10 levels will change the form and open one more skill, after opening all 4 skills, the
              character will still increase the level but not change the form anymore.
            </p>
            <p>
              Characters can practice their level by fighting monsters on different maps, if they fight monsters on the map that do not match their
              level, they will receive less experience.
            </p>
            <p>
              To start playing the game, players will need to buy 1 NFT representing their desired character on the system or NFT markets. If
              purchased from the system, players can only buy basic characters (level 1, form 1, skill 1).
            </p>
            <p>
              Ngoài ra, hệ thống vẫn cho phép người chơi nâng cấp hình dạng và nhân vật mình muốn bằng cách thu thập đủ số lượng NFT của nhân vật cấp
              thấp hơn, nhân vật được nâng cấp có số lượng giới hạn, nếu hết thì hệ thống sẽ không cho phép nâng cấp nữa.
            </p>
            <p>{`Specifically, there are 4 character levels: Beginner => intermediate => advanced => god, respectively with the number of releases: Unlimited => 1000000 => 10000 => 100`}</p>
            <p>To upgrade, each level requires 100 lower level NFT, low level NFT will be burned and create higher level character NFT.</p>
            <h2 style={{ marginTop: "20px" }}>Description of equipment</h2>
            <p>The equipment system in the game includes:</p>
            <p>-Weapons:</p>
            <p style={{ marginLeft: "40px" }}>+Axe</p>
            <p style={{ marginLeft: "40px" }}>+Sword</p>
            <p style={{ marginLeft: "40px" }}>+Bow</p>
            <p style={{ marginLeft: "40px" }}>+Spear</p>
            <p style={{ marginLeft: "40px" }}>+Magic wand</p>
            <p style={{ marginLeft: "40px" }}>+Rod</p>
            <p>-Skin:</p>
            <p style={{ marginLeft: "40px" }}>+Shirt</p>
            <p style={{ marginLeft: "40px" }}>+Shoes</p>
            <p style={{ marginLeft: "40px" }}>+Back belt</p>
            <p style={{ marginLeft: "40px" }}>+Glove</p>
            <p style={{ marginLeft: "40px" }}>+Ring</p>
            <p style={{ marginLeft: "40px" }}>+Shield</p>
            <p style={{ marginLeft: "40px" }}>+Hat / crown / Ring / crown</p>
            <p style={{ marginLeft: "40px" }}>+Necklace</p>
            <p>-Map: Split into pieces</p>
            <p style={{ marginLeft: "40px" }}>+Shipbuilding</p>
            <p style={{ marginLeft: "40px" }}>+Land</p>
            <p>-Medicine:</p>
            <p style={{ marginLeft: "40px" }}>+Potions</p>
            <p style={{ marginLeft: "40px" }}>+Water</p>
            <p style={{ marginLeft: "40px" }}>+Panacea</p>
            <p>-Material:</p>
            <p style={{ marginLeft: "40px" }}>+Wood</p>
            <p style={{ marginLeft: "40px" }}>+Iron</p>
            <p style={{ marginLeft: "40px" }}>+Fabric</p>
            <p style={{ marginLeft: "40px" }}>+Gem</p>
            <p style={{ marginLeft: "40px" }}>+Silver</p>
            <p style={{ marginLeft: "40px" }}>+Gold</p>
            <p>{`=> Items that need to be collected through quests or loaded with NFT to use. The items have many levels and different uses and powers. For weapons, there will be levels corresponding to the level of the character. by collecting the required number of items. For example, upgrading a sword requires:`}</p>
            <p style={{ marginLeft: "40px" }}>+10 swords of the same type</p>
            <p style={{ marginLeft: "40px" }}>+1 gem</p>
            <p style={{ marginLeft: "40px" }}>+10 gold</p>
          </Text>
        </Content>
      </Wrapper>
    </Layout>
  );
}

export default WhitePaper;
