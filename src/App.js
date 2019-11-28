import React from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import themes from "./themes/themes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation";

function App() {
  return (
    <ThemeProvider theme={themes.defaultTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/">
            <div>Home</div>
          </Route>
          <Route exact path="/add">
            <div>Add</div>
          </Route>
          <Route exact path="/categoties">
            <div>Categories</div>
          </Route>
        </Switch>
        <BottomNavigation />
      </Router>
    </ThemeProvider>
  );
}

export default App;
