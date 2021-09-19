import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import breakpoints from "../../configs/breakpoints";

const Wrapper = styled.a`
  width: 100%;
  border-top: 1px solid #3e4044;
  background-color: #1e1e1e;
  height: ${(props) => (props.isHighlight ? "456px" : "216px")};
  background-repeat: no-repeat;
  text-decoration: none;
  display: block;
  position: relative;
  cursor: pointer;
  &:hover {
    > span {
      &:before {
        display: block;
        width: 47px;
      }
      > p {
        max-height: 300px;
        opacity: 1;
        transition: max-height 1.3s ease-out, opacity 0.4s ease-out;
      }
    }
  }
  @media ${breakpoints.laptop} {
    height: ${(props) => (props.isHighlight ? "418px" : "198px")};
  }
  @media ${breakpoints.tablet} {
    height: 350px;
    background-size: cover;
  }
`;

const Text = styled.span`
  padding: 12px 36px;
  display: inline-block;
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  color: #ccc;
  text-shadow: 0 2px 10px #000;
  background-color: transparent;
  transition: bottom 0.3s;
  &:before {
    display: block;
    position: absolute;
    content: "";
    top: 55px;
    right: calc(100% - 1rem);
    width: 36px;
    height: 1px;
    background-color: #fff;
    transition: width 0.3s;
  }
  > h2 {
    font-size: 32px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 400;
    text-shadow: 0 2px 10px #000;
    font-family: MuseoSans;
  }
  > p {
    font-family: MuseoSans;
    font-size: 18px;
    font-weight: 300;
    display: block;
    margin-bottom: 0.5rem;
    opacity: 0;
    color: #fff;
    transition: max-height 0.6s, opacity 0.3s;
    max-height: 0;
  }
  @media ${breakpoints.tablet} {
    background-color: #000;
    > h2 {
      font-size: 22px;
    }
    > p {
      opacity: 1;
      font-size: 16px;
      max-height: unset;
    }
    &:before {
      display: none;
    }
  }
`;

function ShortcutItem({ image, title, description, isHighlight, style = {} }) {
  return (
    <Wrapper isHighlight={isHighlight} style={{ backgroundImage: `url("${image}")`, ...style }}>
      <Text>
        <h2>{title}</h2>
        <p>{description}</p>
      </Text>
    </Wrapper>
  );
}

ShortcutItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  isHighlight: PropTypes.bool,
  style: PropTypes.any
};

export default ShortcutItem;
