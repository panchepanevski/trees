import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import themes from "./themes/themes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation";
import Header from "./components/Header";
import Treelist from "./pages/TreeList";
import NewTree from "./pages/NewTree";
import Tree from "./pages/Tree";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
  overflow: auto;
`;

const Footer = styled.footer`
  height: 60px;
  background-color: ${props => props.theme.secondary};
`;

function App() {
  return (
    <ThemeProvider theme={themes.defaultTheme}>
      <GlobalStyles />
      <Router>
        <Container>
          <Header />
          <Main>
            <Switch>
              <Route exact path="/">
                <Treelist />
                <Tree />
              </Route>
              <Route exact path="/add">
                <NewTree />
              </Route>
            </Switch>
          </Main>
          <Footer>
            <BottomNavigation />
          </Footer>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
