import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const NavigationLink = styled(({ active, ...rest }) => <Link {...rest} />)`
  flex-grow: 1;
  flex-basis: 0;
  height: 100%;
  text-decoration: none;
  background: ${props =>
    props.active ? props.theme.text : props.theme.secondary};
  color: ${props => (props.active ? props.theme.secondary : props.theme.text)};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 900;
`;

function BottomNavigation() {
  const location = useLocation();
  return (
    <Container>
      <NavigationLink to="/" active={location.pathname === "/"}>
        All Trees
      </NavigationLink>
      <NavigationLink to="/add" active={location.pathname === "/add"}>
        Add Tree
      </NavigationLink>
    </Container>
  );
}

export default BottomNavigation;
