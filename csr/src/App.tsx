import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import PostOne from "./Posts/PostOne";
import PostTwo from "./Posts/PostTwo";
import PostThree from "./Posts/PostThree";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/posts/drone-kullanim-alanlari">
          <PostOne />
        </Route>
        <Route path="/posts/ilginc-indirilen-uygulamalar">
          <PostTwo />
        </Route>
        <Route path="/posts/nft-nedir">
          <PostThree />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
