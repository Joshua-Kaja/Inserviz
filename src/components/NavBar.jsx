import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { BsList, BsFillTriangleFill } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { Collapse } from "reactstrap";
import { useState } from "react";
const NavBar = () => {
  const [isOpen, setIsopen] = useState(false);

  const handleClick = () => {
    setIsopen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container d-flex justify-content-between align-items-center flex_height">
        <Link to="/" className="navbar_brand">
          <img src={logo} alt="" className="logo" />
        </Link>
        <ul className="navbar_items">
          {/* <li className="nav_links">
            <Link to="/" className="links">
              About Us{" "} */}
          {/* <span>
                <FiChevronDown />
              </span> */}
          {/* </Link>
            </li> */}
          {/* <div className="triangle">
              <BsFillTriangleFill />
            </div> */}

          {/* <ul className="nav_below shadow-lg">
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Financial Services
                </Link>
              </li>
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Consumer Goods
                </Link>
              </li>
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Investment Funds
                </Link>
              </li>
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Technology
                </Link>
              </li>
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Real Estate
                </Link>
              </li>
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Healthcare
                </Link>
              </li>
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Media
                </Link>
              </li>
            </ul> */}

          {/* <li className="nav_links">
            <Link href="/" className="links">
              Services
              <span>
                <FiChevronDown />
              </span>
            </Link>
            <div className="triangle">
              <BsFillTriangleFill />
            </div>
            <ul className="nav_below shadow-lg">
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Investor Materials
                </Link>
              </li>
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Startegic Advisory
                </Link>
              </li>
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Market Research
                </Link>
              </li>
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Legal Services
                </Link>
              </li>
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Fractional CFO Services
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav_links">
            <Link href="/" className="links">
              Business Plans
              <span>
                <FiChevronDown />
              </span>
            </Link>
            <div className="triangle">
              <BsFillTriangleFill />
            </div>
            <ul className="nav_below shadow-lg">
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Business Financing
                </Link>
              </li>
              <li className=" nav_below__link_item">
                <Link to="" className="nav_below__links">
                  Startegy
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav_links">
            <Link href="/" className="links">
              Pitch Desk
            </Link>
          </li> */}
        </ul>

        <div className="get_started">
          <NavLink to="/faqs" className="navbar_login">
            FAQs
          </NavLink>
          <NavLink to="/about-us" className="navbar_login">
            About Us
          </NavLink>
          <NavLink to="" className="navbar_login">
            Contact Us
          </NavLink>
          <NavLink to="" className="navbar_login">
            Blog
          </NavLink>
          <Link
            to="/form"
            className="btn_getstarted text-decoration-none text-white px-5"
          >
            Become an Inprov
          </Link>
        </div>
        <div className="d-sm-none">
          <IoMenu size={20} onClick={handleClick} />
        </div>
      </div>
      <Collapse isOpen={isOpen}>
        <nav className="collapse_card card border-0 mt-3 d-lg-none">
          <div className="collapse_container">
            <div className="d-flex justify-content-between align-items-center">
              <Link to="" className="link_item">
                Template
              </Link>
              <FiChevronDown />
            </div>
          </div>
        </nav>
      </Collapse>
    </nav>
  );
};

export default NavBar;
