import React from "react";
import styled from "@emotion/styled";
import logo from "../assets/logo.svg";

const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 100%;
  background-color: ${props => props.theme.secondary};

  box-shadow: 2px 10px 12px -1px rgba(206, 214, 224, 0.3);
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const Text = styled.h4`
  margin: 0;
  color: ${props => props.theme.text};
`;

export default function Header() {
  return (
    <HeaderBox>
      <Logo src={logo} />
      <Text>tree species</Text>
    </HeaderBox>
  );
}
