import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductGalleryContent from "./ProductGalleryContent";
import { Gallery, Item } from "react-photoswipe-gallery";

const ProductGallery = () => {
  return (
    <Gallery>
      <Tabs>
        <div className="row">
          <div className="col-lg-5 order-lg-2">
            <div className=" product-img-tab-content h-100">
              <TabPanel>
                <div className="h-100">
                  <Item
                    original="images/shop/img_20.png"
                    thumbnail="images/shop/img_20.png"
                    width={465}
                    height={609}
                  >
                    {({ ref, open }) => (
                      <div className="fancybox h-100 w-100 d-flex align-items-center justify-content-center">
                        <img
                          src="images/shop/img_20.png"
                          alt="Gallery"
                          className="m-auto"
                          role="button"
                          ref={ref}
                          onClick={open}
                        />
                      </div>
                    )}
                  </Item>
                </div>
              </TabPanel>
              {/* End tabpanel */}

              <TabPanel>
                <div className="h-100">
                  <Item
                    original="images/shop/img_21.png"
                    thumbnail="images/shop/img_21.png"
                    width={533}
                    height={611}
                  >
                    {({ ref, open }) => (
                      <div className="fancybox h-100 w-100 d-flex align-items-center justify-content-center">
                        <img
                          src="images/shop/img_21.png"
                          alt="Gallery"
                          className="m-auto"
                          role="button"
                          ref={ref}
                          onClick={open}
                        />
                      </div>
                    )}
                  </Item>
                </div>
              </TabPanel>
              {/* End tabpanel */}

              <TabPanel>
                <div className="h-100">
                  <Item
                    original="images/shop/img_22.png"
                    thumbnail="images/shop/img_22.png"
                    width={395}
                    height={588}
                  >
                    {({ ref, open }) => (
                      <div className="fancybox h-100 w-100 d-flex align-items-center justify-content-center">
                        <img
                          src="images/shop/img_22.png"
                          alt="Gallery"
                          className="m-auto"
                          role="button"
                          ref={ref}
                          onClick={open}
                        />
                      </div>
                    )}
                  </Item>
                </div>
              </TabPanel>
            </div>
          </div>
          {/* End larget gallery */}

          <div className="col-lg-1 order-lg-1">
            <TabList className="nav nav-tabs flex-lg-column product-img-tab">
              <Tab className="nav-item">
                <button className="nav-link">
                  <img
                    src="images/shop/img_17.png"
                    alt="shop "
                    className="m-auto"
                  />
                </button>
              </Tab>
              <Tab className="nav-item">
                <button className="nav-link">
                  <img
                    src="images/shop/img_18.png"
                    alt="shop "
                    className="m-auto"
                  />
                </button>
              </Tab>
              <Tab className="nav-item">
                <button className="nav-link">
                  <img
                    src="images/shop/img_19.png"
                    alt="shop "
                    className="m-auto"
                  />
                </button>
              </Tab>
            </TabList>
          </div>
          {/* End thumb gallery */}

          <div className="col-lg-6 order-lg-3">
            <ProductGalleryContent />
          </div>
          {/* End product gallery content */}
        </div>
      </Tabs>
    </Gallery>
  );
};

export default ProductGallery;
