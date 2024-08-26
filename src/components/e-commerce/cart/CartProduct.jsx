import React from "react";

const CartProduct = () => {
  return (
    <>
      <tr>
        <td className="product-thumbnails">
          <a href="#" className="product-img">
            <img src="images/shop/img_23.png" alt="" />
          </a>
        </td>
        <td className="product-info">
          <a href="#" className="product-name">
            Rolex Gold Watch
          </a>
          <div className="serial">#859632007881</div>
          <ul className="style-none">
            <li className="size">Size: 23”</li>
            <li className="color">Color: Red</li>
          </ul>
        </td>
        <td className="price">
          <span>$99.00</span>
        </td>
        <td className="quantity">
          <ul className="order-box style-none">
            <li>
              <div className="btn value-decrease">-</div>
            </li>
            <li>
              <input
                type="number"
                min="1"
                max="22"
                defaultValue="1"
                disabled
                className="product-value val"
              />
            </li>
            <li>
              <div className="btn value-increase">+ </div>
            </li>
          </ul>
        </td>
        <td className="price total-price">
          <span>$99.00</span>
        </td>
        <td>
          <a href="#" className="remove-product">
            x
          </a>
        </td>
      </tr>
      {/* End singler product tr */}

      <tr>
        <td className="product-thumbnails">
          <a href="#" className="product-img">
            <img src="images/shop/img_24.png" alt="" />
          </a>
        </td>
        <td className="product-info">
          <a href="#" className="product-name">
            Quilted Gilet With Hood
          </a>
          <div className="serial">#859632007881</div>
          <ul className="style-none">
            <li className="size">Size: 23”</li>
            <li className="color">Color: N/A</li>
          </ul>
        </td>
        <td className="price">
          <span>$120.00</span>
        </td>
        <td className="quantity">
          <ul className="order-box style-none">
            <li>
              <div className="btn value-decrease">-</div>
            </li>
            <li>
              <input
                type="number"
                min="1"
                max="22"
                value="1"
                disabled
                className="product-value val"
              />
            </li>
            <li>
              <div className="btn value-increase">+ </div>
            </li>
          </ul>
        </td>
        <td className="price total-price">
          <span>$120.00</span>
        </td>
        <td>
          <a href="#" className="remove-product">
            x
          </a>
        </td>
      </tr>
      {/* End singler product tr */}

      <tr>
        <td className="product-thumbnails">
          <a href="#" className="product-img">
            <img src="images/shop/img_25.png" alt="" />
          </a>
        </td>
        <td className="product-info">
          <a href="#" className="product-name">
            Jogers with Black strip
          </a>
          <div className="serial">#859632007881</div>
          <ul className="style-none">
            <li className="size">Size: N/A</li>
            <li className="color">Color: Red</li>
          </ul>
        </td>
        <td className="price">
          <span>$143.00</span>
        </td>
        <td className="quantity">
          <ul className="order-box style-none">
            <li>
              <div className="btn value-decrease">-</div>
            </li>
            <li>
              <input
                type="number"
                min="1"
                max="22"
                value="1"
                disabled
                className="product-value val"
              />
            </li>
            <li>
              <div className="btn value-increase">+ </div>
            </li>
          </ul>
        </td>
        <td className="price total-price">
          <span>$143.00</span>
        </td>
        <td>
          <a href="#" className="remove-product">
            x
          </a>
        </td>
      </tr>
    </>
  );
};

export default CartProduct;
