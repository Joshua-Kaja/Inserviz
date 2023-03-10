import React from "react";
import NavBar from "../components/NavBar";
import google from "../assets/images/google.svg";
import { ImArrowRight2 } from "react-icons/im";
import { BsCardText } from "react-icons/bs";
import fast from "../assets/images/fast.svg";
import write from "../assets/images/write.svg";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import Typed from "react-typed";
import { useEffect, useRef } from "react";
import template from "../assets/images/template.svg";
import template2 from "../assets/images/template2.svg";
import template3 from "../assets/images/template3.svg";
import template1 from "../assets/images/template1.png";
import line from "../assets/images/line.svg";
import line2 from "../assets/images/line2.svg";
import line3 from "../assets/images/line3.svg";
import "../assets/styles/write.css";

const WriteNow = () => {
  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ["Handy", "Mandy", "Candy", "More Strings"], // Strings to display
  //     // Speed settings, try diffrent values untill you get good results
  //     startDelay: 300,
  //     typeSpeed: 100,
  //     backSpeed: 100,
  //     backDelay: 100,
  //   });

  //   // Destropying
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <div>
      <div className="hero">
        <h1>
          Say ‘goodbye’ to the blank business
          <span className="g-text"> description</span>
        </h1>
        <p className="hero_text">
          Get your <span className="deep">free account today</span>
        </p>
        <div className="signin_btns d-sm-flex align-items-center justify-content-center">
          <button className="btn_getstarted bg_deep d-block w-100 text-nowrap">
            <img src={google} alt="" className="mx-2 google_image" /> Sign up
            with Google
          </button>
          <p className="mx-2 mt-2 gray_text d-sm-block d-none">or</p>
          <button className="btn_getstarted mt-sm-0 mt-2 d-block w-100">
            Sign up with email{" "}
            <span className="mx-2">
              <ImArrowRight2 />
            </span>
          </button>
        </div>
        <p className="mt-4 gray_text">No credit card required</p>
        <div className="line mb-4"></div>
        <Link to="" className="rounded_btn">
          <div className="d-flex align-items-center">
            <div className="circle_white rounded-circle mx-2">
              <img src={fast} alt="" width={30} />
            </div>
            <div className="d-flex flex-column line_height">
              <p className="gray_text text-uppercase small_text">
                For Business Plan Writers
              </p>
              <p className="deep_text">Write Business Plan 10x faster</p>
            </div>
          </div>
          <ImArrowRight2 color="#47BEB9" size={20} className="icon_arrow" />
        </Link>
        <Link to="" className="rounded_btn">
          <div className="d-flex align-items-center">
            <div className="circle_white rounded-circle mx-2">
              <img src={write} alt="" width={30} />
            </div>
            <div className="d-flex flex-column line_height">
              <p className="gray_text text-uppercase small_text">
                For Business Plan Writers
              </p>
              <p className="deep_text">Write Business Plan 10x faster</p>
            </div>
          </div>
          <ImArrowRight2 color="#47BEB9" size={20} className="icon_arrow" />
        </Link>
        <Link to="" className="rounded_btn">
          <div className="d-flex align-items-center">
            <div className="circle_white rounded-circle mx-2">
              <img src={fast} alt="" width={30} />
            </div>
            <div className="d-flex flex-column line_height">
              <p className="gray_text text-uppercase small_text">
                For Business Plan Writers
              </p>
              <p className="deep_text">Write Business Plan 10x faster</p>
            </div>
          </div>
          <ImArrowRight2 color="#47BEB9" size={20} className="icon_arrow" />
        </Link>
      </div>
      <div className="text-center large_para">
        <p>
          Experience the full power of an AI content generator that{" "}
          <span className="large_bold">
            delivers premium results in seconds.
          </span>
        </p>
      </div>
      <div className="pb-5 mb-4">
        <img src={template} alt="" className="d-block mx-auto img_template" />
        <button className="btn_getstarted d-sm-block mx-auto text-nowrap btn_control mt-3 shadow-lg">
          Use this template{" "}
          <span className="mx-2">
            <ImArrowRight2 />
          </span>
        </button>
      </div>
      <div className="large_line_height">
        <h1 className="large_num text-center">1,500,000+</h1>
        <div className="text-center text_with_logo">
          <p>
            professionals & teams choose{" "}
            <Link to="/" className="navbar_brand">
              <img src={logo} alt="" className="mb-2" width={120} />
            </Link>
          </p>
        </div>
        <div>
          <div className="about_large_text text-center">
            <div>Bdesc.ai helps</div>
            <span className="about_large_text_color">
              <Typed
                strings={[
                  "Business Owners",
                  "Startup teams",
                  "Marketing Managers",
                ]}
                typeSpeed={50}
                showCursor={true}
                loop={true}
                smartBackspace={true}
                backSpeed={50}
                backDelay={3000}
                cursorChar="_"
              ></Typed>
            </span>
          </div>
          <div className="text-center results_text">
            Get better results in a fraction of the time. Finally, a writing
            tool you’ll actually use.
          </div>
        </div>
      </div>
      <div className="example_templates ">
        <div className="example_template_card">
          <div className="example_template_card_line"></div>
          <div className="example_template_card_main">
            <div>
              <h1 className="heading_deep">
                3 Examples of Business Plan Templates
              </h1>
              <h1 className="heading_deep_2">Simple Business Plan Template</h1>
              <p className="heading_deep_para">
                [name of business] is a new business that will provide
                [description of problem that the business solves].The business
                will solve this problem by [description of how the business will
                solve the problem].
              </p>
              <p className="heading_deep_para">
                The target market for this product or service is [description of
                target market for this product or service].The business plans to
                reach its target market by [explain how you plan to reach your
                target market and make money].
              </p>
              <div className="">
                <h1 className="heading_deep_3">
                  More:{" "}
                  <Link to="" className="heading_link">
                    Use this free template to create your startup business plan
                    in seconds
                  </Link>
                </h1>
              </div>
            </div>
            <div>
              <h1 className="heading_deep_2">
                Business Plan For A Startup Template
              </h1>
              <p className="heading_deep_para">
                [Company name] is a startup that is focused on solving [problem]
                in the [market].The executive team behind [company] is made up
                of [name], who has been working in the field of [field] for over
                20 years.
              </p>
              <p className="heading_deep_para">
                The team has already begun to build the product, and it will be
                ready to launch in the next few months.The company has plans to
                raise $[amount] in funding, which will be used to scale the
                business and continue to develop new features.The company plans
                to focus on [market] first, then expand into other markets.
              </p>
              <div className="">
                <h1 className="heading_deep_3">
                  More:{" "}
                  <Link to="" className="heading_link">
                    Use this free template to create your startup business plan
                    in seconds
                  </Link>
                </h1>
              </div>
            </div>
            <div>
              <h1 className="heading_deep_2">
                Business Plan For A Food Truck Template
              </h1>
              <p className="heading_deep_para">Hi [Name/Bank],</p>
              <p className="heading_deep_para">
                My name is [name], and I'm the owner of [name of food truck].
                I'm so excited to share with you my food truck business plan.My
                food truck, [name of food truck], is a mobile restaurant that
                sells [food truck menu]. We sell our fare at special events,
                festivals, and at catering gigs.
              </p>
              <p className="heading_deep_para">
                Our target market is people who are looking for healthy and
                delicious food that's not too expensive.I'm starting my food
                truck business because I want to share the joy of eating great
                food with everyone. I've been cooking for years, and I think
                that the world needs more tasty and healthy options for people
                who want to eat clean but don't want to sacrifice taste or
                quality.
              </p>
              <p className="heading_deep_para">
                We're going to promote our business by participating in local
                food truck festivals and getting the word out through social
                media and word of mouth.
              </p>
              <p className="heading_deep_para">
                We'll also offer coupons on our website and send out newsletters
                to our mailing list of loyal customers.In terms of financials,
                we estimate that we'll have expenses of $[number] in year one,
                which includes startup costs, with projected revenue of
                $[number].
              </p>
              <div className="">
                <h1 className="heading_deep_3">
                  More:{" "}
                  <Link to="" className="heading_link">
                    Use this free template to create your startup business plan
                    in seconds
                  </Link>
                </h1>
              </div>
            </div>
            <h1 className="heading_deep">
              How to use Bdesc.ai business plan template
            </h1>
            <p className="heading_deep_para">
              To access the business plan generator, click{" "}
              <Link className="heading_link">here</Link>. You’ll need to be
              logged in to see the template.{" "}
            </p>
            <p className="heading_deep_para mt-5">
              You’ll be directed to a page that prompts you to fill out the main
              points of your template:
            </p>
            <ul className="heading_list">
              <li className="heading_deep_para">Your business name </li>
              <li className="heading_deep_para">
                Describe the problem your business solves{" "}
              </li>
              <li className="heading_deep_para">
                Describe how your business will solve that problem
              </li>
              <li className="heading_deep_para">Target market description</li>
              <li className="heading_deep_para">Revenue model description</li>
            </ul>
          </div>
        </div>
      </div>
      <h1 className="text-center deep_header">How it works</h1>
      <div className="container">
        <div className="d-sm-flex justify-content-center align-items-center">
          <div className="template-bg">
            <img src={template2} alt="" className="img-fluid" width={500} />
          </div>
          <div className="d-flex p-sm-none py-4 align-items-start justify-content-start mx-4">
            <div className="rounded-circle num_circle d-flex justify-content-center align-items-center">
              1
            </div>
            <div className="d-flex flex-column justify-content-start align-items-start">
              <h1 className="rounded_text">Enter what you need to write</h1>
              <p className="mx-3">
                Choose from emails, social posts, long-form blog posts, and
                more!
              </p>
            </div>
          </div>
        </div>
        <img
          src={line}
          alt=""
          className="mx-auto d-sm-block d-none my-3"
          width={500}
        />
        <div className="d-sm-flex flex-sm-row-reverse justify-content-center align-items-center">
          <div className="template-bg">
            <img src={template3} alt="" className="img-fluid" width={500} />
          </div>
          <div className="d-flex p-sm-none py-4 align-items-start justify-content-start mx-4">
            <div className="rounded-circle num_circle d-flex justify-content-center align-items-center">
              2
            </div>
            <div className="d-flex flex-column justify-content-start align-items-start">
              <h1 className="rounded_text">Enter what you need to write</h1>
              <p className="mx-3">
                Enter a few sentences about your project/campaign.
              </p>
            </div>
          </div>
        </div>
        <img
          src={line2}
          alt=""
          className="mx-auto d-sm-block d-none my-3"
          width={500}
        />
        <div className="d-sm-flex justify-content-center align-items-center">
          <div className="template-bg">
            <img src={template1} alt="" className="img-fluid" width={500} />
          </div>
          <div className="d-flex p-sm-none py-4 align-items-start justify-content-start mx-4">
            <div className="rounded-circle num_circle d-flex justify-content-center align-items-center">
              3
            </div>
            <div className="d-flex flex-column justify-content-start align-items-start">
              <h1 className="rounded_text">Enter what you need to write</h1>
              <p className="mx-3">
                Choose from emails, social posts, long-form blog posts, and
                more!
              </p>
            </div>
          </div>
        </div>
        <img
          src={line3}
          alt=""
          className="mx-auto d-sm-block d-none my-3"
          width={500}
        />
        <div className="d-sm-flex justify-content-center align-items-center flex_4">
          {/* <div className="template-bg">
            <img src={template1} alt="" className="img-fluid" width={500} />
          </div> */}
          <div className="d-flex p-sm-none py-4 align-items-start justify-content-start mx-4">
            <div className="rounded-circle d-sm-none d-block num_circle d-flex justify-content-center align-items-center mx-auto">
              4
            </div>
            <div className="d-flex flex-column justify-content-start align-items-start  mx-auto">
              <h1 className="rounded_text">Enter what you need to write</h1>
              <p className="mx-3">
                Use Bdesc.ai’s editor to rewrite paragraphs and polish up
                sentences. Then, just copy and paste the work wherever you need
                it.
              </p>
            </div>
          </div>
        </div>

        <div className="lineheight">
          <h1 className="text-center deep_header_text">Ready to level-up?</h1>
          <p className="text-center mx-auto deep_header_text_para">
            Write 10x faster, engage your audience, & never struggle with the
            blank page again.
          </p>
          <div className="pb-5 mb-4 mt-4">
            <button className="btn_getstarted d-sm-block mx-auto text-nowrap btn_control mt-3 shadow-lg">
              Get Started for Free{" "}
              <span className="mx-2">
                <ImArrowRight2 />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteNow;
