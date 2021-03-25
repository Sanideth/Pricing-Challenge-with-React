import React from "react";
import PriceCard from "../components/PriceCard";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <section className="main__price-cards">
          <PriceCard
            type="Basic"
            annualPrice="199.99"
            monthlyPrice="19.99"
            storage="500 GB"
            users="2"
            bandwidth="3"
            className="--left"
          />
          <PriceCard
            type="Profesional"
            annualPrice="249.99"
            monthlyPrice="24.99"
            storage="1 TB"
            users="5"
            bandwidth="10"
            className="--center"
          />
          <PriceCard
            type="Master"
            annualPrice="399.99"
            monthlyPrice="39.99"
            storage="2 TB"
            users="10"
            bandwidth="20"
            className="--right"
          />
        </section>
      </div>
    </div>
  );
};

export default Main;
