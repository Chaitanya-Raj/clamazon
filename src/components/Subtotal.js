import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getCartTotal } from "../reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  // eslint-disable-next-line no-unused-vars
  const [{ cart, user }, dispatch] = useStateValue();
  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={"true"}
        prefix={"₹"}
      />
      <button
        onClick={(e) => {
          if (user === null) history.push("/login");
          else if (cart.length === 0) window.alert("No items to checkout");
          else history.push("/payment");
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
