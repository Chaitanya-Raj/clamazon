import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import { db } from "../firebase";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    db.collection("items")
      .get()
      .then((snapshot) => {
        setItems(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        {/* TODO: Implement carousel */}
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Mayactivation/Accessoriesday1/D23140543_IN_CEPC_Electronicsaccessories_underRs999_3000x12000.5x._CB669031984_.jpg"
          alt="banner"
          className="home__image"
        />
        <div className="home__row">
          {items?.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.data.title}
              image={item.data.image}
              price={item.data.price}
              rating={item.data.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
