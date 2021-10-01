import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "components/Button";
import { useWeb3React } from "@web3-react/core";
import ConnectWalletButton from "components/ConnectWalletButton";
import { useWalletModal } from "widgets/WalletModal";
import useAuth from "hooks/useAuth";

import styled from "styled-components";

import breakpoints from "../configs/breakpoints";

const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  background: #1e1e1e;
  border-bottom: 1px solid #414141;
  display: flex;
  z-index: 9;
`;

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1368px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${breakpoints.laptop} {
    width: 960px;
  }
  @media ${breakpoints.tablet} {
    width: 100%;
  }
`;

const Logo = styled.a`
  cursor: pointer;
`;

const Menu = styled.a`
  display: flex;
  height: 100%;
  @media ${breakpoints.tablet} {
    display: none;
  }
`;

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  text-transform: uppercase;
  cursor: pointer;
  font-family: MuseoSans;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  transition: border-color 0s;
  border: solid transparent;
  border-width: 0 1px;
  &:hover {
    background-color: #2e2e2e;
    border-color: #504e4e;
  }
`;

const Box = styled.a`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const ButtonConnectWallet = styled.button`
  height: 32px;
  border-radius: 5px;
  border: unset;
  font-family: MuseoSans;
  font-weight: 400;
  padding: 0 15px;
  cursor: pointer;
`;

function Header() {
  const { login, logout } = useAuth();
  const { account } = useWeb3React();
  const { onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : null;
  return (
    <Wrapper>
      <Content>
        <Box>
          <Link href="/">
            <Logo>
              <Image src="/images/logo.png" alt="Logo" width={43} height={43} />
            </Logo>
          </Link>
          <Menu>
            <Link href="/game">
              <MenuItem>Game Info</MenuItem>
            </Link>
            <MenuItem>Open NFT</MenuItem>
            <Link href="/tokenomics">
              <MenuItem>Tokenomics</MenuItem>
            </Link>
            <Link href="/roadmap">
              <MenuItem>Roadmap</MenuItem>
            </Link>
            <Link href="/whitepaper">
              <MenuItem>Whitepaper</MenuItem>
            </Link>
            <MenuItem>News</MenuItem>
            <MenuItem>Faq</MenuItem>
          </Menu>
        </Box>
        <Box>
          {account ? (
            <Button
              variant="primary"
              onClick={() => {
                onPresentAccountModal();
              }}
              width="150px"
              height="40px"
              style={{ borderRadius: "30px" }}
            >
              {accountEllipsis}
            </Button>
          ) : (
            <ConnectWalletButton
              height="40px"
              style={{ borderRadius: "30px" }}
            />
          )}
        </Box>
      </Content>
    </Wrapper>
  );
}

export default Header;
