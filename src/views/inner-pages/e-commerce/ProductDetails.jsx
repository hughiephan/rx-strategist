import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../components/e-commerce/Header";
import BreadCrumb from "../../../components/e-commerce/product-details/BreadCrumb";
import ProductGallery from "../../../components/e-commerce/product-details/ProductGallery";
import SocialShare from "../../../components/e-commerce/product-details/SocialShare";
import ProductGalleryContent from "../../../components/e-commerce/product-details/ProductGalleryContent";
import ProductTabContent from "../../../components/e-commerce/product-details/ProductTabContent";
import ProductFratureBlock from "../../../components/e-commerce/product-details/ProductFratureBlock";
import RelatedProducts from "../../../components/e-commerce/product-details/RelatedProducts";
import FooterSeven from "../../../components/footer/FooterSeven";
import CopyRightThree from "../../../components/footer/CopyRightThree";

const ProductDetails = () => {
  return (
    <div className="main-page-wrapper p0 font-gordita">
      <Helmet>
        <title>Product Details || Deski-Saas & Software React Template</title>
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
        Product Details One
        ============================================== 
        --> */}
      <div className="product-details-one lg-container pt-180 lg-pt-150">
        <div className="breadcrumb-area pb-70">
          <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
              <BreadCrumb />
              <SocialShare />
            </div>
          </div>
        </div>
        {/* <!-- /.breadcrumb-area --> */}

        <div className="container">
          <ProductGallery />
          <ProductTabContent />
          {/* <!-- /.product-review-tab --> */}
          <div className="mt-60 lg-mt-40">
            <div className="row">
              <ProductFratureBlock />
            </div>
          </div>
        </div>
        {/* End .container */}
      </div>
      {/* <!-- /.product-details-one --> */}

      {/* <!-- 
        =============================================
            Fancy Feature Forty Three
        ============================================== 
        --> */}
      <div className="fancy-feature-fortyThree lg-container pt-100 pb-100 mt-130 mb-120 lg-pt-80 lg-pb-80 lg-mt-100 lg-mb-100">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-6">
              <div className="title-style-eleven text-center text-md-left">
                <h2>Releted Products</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="xl-container mt-60 lg-mt-40">
          <div className="product_slider_two product_slider_space">
            <RelatedProducts />
          </div>
        </div>
        {/* <!-- /.xl-container --> */}
      </div>
      {/* <!-- /.fancy-feature-fortyThree --> */}

      {/* =====================================================
        Footer Style Seven
        ===================================================== */}
      <footer className="theme-footer-seven ">
        <div className="lg-container">
          <div className="container inner-btn-black">
            <FooterSeven />
          </div>

          <div className="container">
            <div className="bottom-footer">
              <CopyRightThree />
            </div>
          </div>
        </div>
        {/* /.lg-container */}
      </footer>
      {/* /.theme-footer-seven */}
    </div>
    // main-page-wrapper
  );
};

export default ProductDetails;
