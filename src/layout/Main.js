import React from "react";
import PriceCard from "../components/PriceCard";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <section className="main__price-cards">
          <PriceCard />
          <PriceCard />
          <PriceCard />
        </section>
      </div>
    </div>
  );
};

export default Main;
