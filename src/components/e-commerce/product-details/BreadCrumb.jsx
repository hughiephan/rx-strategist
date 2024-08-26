import React from "react";

const BreadCrumb = () => {
  return (
    <nav className="breadcrumb-style-one mt-20">
      <ol className="breadcrumb bg-white style-none m0 p0">
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="productV1.html">Shop</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Quilted Gilet With Hood{" "}
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumb;
