import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="product_image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProdut">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <StarIcon className="product__ratingStar" />;
            })}
        </div>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
