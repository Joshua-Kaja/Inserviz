import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import work from "../assets/images/work.svg";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="container">
        <div className="blog_container mx-auto">
          <Link to="/blog-post" className="blog_img border rounded p-3">
            <img
              src={work}
              alt=""
              width={500}
              className="img-fluid d-block mx-auto"
            />
          </Link>
          <Link
            to="/blog-post"
            className="text-decoration-none mx-5 "
          >
            <h1 className="headers-small w-75 " style={{ color: "#160647" }}>
              Creating Opportunities for the Youth in the Gig Economy
            </h1>
            <b>By Inserviz Team</b> |{" "}
            <span>
              {new Date().toLocaleDateString("en-US", { dateStyle: "medium" })}
            </span>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
