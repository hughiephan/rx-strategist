import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const RelatedProducts = () => {
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

  const bestSellingItem = [
    {
      id: 1,
      img: "img_13",
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
      img: "img_14",
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
      img: "img_15",
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
      img: "img_16",
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
      img: "img_14",
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
        {bestSellingItem.map((item) => (
          <div className="item" key={item.id}>
            <div className="product-block-two">
              <div className="img-holder">
                <Link
                  to="/product-details"
                  className="d-flex align-items-center justify-content-center h-100"
                >
                  <img
                    src={`images/shop/${item.img}.png`}
                    alt="shop"
                    className="product-img tran4s"
                  />
                </Link>
                <Link to="/cart" className="cart-icon" title="Add To Cart">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </Link>
              </div>
              {/* <!-- /.img-holder --> */}
              <div className="product-meta">
                <ul className="style-none d-flex justify-content-center rating">
                  {item.ratings}
                </ul>
                <Link to="/product-details" className="product-title">
                  {item.title}
                </Link>

                <div className="price">${item.price}</div>
              </div>
              {/* <!-- /.product-meta --> */}
            </div>
            {/* <!-- /.product-block-two --> */}
          </div>
        ))}
      </Slider>
    </>
  );
};

export default RelatedProducts;
