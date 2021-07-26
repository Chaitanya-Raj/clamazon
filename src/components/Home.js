import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import { db } from "../firebase";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

function Home() {
  const [items, setItems] = useState(null);

  const slides = [
    {
      src: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Mayactivation/Accessoriesday1/D23140543_IN_CEPC_Electronicsaccessories_underRs999_3000x12000.5x._CB669031984_.jpg",
    },
    {
      src: "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
    },
    {
      src: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/Banners/XCM_Manual_ORIGIN_1262629_1338382_IN_1_3354545_1500x600_1X_en_IN._CB405622018_.jpg",
    },
    {
      src: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_8A_Dual/7499/V176845577_IN_WLME_Redmi_8A_Dual_LandingPage_1500x600._CB406191253_.jpg",
    },
  ];

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
        <div className="home__slideshow">
          <Slider>
            {slides.map((slide, index) => (
              <div key={index}>
                <img className="home__image" alt="banner" src={slide.src} />
              </div>
            ))}
          </Slider>
        </div>
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
