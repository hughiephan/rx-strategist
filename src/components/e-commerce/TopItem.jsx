import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const TopItem = () => {
  const settings = {
    dots: false,
    arrows: false,
    centerPadding: "0px",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const topItemContent = [
    {
      id: 1,
      img: "img_08",
      tag: "hot",
      title: "Quilted Gilet With Hood",
      price: "17.99",
      ratings: (
        <>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </li>
        </>
      ),
    },
    {
      id: 2,
      img: "img_09",
      tag: "best seller",
      title: " Jogers with Black strip",
      price: "80.99",
      ratings: (
        <>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </li>
        </>
      ),
    },
    {
      id: 3,
      img: "img_10",
      tag: "trending",
      title: "Rolex Gold Watch",
      price: "217.99",
      ratings: (
        <>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </li>
        </>
      ),
    },
    {
      id: 4,
      img: "img_11",
      tag: "hot",
      title: "Men’s Nike T-Shirt",
      price: "23.99",
      ratings: (
        <>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </li>
        </>
      ),
    },
    {
      id: 5,
      img: "img_12",
      tag: "best sellter",
      title: "Quilted Gilet With Hood",
      price: "17.99",
      ratings: (
        <>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </li>
        </>
      ),
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {topItemContent.map((item) => (
          <div className="item" key={item.id}>
            <div className="product-block-one">
              <div className="img-holder">
                <Link
                  to="/product-details"
                  className="d-flex align-items-center justify-content-center h-100"
                >
                  <img
                    src={`images/shop/${item.img}.png`}
                    alt="shop product"
                    className="product-img tran4s"
                  />
                </Link>
                <Link to="/cart" className="cart-icon" title="Add To Cart">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </Link>
                <div className="tag-one">{item.tag}</div>
              </div>
              {/* <!-- /.img-holder --> */}

              <div className="product-meta">
                <div className="d-lg-flex align-items-center justify-content-between">
                  <Link to="/product-details" className="product-title">
                    {item.title}
                  </Link>
                  <ul className="style-none d-flex rating">{item.ratings}</ul>
                </div>
                <div className="price">$17.99</div>
              </div>
              {/* <!-- /.product-meta --> */}
            </div>
            {/* <!-- /.product-block-one --> */}
          </div>
        ))}
      </Slider>
    </>
  );
};

export default TopItem;
