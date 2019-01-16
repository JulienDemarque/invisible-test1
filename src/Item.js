import React from "react";
import { Flipped } from "react-flip-toolkit";

const Item = ({ item, handleRemove, flipId, index }) => {
  return (
    <Flipped flipId={flipId}>
      <li className={(index + 1) % 3 === 0 ? "list-item green" : "list-item"}>
        <span>{item}</span>
        <button
          name={item}
          onClick={handleRemove}
          className="list-item__button"
        >
          <i className="fas fa-times" />
        </button>
      </li>
    </Flipped>
  );
};

export default Item;
