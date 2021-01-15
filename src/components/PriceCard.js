import React from "react";
import ListParagraph from "./ListParagraph";
import ListButton from "./ListButton";

const PriceCard = () => {
  return (
    <div className="main__price-card">
      <h2 className="heading-secondary">Something</h2>
      <ul className="main__list">
        <ListParagraph />
        <ListParagraph />
        <ListParagraph />
      </ul>
      <ListButton />
    </div>
  );
};

export default PriceCard;
