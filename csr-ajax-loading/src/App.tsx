import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/posts/:url">
          <Post />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
