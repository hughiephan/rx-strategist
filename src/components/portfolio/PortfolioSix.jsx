import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
const TabListContent = ["All", "Development", "Plugin", "Desing", "Branding"];

const AllPortfolio = [
  {
    img: "images/gallery/img_28.jpg",
    title: "The Gang Blue",
    meta: "Development, Design",
    dalayAnimation: "",
  },
  {
    img: "images/gallery/img_29.jpg",
    title: "Core WordPress",
    meta: "Development, Plugin",
    dalayAnimation: "100",
  },
  {
    img: "images/gallery/img_30.jpg",
    title: "Platform Audit",
    meta: "Development, Branding",
    dalayAnimation: "100",
  },
  {
    img: "images/gallery/img_31.jpg",
    title: "Medieval origins",
    meta: "Development, Design",
    dalayAnimation: "100",
  },
  {
    img: "images/gallery/img_32.jpg",
    title: "Designer’s Checklist",
    meta: "Development, Plugin",
    dalayAnimation: "100",
  },
];
const Development = [
  {
    img: "images/gallery/img_33.jpg",
    title: "Medieval origins",
    meta: "Development, Design",
    dalayAnimation: "0",
  },
];

const Plugin = [
  {
    img: "images/gallery/img_30.jpg",
    title: "Platform Audit",
    meta: "Development, Plugin",
    dalayAnimation: "0",
  },
];

const Design = [
  {
    img: "images/gallery/img_32.jpg",
    title: "Designer’s Checklist",
    meta: "Development, Design",
    dalayAnimation: "0",
  },
];

const Branding = [
  {
    img: "images/gallery/img_29.jpg",
    title: "Core WordPress",
    meta: "Development, Branding",
    dalayAnimation: "0",
  },
];

const PortfolioSix = () => {
  return (
    <Tabs className="portfolio-container">
      <div className="controls po-control-two text-center mb-90 md-mb-50 mt-90 md-mt-60">
        <TabList className="d-flex flex-wrap justify-content-center">
          {TabListContent.map((tab, i) => (
            <Tab key={i}>
              <button type="button" className="control">
                {tab}
              </button>
            </Tab>
          ))}
        </TabList>
      </div>
      {/* End pc-control-one */}

      <Gallery>
        <TabPanel>
          <div className="mixitUp-container  gutter-space-one d-flex flex-wrap">
            {AllPortfolio.map((val, i) => (
              <div
                className="mix"
                key={i}
                data-aos="fade-right"
                data-aos-delay={val.dalayAnimation}
              >
                <div className="portfolio-block-two position-relative">
                  <div className="d-flex align-vals-center justify-content-center">
                    <img
                      src={val.img}
                      alt={val.meta}
                      className="w-100 h-100 tran4s img-meta"
                    />
                    <Item
                      original={val.img}
                      thumbnail={val.img}
                      width={1050}
                      height={525}
                    >
                      {({ ref, open }) => (
                        <div
                          className="fancybox"
                          role="button"
                          ref={ref}
                          onClick={open}
                        >
                          <i
                            className="fa fa-arrows-alt"
                            aria-hidden="true"
                          ></i>
                        </div>
                      )}
                    </Item>
                  </div>
                  <div className="hover-content">
                    <h3>
                      <Link to="/portfolio-details-v1">{val.title}</Link>
                    </h3>
                    <div className="tag">{val.meta}</div>
                  </div>
                  {/* /.hover-content */}
                </div>
                {/* /.portfolio-block-two */}
              </div>
            ))}
          </div>
          {/* single mixitUp-container */}
        </TabPanel>
        {/* End all */}
        <TabPanel>
          <div className="mixitUp-container gutter-space-one d-flex flex-wrap">
            {Development.map((val, i) => (
              <div
                className={`mix ${val.imgClass}`}
                key={i}
                data-aos="fade-right"
                data-aos-delay={val.dalayAnimation}
              >
                <div className="portfolio-block-two position-relative">
                  <div className="d-flex align-vals-center justify-content-center">
                    <img
                      src={val.img}
                      alt={val.meta}
                      className="w-100 h-100 tran4s img-meta"
                    />
                    <Item
                      original={val.img}
                      thumbnail={val.img}
                      width={1050}
                      height={525}
                    >
                      {({ ref, open }) => (
                        <div
                          className="fancybox"
                          role="button"
                          ref={ref}
                          onClick={open}
                        >
                          <i
                            className="fa fa-arrows-alt"
                            aria-hidden="true"
                          ></i>
                        </div>
                      )}
                    </Item>
                  </div>
                  <div className="hover-content">
                    <h3>
                      <Link to="/portfolio-details-v1">{val.title}</Link>
                    </h3>
                    <div className="tag">{val.meta}</div>
                  </div>
                  {/* /.hover-content */}
                </div>
                {/* /.portfolio-block-two */}
              </div>
            ))}
          </div>
        </TabPanel>
        {/* End development */}
        <TabPanel>
          <div className="mixitUp-container gutter-space-one d-flex flex-wrap">
            {Plugin.map((val, i) => (
              <div
                className={`mix ${val.imgClass}`}
                key={i}
                data-aos="fade-right"
                data-aos-delay={val.dalayAnimation}
              >
                <div className="portfolio-block-two position-relative">
                  <div className="d-flex align-vals-center justify-content-center">
                    <img
                      src={val.img}
                      alt={val.meta}
                      className="w-100 h-100 tran4s img-meta"
                    />
                    <Item
                      original={val.img}
                      thumbnail={val.img}
                      width={1050}
                      height={525}
                    >
                      {({ ref, open }) => (
                        <div
                          className="fancybox"
                          role="button"
                          ref={ref}
                          onClick={open}
                        >
                          <i
                            className="fa fa-arrows-alt"
                            aria-hidden="true"
                          ></i>
                        </div>
                      )}
                    </Item>
                  </div>
                  <div className="hover-content">
                    <h3>
                      <Link to="/portfolio-details-v1">{val.title}</Link>
                    </h3>
                    <div className="tag">{val.meta}</div>
                  </div>
                  {/* /.hover-content */}
                </div>
                {/* /.portfolio-block-two */}
              </div>
            ))}
          </div>
        </TabPanel>
        {/* End plugin */}
        <TabPanel>
          <div className="mixitUp-container gutter-space-one d-flex flex-wrap">
            {Design.map((val, i) => (
              <div
                className={`mix ${val.imgClass}`}
                key={i}
                data-aos="fade-right"
                data-aos-delay={val.dalayAnimation}
              >
                <div className="portfolio-block-two position-relative">
                  <div className="d-flex align-vals-center justify-content-center">
                    <img
                      src={val.img}
                      alt={val.meta}
                      className="w-100 h-100 tran4s img-meta"
                    />
                    <Item
                      original={val.img}
                      thumbnail={val.img}
                      width={1050}
                      height={525}
                    >
                      {({ ref, open }) => (
                        <div
                          className="fancybox"
                          role="button"
                          ref={ref}
                          onClick={open}
                        >
                          <i
                            className="fa fa-arrows-alt"
                            aria-hidden="true"
                          ></i>
                        </div>
                      )}
                    </Item>
                  </div>
                  <div className="hover-content">
                    <h3>
                      <Link to="/portfolio-details-v1">{val.title}</Link>
                    </h3>
                    <div className="tag">{val.meta}</div>
                  </div>
                  {/* /.hover-content */}
                </div>
                {/* /.portfolio-block-two */}
              </div>
            ))}
          </div>
        </TabPanel>
        {/* End design */}
        <TabPanel>
          <div className="mixitUp-container gutter-space-one d-flex flex-wrap">
            {Branding.map((val, i) => (
              <div
                className={`mix ${val.imgClass}`}
                key={i}
                data-aos="fade-right"
                data-aos-delay={val.dalayAnimation}
              >
                <div className="portfolio-block-two position-relative">
                  <div className="d-flex align-vals-center justify-content-center">
                    <img
                      src={val.img}
                      alt={val.meta}
                      className="w-100 h-100 tran4s img-meta"
                    />
                    <Item
                      original={val.img}
                      thumbnail={val.img}
                      width={1050}
                      height={525}
                    >
                      {({ ref, open }) => (
                        <div
                          className="fancybox"
                          role="button"
                          ref={ref}
                          onClick={open}
                        >
                          <i
                            className="fa fa-arrows-alt"
                            aria-hidden="true"
                          ></i>
                        </div>
                      )}
                    </Item>
                  </div>
                  <div className="hover-content">
                    <h3>
                      <Link to="/portfolio-details-v1">{val.title}</Link>
                    </h3>
                    <div className="tag">{val.meta}</div>
                  </div>
                  {/* /.hover-content */}
                </div>
                {/* /.portfolio-block-two */}
              </div>
            ))}
          </div>
        </TabPanel>
        {/* End branding */}
      </Gallery>
    </Tabs>
  );
};

export default PortfolioSix;
