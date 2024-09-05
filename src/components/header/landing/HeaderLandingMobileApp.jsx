import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import MegaMenuLanding from "../../header/mega-menu/MegaMenuLanding";

const HeaderLandingMobileApp = () => {
  // For header select menu
  const [click1, setClick1] = useState(false);
  const handleClick1 = () => setClick1(!click1);

  // For Mobile  menu
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* =============================================
				Theme Main Menu
			==============================================  */}
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-five fixed"
            : "theme-main-menu sticky-menu theme-menu-five"
        }
      >
        <div className="d-flex align-items-center justify-content-center">
          <div className="logo">
            {/* <Link to="/doc-landing">
              <img src="images/logo/deski_06.svg" alt="brand" />
            </Link> */}
          </div>
          {/* End logo */}

          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div className="mob-header">
                <button className="toggler-menu" onClick={handleClick}>
                  <div className={click ? "active" : ""}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
              {/* End Header */}

              <div
                className="navbar-collapse collapse landing-menu-onepage"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex justify-content-between align-items-center">
                  <Scrollspy
                    className="navbar-nav  main-side-nav font-gordita"
                    items={[
                      "product",
                      "features",
                      "pricing",
                      "feedback",
                    ]}
                    currentClassName="active"
                    offset={-90}
                  >
                    {/* <li className="nav-item dropdown position-static">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#home"
                        data-toggle="dropdown"
                      >
                        Home
                      </a>
                      <div className="dropdown-menu">
                        <MegaMenuLanding />
                      </div>
                    </li> */}

                    <li className="nav-item">
                      <a href="https://drive.google.com/file/d/1UQfMsopSQwDZa-ZOsC8t-0TEhW53Wjgc/view?usp=sharing" className="nav-link">
                        Paper (Redacted)
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="https://www.canva.com/design/DAGPm2HqCyk/wI1EM3uwbqyAhes_OfVLVQ/view" className="nav-link">
                        Presentation
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="https://github.com/pphuc25/Rx-Strategist" className="nav-link">
                        Codebase
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="https://github.com/nikkapp/Prescription-Analyzer" className="nav-link">
                        Component
                      </a>
                    </li>

                    {/* <li className="nav-item">
                      <a href="#feedback" className="nav-link">
                        Feedback
                      </a>
                    </li> */}
                  </Scrollspy>
                </div>
              </div>
            </div>
          </nav>
          {/* End Navbar */}

          {/* <div className="right-widget">
            <ul className="d-flex align-items-center">
              <li>
                <div
                  className={
                    click1
                      ? "dropdown download-btn ms-0 style-two show"
                      : "dropdown download-btn ms-0 style-two"
                  }
                >
                  <button
                    className="dropdown-toggle"
                    onClick={handleClick1}
                    type="button"
                  >
                    Get started
                  </button>
                  <div
                    className={click1 ? "dropdown-menu  show" : "dropdown-menu"}
                  >
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#/signup"
                      onClick={handleClick1}
                    >
                      <img src="images/icon/103.svg" alt="icon" />
                      <span>Signup</span>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#/login"
                      onClick={handleClick1}
                    >
                      <img src="images/icon/104.svg" alt="icon" />
                      <span>Signin</span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div> */}
          {/* End right-widget */}
        </div>
      </div>
      {/* /.theme-main-menu */}

      {/* Mobile Menu Start */}
      <div className={click ? "mobile-menu  menu-open" : "mobile-menu"}>
        <div className="logo order-md-1">
          {/* <Link to="/doc-landing">
            <img src="images/logo/deski_06.svg" alt="brand" />
          </Link> */}
          <div className="fix-icon text-dark" onClick={handleClick}>
            <img src="images/icon/close.svg" alt="icon" />
          </div>
          {/* Mobile Menu close icon */}
        </div>

        <Scrollspy
          className="navbar-nav  main-side-nav font-gordita"
          items={["home", "product", "features", "pricing", "feedback"]}
          currentClassName="active"
          offset={-90}
        >
          <li className="nav-item">
            <a href="https://drive.google.com/file/d/1UQfMsopSQwDZa-ZOsC8t-0TEhW53Wjgc/view?usp=sharing" className="nav-link" onClick={handleClick}>
              Paper (Redacted)
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.canva.com/design/DAGPm2HqCyk/wI1EM3uwbqyAhes_OfVLVQ/view" className="nav-link" onClick={handleClick}>
              Presentation
            </a>
          </li>
          <li className="nav-item">
            <a href="https://github.com/pphuc25/Rx-Strategist" className="nav-link" onClick={handleClick}>
              Codebase
            </a>
          </li>
          <li className="nav-item">
            <a href="https://github.com/nikkapp/Prescription-Analyzer" className="nav-link" onClick={handleClick}>
              Component
            </a>
          </li>
        </Scrollspy>
      </div>
      {/* Mobile Menu End */}
    </>
  );
};

export default HeaderLandingMobileApp;
