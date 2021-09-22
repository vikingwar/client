import React from "react";

import styled from "styled-components";

import breakpoints from "../configs/breakpoints";

import useDeviceOs from "../hooks/useDeviceOs";
import useDeviceType from "../hooks/useDeviceType";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 47px;
  height: 440px;
  height: 528px;
  @media ${breakpoints.laptop} {
    height: 484px;
  }
  @media ${breakpoints.tablet} {
    height: 336px;
  }
`;

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0 14px;
  width: 1368px;
  display: flex;
  flex-direction: column;
  @media ${breakpoints.laptop} {
    width: 960px;
  }
  @media ${breakpoints.tablet} {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.div`
  font-family: Teko;
  font-size: 78px;
  font-weight: 600;
  text-transform: uppercase;
  text-shadow: 1px 1px 0 rgb(0 0 0 / 50%), 0 10px 30px rgb(0 0 0 / 20%);
  word-wrap: normal;
  margin-bottom: 33px;
  > div {
    font-weight: 400;
    font-size: 40px;
  }
  @media ${breakpoints.tablet} {
    text-align: center;
    font-size: 42px;
    margin-bottom: 12px;
    > div {
      font-size: 25px;
    }
  }
`;

const ButtonPlay = styled.button`
  width: fit-content;
  height: 66px;
  display: flex;
  padding: 12px 36px;
  text-align: center;
  text-decoration: none;
  border: 0;
  border-radius: 4px;
  transition: opacity 0.3s, background 0.3s;
  text-shadow: 1px 1px 1px rgb(0 17 24 / 31%);
  box-shadow: 0 6px 30px rgb(0 0 0 / 40%);
  background-color: gray;
  background-image: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.55));

  text-transform: uppercase;
  text-shadow: 1px 1px 1px rgb(0 17 24 / 31%);
  color: #fff;
  font-family: Teko;
  font-size: 28px;
  line-height: 40px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    background-image: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.4));
  }
`;

const ButtonDownloadAppStore = styled.a`
  cursor: pointer;
`;

function CTA() {
  const [, deviceWidth] = useDeviceType();
  const deviceOs = useDeviceOs();
  return (
    <Wrapper>
      <Content>
        <Title>
          Vikings war
          <div>Play & earn</div>
        </Title>
        {deviceWidth < 768 ? // <ButtonDownloadAppStore>
        //   <img
        //     src={deviceOs === "ios" ? "/images/download-app-store.svg" : "/images/download-google-store.svg"}
        //     alt="download"
        //     width={152}
        //     height={45}
        //   />
        // </ButtonDownloadAppStore>
        null : (
          <ButtonPlay>Play for Free</ButtonPlay>
        )}
      </Content>
    </Wrapper>
  );
}

CTA.propTypes = {};

export default CTA;
