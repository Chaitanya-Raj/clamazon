import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../reducer";
import axios from "../axios";
import { db } from "../firebase";

function Payment() {
  // eslint-disable-next-line no-unused-vars
  const [{ cart, user }, dispatch] = useStateValue();

  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      if (getCartTotal(cart) >= 1) {
        const response = await axios({
          method: "post",
          url: `/payments/create?total=${getCartTotal(cart) * 100}`,
        });
        setClientSecret(response.data.clientSecret);
      }
    };

    getClientSecret();
  }, [cart]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    try {
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      const paymentIntent = payload.paymentIntent;
      console.log(paymentIntent);
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          cart,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });

      dispatch({ type: "EMPTY_CART" });

      setSucceeded(true);
      setProcessing(false);

      history.replace("/orders");
    } catch (error) {
      window.alert(error.message);
    }
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    if (e.error) window.alert(e.error.message);
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout ({<Link to="/checkout">{cart?.length} items</Link>})</h1>
        <div className="payment__section">
          <div className="payment__title">
            <h4>Delivery Address</h4>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>221B</p>
            <p>Baker Street</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {cart?.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={"true"}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
