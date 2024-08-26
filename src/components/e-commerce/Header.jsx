import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartDropdown from "./CartDropdown";
import Sidebar from "./Sidebar";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [click2, setClick2] = useState(false);
  const handleClick2 = () => setClick2(!click2);

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={
        navbar
          ? "theme-main-menu sticky-menu bg-none theme-menu-eight fixed"
          : "theme-main-menu sticky-menu bg-none theme-menu-eight"
      }
    >
      <div className="d-flex align-items-center justify-content-between">
        <div className="logo">
          <Link to="/">
            <img src="images/logo/deski_10.svg" alt="brand" />
          </Link>
        </div>

        <div className="right-widget d-flex align-items-center">
          <Link
            to="/login"
            className="signIn-action d-none d-sm-flex align-items-center"
          >
            <img src="images/icon/199.svg" alt="icon" className="me-2" />
            <span>login</span>
          </Link>

          <div className="cart-group-wrapper position-relative">
            <button
              className="btn dropdown-toggle"
              type="button"
              onClick={handleClick}
            >
              <img src="images/icon/200.svg" alt="" className="m-auto" />
              <span className="item-count">02</span>
            </button>
            <div
              className={click ? "dropdown-cart cart-show" : "dropdown-cart"}
            >
              <CartDropdown />
            </div>
          </div>
          {/* End .cart-group-wrapper */}

          <button className="sidebar-nav-button" onClick={handleClick2}>
            <img src="images/icon/201.svg" alt="icon" />
          </button>
          {/* sidebar nav  toggle button */}

          <div
            className={click2 ? "main-sidebar-nav show" : "main-sidebar-nav"}
          >
            <div className="offcanvas-header d-flex justify-content-between align-items-center">
              <div className="logo">
                <Link to="/e-commerce" className="d-block">
                  <img src="images/logo/deski_10.svg" alt="brand" />
                </Link>
              </div>
              {/* End logo */}

              <button
                type="button"
                className="close-btn tran3s"
                onClick={handleClick2}
              >
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>
            {/* offcanvas-header */}

            <Sidebar />
          </div>
          {/* main-sidebar-nav */}
        </div>
        {/* <!-- /.right-widget --> */}
      </div>
    </div>
  );
};

export default Header;
