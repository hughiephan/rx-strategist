import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";

const TabListContent = ["All", "Development", "Plugin", "Desing", "Branding"];

const AllPortfolio = [
  {
    img: "images/gallery/img_01.jpg",
    title: "The Gang Blue",
    meta: "Development, Design",
    imgClass: "",
    dalayAnimation: "",
    width: "407",
    height: "549",
  },
  {
    img: "images/gallery/img_02.jpg",
    title: "Core WordPress",
    meta: "Development, Plugin",
    imgClass: "",
    dalayAnimation: "100",
    width: "407",
    height: "549",
  },
  {
    img: "images/gallery/img_03.jpg",
    title: "Platform Audit",
    meta: "Development, Branding",
    imgClass: "",
    dalayAnimation: "200",
    width: "407",
    height: "549",
  },
  {
    img: "images/gallery/img_04.jpg",
    title: "Medieval origins",
    meta: "Development, Design",
    imgClass: "",
    dalayAnimation: "0",
    width: "407",
    height: "549",
  },
  {
    img: "images/gallery/img_05.jpg",
    title: "Designer’s Checklist",
    meta: "Development, Plugin",
    imgClass: "mixL",
    dalayAnimation: "100",
    width: "863",
    height: "542",
  },
  {
    img: "images/gallery/img_06.jpg",
    title: "Motivation defining Moment",
    meta: "Development, Design",
    imgClass: "",
    dalayAnimation: "0",
    width: "407",
    height: "549",
  },
  {
    img: "images/gallery/img_07.jpg",
    title: "Our experience WordCamp",
    meta: "Development, Branding",
    imgClass: "",
    dalayAnimation: "100",
    width: "407",
    height: "549",
  },
  {
    img: "images/gallery/img_08.jpg",
    title: "Lets catch up amd",
    meta: "Development, Branding",
    imgClass: "",
    dalayAnimation: "200",
    width: "407",
    height: "549",
  },
];
const Development = [
  {
    img: "images/gallery/img_02.jpg",
    title: "Core WordPress",
    meta: "Development, Plugin",
    imgClass: "",
    dalayAnimation: "0",
    width: "407",
    height: "549",
  },
  {
    img: "images/gallery/img_04.jpg",
    title: "Medieval origins",
    meta: "Development, Design",
    imgClass: "",
    dalayAnimation: "100",
    width: "407",
    height: "549",
  },
  {
    img: "images/gallery/img_08.jpg",
    title: "Lets catch up amd",
    meta: "Development, Branding",
    imgClass: "",
    dalayAnimation: "200",
    width: "407",
    height: "549",
  },
];

const Plugin = [
  {
    img: "images/gallery/img_03.jpg",
    title: "Platform Audit",
    meta: "Development, Branding",
    imgClass: "",
    dalayAnimation: "0",
    width: "407",
    height: "549",
  },
  {
    img: "images/gallery/img_05.jpg",
    title: "Designer’s Checklist",
    meta: "Development, Plugin",
    imgClass: "mixL",
    dalayAnimation: "100",
    width: "863",
    height: "542",
  },
  {
    img: "images/gallery/img_07.jpg",
    title: "Our experience WordCamp",
    meta: "Development, Branding",
    imgClass: "",
    dalayAnimation: "200",
    width: "407",
    height: "549",
  },
];

const Design = [
  {
    img: "images/gallery/img_01.jpg",
    title: "The Gang Blue",
    meta: "Development, Design",
    imgClass: "",
    dalayAnimation: "0",
    width: "407",
    height: "549",
  },
  {
    img: "images/gallery/img_04.jpg",
    title: "Medieval origins",
    meta: "Development, Design",
    imgClass: "",
    dalayAnimation: "100",
    width: "407",
    height: "549",
  },
  {
    img: "images/gallery/img_06.jpg",
    title: "Motivation defining Moment",
    meta: "Development, Design",
    imgClass: "",
    dalayAnimation: "200",
    width: "407",
    height: "549",
  },
];

const Branding = [
  {
    img: "images/gallery/img_02.jpg",
    title: "Core WordPress",
    meta: "Development, Plugin",
    imgClass: "",
    dalayAnimation: "0",
    width: "407",
    height: "549",
  },
  {
    img: "images/gallery/img_03.jpg",
    title: "Platform Audit",
    meta: "Development, Branding",
    imgClass: "",
    dalayAnimation: "100",
    width: "407",
    height: "549",
  },
  {
    img: "images/gallery/img_07.jpg",
    title: "Our experience WordCamp",
    meta: "Development, Branding",
    imgClass: "",
    dalayAnimation: "200",
    width: "407",
    height: "549",
  },
  {
    img: "images/gallery/img_08.jpg",
    title: "Lets catch up amd",
    meta: "Development, Branding",
    imgClass: "",
    dalayAnimation: "300",
    width: "407",
    height: "549",
  },
];

const PortfolioTwo = () => {
  return (
    <Gallery>
      <Tabs className="portfolio-container">
        <div className="controls po-control-one text-center mb-90 md-mb-50 mt-90 md-mt-60">
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

        <TabPanel>
          <div className="mixitUp-container  gutter-space-one d-flex flex-wrap">
            {AllPortfolio.map((val, i) => (
              <div
                className={`mix ${val.imgClass}`}
                key={i}
                data-aos="fade-right"
                data-aos-delay={val.dalayAnimation}
              >
                <div className="portfolio-block-two position-relative">
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src={val.img}
                      alt={val.meta}
                      className="w-100 h-100 tran4s img-meta"
                    />
                    <Item
                      original={val.img}
                      thumbnail={val.img}
                      width={val.width}
                      height={val.height}
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
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src={val.img}
                      alt={val.meta}
                      className="w-100 h-100 tran4s img-meta"
                    />
                    <Item
                      original={val.img}
                      thumbnail={val.img}
                      width={val.width}
                      height={val.height}
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
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src={val.img}
                      alt={val.meta}
                      className="w-100 h-100 tran4s img-meta"
                    />
                    <Item
                      original={val.img}
                      thumbnail={val.img}
                      width={val.width}
                      height={val.height}
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
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src={val.img}
                      alt={val.meta}
                      className="w-100 h-100 tran4s img-meta"
                    />
                    <Item
                      original={val.img}
                      thumbnail={val.img}
                      width={val.width}
                      height={val.height}
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
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src={val.img}
                      alt={val.meta}
                      className="w-100 h-100 tran4s img-meta"
                    />
                    <Item
                      original={val.img}
                      thumbnail={val.img}
                      width={val.width}
                      height={val.height}
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
      </Tabs>
    </Gallery>
  );
};

export default PortfolioTwo;
