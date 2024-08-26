import React from "react";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  return (
    <>
      <ul className="style-none cart-product-list">
        <li className="d-flex align-items-center selected-item">
          <Link
            to="/product-details"
            className="item-img d-flex align-items-center justify-content-center"
          >
            <img src="images/shop/img_01.png" alt="" />
          </Link>
          <div className="item-info">
            <Link to="/product-details" className="name">
              Rolex Watch
            </Link>
            <div className="price">
              $38.00 <span className="quantity">x 1</span>
            </div>
          </div>
          {/* <!-- /.item-info --> */}
        </li>
        {/* <!-- /.selected-item --> */}

        <li className="d-flex align-items-center selected-item">
          <Link
            to="/product-details"
            className="item-img d-flex align-items-center justify-content-center"
          >
            <img src="images/shop/img_02.png" alt="" />
          </Link>
          <div className="item-info">
            <Link to="/product-details" className="name">
              Vibrant Shoe.
            </Link>
            <div className="price">
              $125.00 <span className="quantity">x 1</span>
            </div>
          </div>
          {/* <!-- /.item-info --> */}
        </li>
        {/* <!-- /.selected-item --> */}
      </ul>
      {/* <!-- /.cart-product-list --> */}

      <div className="subtotal d-flex justify-content-between align-items-center">
        <div className="title">Subtotal</div>
        <div className="total-price">$163.00</div>
      </div>
      <ul className="style-none button-group">
        <li>
          <Link to="/cart" className="view-cart">
            View Cart
          </Link>
        </li>
        <li>
          <Link to="/checkout" className="checkout">
            Checkout
          </Link>
        </li>
      </ul>
    </>
  );
};

export default CartDropdown;
