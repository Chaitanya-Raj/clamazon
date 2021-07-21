import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //TODO: BEM naming convention
    <Router>
      <div className="app">
        <Switch>
          {/* Keep the default route at the bottom cause if it's at the top it'll be hit no matter the path*/}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
