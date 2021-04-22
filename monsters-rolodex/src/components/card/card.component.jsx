import React from "react";
import "./card.styles.css";

export const Card = props => {
  return (
    <div className="card">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      ></img>
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
      <p>{props.monster.phone}</p>
      <p>{props.monster.website}</p>
    </div>
  );
};
