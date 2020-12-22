import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/HomePage";
import Character from "./pages/Character";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/character">
          <Character />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
