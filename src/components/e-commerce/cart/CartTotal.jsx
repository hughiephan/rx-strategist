import React from "react";
import { Link } from "react-router-dom";

const CartTotal = () => {
  return (
    <>
      <table className="cart-total-table">
        <tbody>
          <tr>
            <th>Subtotal</th>
            <td>$276.65</td>
          </tr>
          <tr>
            <th>Shipping Cost</th>
            <td>$13.00</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>$289.65</td>
          </tr>
        </tbody>
      </table>
      {/* <!-- /.cart-total-table --> */}
      <Link to="/checkout" className="theme-btn-seven checkout-process mt-30">
        Checkout
      </Link>
    </>
  );
};

export default CartTotal;
