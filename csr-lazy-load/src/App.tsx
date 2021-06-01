import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";

const Home = React.lazy(() => import("./Home"));
const PostOne = React.lazy(() => import("./Posts/PostOne"));
const PostTwo = React.lazy(() => import("./Posts/PostTwo"));
const PostThree = React.lazy(() => import("./Posts/PostThree"));

function App() {
  return (
    <Suspense fallback={<Layout>Loading...</Layout>}>
      <Router>
        <Switch>
          <Route path="/posts/mobil-isletim-sistemleri">
            <PostOne />
          </Route>
          <Route path="/posts/rtx-3080-ekran-karti">
            <PostTwo />
          </Route>
          <Route path="/posts/vpn-nedir">
            <PostThree />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
