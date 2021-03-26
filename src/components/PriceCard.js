import React, { useContext } from "react";
import { ToggleContext } from "./toggleContext";
import CardList from "./CardList";
import ListButton from "./ListButton";

const PriceCard = (props) => {
  const { toggle, toggleData } = useContext(ToggleContext);
  const data = toggle ? props.monthlyPrice : props.annualPrice;
  return (
    <div className={`main__price-card main__price-card${props.className}`}>
      <h3 className="heading-tertiary">{props.type}</h3>
      <p className="main__price">
        <span className="main__currency">&#36;</span> {data}
      </p>

      <CardList
        storage={props.storage}
        users={props.users}
        bandwidth={props.bandwidth}
      />

      <ListButton />
    </div>
  );
};

export default PriceCard;
