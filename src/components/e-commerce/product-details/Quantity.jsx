import React from "react";

const Quantity = () => {
  return (
    <div className="button-group">
      <ul className="style-none d-flex align-items-center">
        <li>
          <button className="value-decrease">-</button>
        </li>
        <li>
          <input
            type="number"
            min="1"
            max="22"
            defaultValue="1"
            disabled=""
            className="product-value val"
          />
        </li>
        <li>
          <button className="value-increase">+ </button>
        </li>
      </ul>
    </div>
  );
};

export default Quantity;
