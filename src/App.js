import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AllRoutes from "./router/AllRoutes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import "photoswipe/dist/photoswipe.css";
import "bootstrap/dist/js/bootstrap";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  window.addEventListener("load", AOS.refresh);

  return (
    <>
      <Helmet>
        <title>RxStrategist</title>
        <meta name="og:image" content="images/assets/main-feature-img-03.png"/>
        <meta property="og:site_name" content="RxStrategist" />
        <meta
          property="og:url"
          content="https://rxstrategist.aicomponent.co"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="RxStrategist: Prescription Verification"
        />
        <meta
          name="keywords"
          content="health, prescription, indication, drug interactions, contraindications, dosage, administration"
        />
        <meta
          name="description"
          content="Reviewing drug interactions, contraindications, dosage, and administration."
        />
        <meta name="description" content="Ensuring accurate patient's prescription" />
      </Helmet>
      {/* End Seo Helmt */}

      <ScrollToTop />
      {/* End Scroll top */}

      <AllRoutes />
    </>
  );
};

export default App;
