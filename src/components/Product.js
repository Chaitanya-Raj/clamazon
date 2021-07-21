import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        {title}
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <StarIcon className="product__ratingStar" />;
            })}
        </div>
      </div>
      <img src={image} alt="" />

      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
