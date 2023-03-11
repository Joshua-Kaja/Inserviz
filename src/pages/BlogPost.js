import React from "react";
import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/shotman.jpg";
import Footer from "../components/Footer";

const BlogPost = () => {
  return (
    <>
      <div className="container">
        <h1 className="headers text-sm-center">
          Breaking Barriers to Employment
        </h1>
        <h6 className="headers-small text-center w-50 mx-auto">
          Inserviz Paves the Way for Ghanaian Youth to Monetize Their Skills in
          the Gig Economy.
        </h6>
        <div className="blog_container my-5">
          <img
            src={blog1}
            alt=""
            className="img-fluid mx-auto d-block img_container rounded"
          />
        </div>
        <h5 className="headers-small">Introduction:</h5>
        <p>
          The high rate of unemployment in most African communities is a major
          challenge, worsened by the <b>COVID-19</b> pandemic. Ghana is not an
          exception to this problem, as many young people struggle to find
          employment opportunities. However, the youth are resourceful, and with
          the right platform, they can leverage their skills to generate income.
          This is where Inserviz comes in - a multi-sided web and mobile
          application platform for transacting services. In this blog post, we
          will discuss the unemployment rate in Ghana, the high mobile phone
          usage rate, and the need for a platform like Inserviz to create
          opportunities for the youth.
        </p>
        <h5 className="headers-small">Unemployment Rate in Ghana:</h5>
        <div className="row mb-5">
          <div className="col">
            <p>
              The high rate of unemployment in most African communities is a
              major challenge, worsened by the <b>COVID-19</b> pandemic. Ghana
              is not an exception to this problem, as many young people struggle
              to find employment opportunities. However, the youth are
              resourceful, and with the right platform, they can leverage their
              skills to generate income. This is where Inserviz comes in - a
              multi-sided web and mobile application platform for transacting
              services. In this blog post, we will discuss the unemployment rate
              in Ghana, the high mobile phone usage rate, and the need for a
              platform like Inserviz to create opportunities for the youth.
            </p>
          </div>
          <div className="col">
            <img
              width={500}
              src={blog2}
              alt=""
              className=" rounded"
              style={{
                aspectRatio: "3 / 2",
                objectFit: "cover",
                // mixBlendMode: "darken",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
        <h5 className="headers-small">Mobile Phone Usage:</h5>
        <p>
          The use of mobile phones is widespread in Ghana, with over 39 million
          active mobile phone connections in the country, according to the
          National Communications Authority. This presents an opportunity for
          young people to leverage technology to market their skills and
          services. Inserviz recognizes this opportunity and has created a
          platform that allows young people to offer their services online,
          making it easier for them to reach a wider audience.
        </p>
        <h5 className="headers-small">The Need for Inserviz:</h5>
        <p>
          Inserviz provides a platform for young people to showcase their skills
          and connect with potential clients. The platform is open to various
          service categories, including digital services, entertainment/events,
          health services, domestic services, beauty services, and artisans.
          This allows young people with various skill sets to offer their
          services and generate income. Inserviz also provides an opportunity
          for NGOs to recruit young people as volunteers, helping them gain
          working experience while contributing to the NGOs' impact. This
          creates a win-win situation for both parties.
        </p>
        <h5 className="headers-small">Conclusion:</h5>
        <p>
          Inserviz is a platform that addresses the unemployment challenge in
          Ghana by creating opportunities for the youth in the gig economy. With
          a high mobile phone usage rate, young people can leverage technology
          to market their skills and services. Inserviz provides a platform that
          allows them to do so, connecting them with potential clients and
          creating opportunities for growth. If you are a young person in Ghana
          with a skill to offer, or a client looking for a service provider,
          visit Inserviz and join our community today!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
