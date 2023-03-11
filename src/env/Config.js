import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import AboutUs from "../pages/AboutUs";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import InservizForm from "../pages/InservizForm";
import Login from "../pages/Login";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import WriteNow from "../pages/WriteNow";

const Config = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/write-now" element={<WriteNow />} />
        <Route exact path="/form" element={<InservizForm />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/faqs" element={<FAQ />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blog-post" element={<BlogPost />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Config;
