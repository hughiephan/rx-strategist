import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import FaqClassic from "../../components/faq/FaqClassicTwo";
import SocialTwo from "../../components/social/SocialTwo";
import CounterOne from "../../components/counter/CounterOne";
import CallToActionFour from "../../components/call-to-action/CallToActionFour";
import Footer from "../../components/footer/Footer";
import CopyRight from "../../components/footer/CopyRight";
import MainBlockMetaData from "../../components/fancy-text-block/MainBlockMetaData";
import HeaderMain from "../../components/header/HeaderMain";

const MainLanding = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>
          RxStrategist
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderMain />
      {/* End Header */}

      {/* 
     =============================================
			Hero Banner One
		============================================== */}
      <div className="hero-banner-one">
        <div className="hero-upper-container">
          <div className="icon-box-one">
            <img src="images/logo/main-01.png" alt="logo" />
          </div>
          <div className="icon-box-two">
            <img src="images/logo/main-02.png" alt="logo" />
          </div>
          <div className="icon-box-three">
            <img src="images/logo/main-03.png" alt="logo" />
          </div>
          <div className="icon-box-four">
            <img src="images/logo/main-04.png" alt="logo" />
          </div>
          <div className="icon-box-five">
            <img src="images/logo/main-05.png" alt="logo" />
          </div>
          <div className="icon-box-six">
            <img src="images/logo/main-06.png" alt="logo" />
          </div>
          <div className="icon-box-seven">
            <img src="images/logo/main-08.png" alt="logo" />
          </div>
          <div className="icon-box-eight">
            <img src="images/logo/main-07.png" alt="logo" />
          </div>

          <div className="bubble-one"></div>
          <div className="bubble-two"></div>
          <div className="bubble-three"></div>
          <div className="bubble-four"></div>
          <div className="bubble-five"></div>
          <div className="bubble-six"></div>
          {/* End all bubble images */}

          <div className="container">
            <div className="row">
              <div style={{width:"70%"}}className="col-xl-8 col-lg-10 m-auto">
                <h1 className="font-rubik hero-heading">
                 Ensuring accurate patient's <span> prescription</span>
                </h1>
                <p className="hero-sub-heading">
                  AI Tools for reviewing drug interactions, contraindications, dosage, and administration
                </p>
              </div>
              {/* End .col */}
            </div>
            {/* End row */}

            {/* <form
              action="#"
              className="subscription-form"
              onClick={handleSubmit}
            >
              <input type="email" placeholder="Your work email" />
              <button>Try for free</button>
            </form> */}
            {/* End form */}

            {/* <p className="sing-in-call">
              Already using deski? <Link to="/login">Sign in.</Link>
            </p> */}
          </div>
          {/* End .container */}
        </div>
        {/* /.hero-upper-container */}
      </div>
      {/* /.hero-banner-one */}

      {/* 
     =============================================
				Fancy Feature One
		============================================== */}
      <div className="fancy-feature-one pb-150 md-pb-80">
        <div className="text-center">
          <div style={{width: "70%"}} className="feature-img-area">
            <img style={{borderRadius: "15px"}}src="images/assets/main-feature-img-01.png" alt="feature" />
            <img
              src="images/assets/screen_33.png"
              alt="feature"
              className="cs-screen screen-one-main"
            />
          </div>
          {/* /.feature-img-area */}
        </div>
        {/* /.text-center */}
      </div>
      {/* /.fancy-feature-one */}
    </div>
  );
};

export default MainLanding;
