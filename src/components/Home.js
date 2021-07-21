import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Mayactivation/Accessoriesday1/D23140543_IN_CEPC_Electronicsaccessories_underRs999_3000x12000.5x._CB669031984_.jpg"
          alt="banner"
          className="home__image"
        />

        <div className="home__row">
          <Product
            title="The Silmarillion"
            image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610045590l/7332._SX318_.jpg"
            price="7.99"
            rating={5}
          />
          <Product
            title="The Silmarillion"
            image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610045590l/7332._SX318_.jpg"
            price="7.99"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="The Silmarillion"
            image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610045590l/7332._SX318_.jpg"
            price="7.99"
            rating={5}
          />
          <Product
            title="The Silmarillion"
            image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610045590l/7332._SX318_.jpg"
            price="7.99"
            rating={5}
          />
          <Product
            title="The Silmarillion"
            image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610045590l/7332._SX318_.jpg"
            price="7.99"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="The Silmarillion"
            image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610045590l/7332._SX318_.jpg"
            price="7.99"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
