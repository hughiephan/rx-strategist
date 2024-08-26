import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";

const TabListContent = ["All", "Development", "Plugin", "Desing", "Branding"];

const AllPortfolioItem = [
  {
    img: "images/gallery/img_15.jpg",
    title: "The Gang Blue",
    meta: "Development, Design",
    dalayAnimation: "",
  },
  {
    img: "images/gallery/img_16.jpg",
    title: "Core WordPress",
    meta: "Development, Plugin",
    dalayAnimation: "100",
  },
  {
    img: "images/gallery/img_17.jpg",
    title: "Platform Audit",
    meta: "Development, Branding",
    dalayAnimation: "200",
  },
  {
    img: "images/gallery/img_18.jpg",
    title: "Medieval origins",
    meta: "Development, Design",
    dalayAnimation: "0",
  },
  {
    img: "images/gallery/img_19.jpg",
    title: "Designer’s Checklist",
    meta: "Development, Plugin",
    dalayAnimation: "100",
  },
  {
    img: "images/gallery/img_20.jpg",
    title: "Motivation defining Moment",
    meta: "Development, Design",
    dalayAnimation: "200",
  },
  {
    img: "images/gallery/img_21.jpg",
    title: "Experience WordCamp",
    meta: "Development, Design",
    dalayAnimation: "0",
  },
  {
    img: "images/gallery/img_22.jpg",
    title: "Lets catch amd",
    meta: "Development, Design",
    dalayAnimation: "100",
  },
  {
    img: "images/gallery/img_23.jpg",
    title: "Experience WordCamp",
    meta: "Development, Branding",
    dalayAnimation: "200",
  },
];
const Development = [
  {
    img: "images/gallery/img_16.jpg",
    title: "Core WordPress",
    meta: "Development, Plugin",
    dalayAnimation: "100",
  },
  {
    img: "images/gallery/img_18.jpg",
    title: "Medieval origins",
    meta: "Development, Design",
    dalayAnimation: "0",
  },
  {
    img: "images/gallery/img_22.jpg",
    title: "Lets catch amd",
    meta: "Development, Design",
    dalayAnimation: "100",
  },
];

const Plugin = [
  {
    img: "images/gallery/img_17.jpg",
    title: "Platform Audit",
    meta: "Development, Branding",
    dalayAnimation: "200",
  },
  {
    img: "images/gallery/img_19.jpg",
    title: "Designer’s Checklist",
    meta: "Development, Plugin",
    dalayAnimation: "100",
  },
  {
    img: "images/gallery/img_21.jpg",
    title: "Experience WordCamp",
    meta: "Development, Design",
    dalayAnimation: "0",
  },
  {
    img: "images/gallery/img_23.jpg",
    title: "Experience WordCamp",
    meta: "Development, Branding",
    dalayAnimation: "200",
  },
];

const Design = [
  {
    img: "images/gallery/img_15.jpg",
    title: "The Gang Blue",
    meta: "Development, Design",
    dalayAnimation: "",
  },
  {
    img: "images/gallery/img_18.jpg",
    title: "Medieval origins",
    meta: "Development, Design",
    dalayAnimation: "0",
  },

  {
    img: "images/gallery/img_20.jpg",
    title: "Motivation defining Moment",
    meta: "Development, Design",
    dalayAnimation: "200",
  },
];

const Branding = [
  {
    img: "images/gallery/img_16.jpg",
    title: "Core WordPress",
    meta: "Development, Plugin",
    dalayAnimation: "100",
  },
  {
    img: "images/gallery/img_17.jpg",
    title: "Platform Audit",
    meta: "Development, Branding",
    dalayAnimation: "200",
  },
  {
    img: "images/gallery/img_21.jpg",
    title: "Experience WordCamp",
    meta: "Development, Design",
    dalayAnimation: "0",
  },
];

const PortfolioFour = () => {
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
            {AllPortfolioItem.map((val, i) => (
              <div
                className="mix"
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
                      width={407}
                      height={496}
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
            {Development.map((val) => (
              <div
                className={`mix ${val.imgClass}`}
                key={val.id}
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
                      width={407}
                      height={549}
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
            {Plugin.map((val) => (
              <div
                className={`mix ${val.imgClass}`}
                key={val.id}
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
                      width={407}
                      height={549}
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
            {Design.map((val) => (
              <div
                className={`mix ${val.imgClass}`}
                key={val.id}
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
                      width={407}
                      height={549}
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
            {Branding.map((val) => (
              <div
                className={`mix ${val.imgClass}`}
                key={val.id}
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
                      width={407}
                      height={549}
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

export default PortfolioFour;
