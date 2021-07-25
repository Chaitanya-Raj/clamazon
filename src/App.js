import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

const promise = loadStripe(
  "pk_test_51JGjMSSEC8HY5J1IkUkj0IU74NvXVEXsuJ4BeqaM3aAFXgpNP2R4YYAPsAoOngWX8PZom9ZxNwbVILg4zIIMWfxD00dXhyuRfz"
);

function App() {
  // eslint-disable-next-line no-unused-vars
  const [_, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("Current User => ", user);
      if (user) {
        // the user just logged in / was logged in
        dispatch({
          type: "SET_USER",
          user,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    //TODO: BEM naming convention
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
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
