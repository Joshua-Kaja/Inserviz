import React from "react";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div>
      <h1
        className="text-capitalize headers my-5 text-center"
        style={{ color: "dodgerblue" }}
      >
        ABOUT US
      </h1>
      <p className="home_para mb-5">
        Inserviz is a platform connecting African youth with gig economy
        opportunities to monetize their skills and services. We empower informal
        sector youth to connect with clients and short-term contracts, and
        enable NGOs to recruit volunteers for social impact. Our diverse
        community includes verified service providers in digital, entertainment,
        health, domestic, beauty, and artisanal services. We offer a payment
        assurance service to ensure secure and seamless transactions. Join us
        today to transform the gig economy and empower African youth.
      </p>
      <Footer />
    </div>
  );
};

export default AboutUs;
