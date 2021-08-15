import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import PostPage from "./components/PostPage";
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
          <Route exact path="/post/:id">
            <PostPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
