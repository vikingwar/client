import React from "react";
import styled from "styled-components";

import breakpoints from "../configs/breakpoints";

import Layout from "../layout";

const Wrapper = styled.div`
  // background-image: url(/images/background-flat.jpg);
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
    width: 50%;
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
      width: 100%;
      font-size: 18px;
      line-height: 26px;
    }
  }
`;

function tokenomics() {
  return (
    <Layout>
      <Wrapper>
        <Content>
          <Text>
            <h2>Descriptions</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <p>- Name: Viking War</p>
              <p>- Symbol: VWAR</p>
              <p>- Decimal: 18</p>
              <p>- Blockchain: BSC - Binance Smart Chain</p>
              <p>- Init: 10 000 000</p>
              <p>- Max Supply: 100 000 000 </p>
              <p>- Can Burn</p>
            </div>
            <h2 style={{ marginTop: "20px" }}>Coin Supply & Distribution</h2>
            <img src="/images/tokenomics.png" alt="tokenomics" />
          </Text>
        </Content>
      </Wrapper>
    </Layout>
  );
}

export default tokenomics;
