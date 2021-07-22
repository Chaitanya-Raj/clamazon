import React from "react";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Nireeksh/D23972185_IN_HETV_SamsungFrameLaunch_CLP_PC_1500x3003.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          {user && <h3>Hello, {user.email}</h3>}
          <h2 className="checkout__title">Your Shopping Cart</h2>
          {cart?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
