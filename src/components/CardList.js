import React from "react";
import ListItem from "./ListItem";

const CardList = (props) => {
  return (
    <ul class="main__list">
      <ListItem text={`${props.storage} Storage`} />
      <ListItem text={`${props.users} Users Allowed`} />
      <ListItem text={`Send up to ${props.bandwidth} GB`} />
    </ul>
  );
};

export default CardList;
