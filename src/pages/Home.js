import React from "react";
import "../assets/styles/home.css";
import google from "../assets/images/google.svg";
import { ImArrowRight2 } from "react-icons/im";
import { RiCustomerService2Fill } from "react-icons/ri";
import { ImInsertTemplate } from "react-icons/im";
import { FaBusinessTime } from "react-icons/fa";
import { SiMicrostrategy } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { FaPeopleArrows } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import logo from "../assets/images/logo.png";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <h1 className="text-capitalize">
          Be part of an Innovative <span className="g-text">Gig Economy</span>
        </h1>
        <h1 className="text-capitalize my-4">Launching Soon...</h1>
        <p className="home_para my-5">
          Inserviz is working on bringing Gig and Volunteering opportunities to
          everyone. If you are reading this, it means you are part of the early
          adopters who will be commercializing their skills on this platform.
          Fill the forms linked below, and we would be in touch, Gracias!.
        </p>
        <div className="signin_btns pb-5 d-sm-flex align-items-center justify-content-center">
          <a
            href="https://chat.whatsapp.com/LBza0Rx0BrFLtTsqtBVTQa"
            target="_blank"
            className="btn_getstarted  bg_deep d-block w-100 text-nowrap text-decoration-none"
          >
            <RiCustomerService2Fill className="mx-2" size={20} />
            Join Our Community
          </a>
          <p className="mx-2 mt-2 gray_text d-sm-block d-none"></p>
          <Link
            to="/form"
            className="btn_getstarted text-nowrap mt-sm-0 mt-2 d-block w-100 text-decoration-none"
          >
            {/* <ImInsertTemplate className="mx-2" size={30} /> */}
            Become an Inprov{" "}
            <span className="mx-2">
              <ImArrowRight2 size={20} />
            </span>
          </Link>
        </div>
      </div>

      <div className="">
        <h1 className="text-center headers mb-3">Service Categories</h1>
        <p className="home_para">
          Bdesc.ai Business Plans offers a variety of services to help companies
          navigate market research, strategic planning, and the capital raising
          process.
        </p>
        <div className="container">
          <div className="row gy-3 mt-5">
            <Link to="" className="col-sm-4 text-decoration-none cards">
              <div className="cards_container">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="rounded-circle">
                    <SiMicrostrategy size={30} style={{ color: "#47BEB9" }} />
                  </div>
                  <div className="home_card__text">
                    <h6>Digital Services</h6>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Link to="" className="home_card_link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="" className="col-sm-4 text-decoration-none cards">
              <div className="cards_container">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="rounded-circle">
                    <FaBusinessTime size={30} style={{ color: "#47BEB9" }} />
                  </div>
                  <div className="home_card__text">
                    <h6>Artisans</h6>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Link to="" className="home_card_link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="" className="col-sm-4 text-decoration-none cards">
              <div className="cards_container">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="rounded-circle">
                    <GiTeacher size={30} style={{ color: "#47BEB9" }} />
                  </div>
                  <div className="home_card__text">
                    <h6>Beauty Services</h6>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Link to="" className="home_card_link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="row gy-3 mt-sm-5">
            <Link to="" className="col-sm-4 text-decoration-none cards">
              <div className="cards_container">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="rounded-circle">
                    <GiTeacher size={30} style={{ color: "#47BEB9" }} />
                  </div>
                  <div className="home_card__text">
                    <h6>Health & Fitness</h6>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Link to="" className="home_card_link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="" className="col-sm-4 text-decoration-none cards">
              <div className="cards_container">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="rounded-circle">
                    <FaBusinessTime size={30} style={{ color: "#47BEB9" }} />
                  </div>
                  <div className="home_card__text">
                    <h6>Domestic Services</h6>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Link to="" className="home_card_link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="" className="col-sm-4 text-decoration-none cards">
              <div className="cards_container">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="rounded-circle">
                    <SiMicrostrategy size={30} style={{ color: "#47BEB9" }} />
                  </div>
                  <div className="home_card__text">
                    <h6>Entertainment/Events</h6>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Link to="" className="home_card_link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="brands_container">
            <div className="line mx-auto move_down"></div>
            <h1 className="text-center headers mb-3 w-50 mx-auto">
              Define your own terms! One Gig at a time
            </h1>
            <p className="home_para mt-5">
              High discoverability means more income for you, Inserviz helps you
              reach a wider audience.
            </p>
            {/* <div className="row mt-5">
              <div className="col-sm-4">
                <div className="brand_card_container">
                  <div className="rounded-circle mx-auto mb-5">
                    <HiOutlineUserGroup
                      size={30}
                      style={{ color: "#47BEB9" }}
                    />
                  </div>
                  <h3 className="text-center brand_card_header mb-3 text-uppercase">
                    Expert Team
                  </h3>
                  <p className="text-center brand_card__para">
                    The specialized team at Pro Business Plans is more
                    professional and experienced than any other company. All of
                    the members have a background in investment banking.
                  </p>
                  <div className="d-flex justify-content-0center align-items-center">
                    <Link to="" className="brand_btn">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="brand_card_container">
                  <div className="rounded-circle mx-auto mb-5">
                    <AiOutlineFileSearch
                      size={30}
                      style={{ color: "#47BEB9" }}
                    />
                  </div>
                  <h3 className="text-center brand_card_header mb-3 text-uppercase">
                    RELIABLE RESEARCH
                  </h3>
                  <p className="text-center brand_card__para">
                    The specialized team at Pro Business Plans is more
                    professional and experienced than any other company. All of
                    the members have a background in investment banking.
                  </p>
                  <div className="d-flex justify-content-0center align-items-center">
                    <Link to="" className="brand_btn">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="brand_card_container">
                  <div className="rounded-circle mx-auto mb-5">
                    <TbEdit size={30} style={{ color: "#47BEB9" }} />
                  </div>
                  <h3 className="text-center brand_card_header mb-3 text-uppercase">
                    FULLY CUSTOM
                  </h3>
                  <p className="text-center brand_card__para">
                    The specialized team at Pro Business Plans is more
                    professional and experienced than any other company. All of
                    the members have a background in investment banking.
                  </p>
                  <div className="d-flex justify-content-0center align-items-center">
                    <Link to="" className="brand_btn">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className="example_templates mt-4">
          
          <div>
            <img src={logo} alt="" width={100} className="mx-auto d-block" />
          </div>
          <p className="text-center">
            Inserviz Inc &copy; {new Date().getFullYear()}
          </p>
        </div> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
