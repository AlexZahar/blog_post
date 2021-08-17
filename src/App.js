import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import PostPage from "./components/PostPage";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <div className="App">
      <Router>
        {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/post/:id">
            <PostPage />
          </Route>
          <Route exact path="/create-post">
            <CreatePost />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
