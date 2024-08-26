import React from "react";
import { Helmet } from "react-helmet";
import BillingDetails from "../../../components/e-commerce/checkout/BillingDetails";
import LogIn from "../../../components/e-commerce/checkout/LogIn";
import Payment from "../../../components/e-commerce/checkout/Payment";
import PromoCode from "../../../components/e-commerce/checkout/PromoCode";
import Header from "../../../components/e-commerce/Header";

const Checkout = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main-page-wrapper p0 font-gordita">
      <Helmet>
        <title>Checkout || Deski-Saas & Software React Template</title>
      </Helmet>
      {/* End Page SEO Content */}

      {/* <!-- 
    =============================================
    Theme Main Menu
    ============================================== 
    --> */}
      <Header />

      {/* <!-- 
    =============================================
    Checkout Page
    ============================================== 
    --> */}

      <div className="checkout-section pt-200 pb-100 lg-pt-180 sm-pb-50">
        <div className="container">
          <div className="checkout-toggle-area mb-80 md-mb-60">
            <LogIn />
            <PromoCode />
          </div>
          {/* <!-- /.checkout-toggle-area --> */}

          <form onClick={handleSubmit} className="checkout-form">
            <div className="row">
              <div className="col-xl-6 col-lg-7">
                <h2 className="main-title">Billign Details</h2>
                <BillingDetails />
                {/* <!-- /.user-profile-data --> */}
              </div>
              {/* <!-- /.col- --> */}

              <div className="col-xxl-4 col-lg-5 ms-auto">
                <div className="order-confirm-sheet md-mt-60">
                  <h2 className="main-title">Order Details</h2>
                  <Payment />
                </div>
                {/* <!-- /.order-confirm-sheet --> */}
              </div>
            </div>
            {/* <!-- /.row --> */}
          </form>
          {/* <!-- /.checkout-form --> */}
        </div>
        {/* <!-- /.container --> */}
      </div>

      {/* <!-- /.checkou-section --> */}
    </div>
  );
};

export default Checkout;
