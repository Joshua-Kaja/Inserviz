import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { ImLinkedin, ImLinkedin2 } from "react-icons/im";
import { RiInstagramFill, RiYoutubeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="example_templates mt-4">
      <div>
        <img src={logo} alt="" width={100} className="mx-auto d-block" />
      </div>
      <p className="text-center">
        Inserviz Inc &copy; {new Date().getFullYear()}
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <Link to="/privacy-policy" className="text-decoration-none small">
          Privacy Policy
        </Link>
        <div className="d-flex justify-content-center align-items-center mx-3">
          <a
            href="https://www.facebook.com/profile.php?id=100090643706257&is_tour_completed=true"
            target="_blank"
            className="mx-2"
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.linkedin.com/company/inserviz-inc/"
            target="_blank"
            className="mx-2"
          >
            <ImLinkedin2 />
          </a>
          <a
            href="https://twitter.com/inserviz_"
            className="mx-2"
            target="_blank"
          >
            <BsTwitter />
          </a>
          <a
            href="https://instagram.com/inserviz?igshid=YmMyMTA2M2Y="
            className="mx-2"
            target="_blank"
          >
            <RiInstagramFill />
          </a>
          <a
            href="https://www.youtube.com/@inservizinc"
            className="mx-2"
            target="_blank"
          >
            <RiYoutubeFill />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
