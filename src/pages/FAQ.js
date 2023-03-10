import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import Footer from "../components/Footer";

const FAQ = (props) => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h1
          className="text-capitalize headers my-5 text-center"
          style={{ color: "dodgerblue" }}
        >
          FAQs
        </h1>
        <Accordion flush open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">What is Inserviz</AccordionHeader>
            <AccordionBody accordionId="1">
              Inserviz is a multi-sided web and mobile application platform that
              connects skilled professionals, known as Inprovs, with people or
              organizations looking for their services, known as Intracts. It's
              an easy and convenient way to find and hire talented professionals
              for a wide range of services.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">
              What is an inprov on Inserviz?
            </AccordionHeader>
            <AccordionBody accordionId="2">
              An inprov is a talented individual who offers a wide range of
              services on the Inserviz platform, including digital services,
              entertainment/events, health services, domestic services, beauty
              services, and artisanal services.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">
              Who can be an inprov on Inserviz?
            </AccordionHeader>
            <AccordionBody accordionId="3">
              Anyone with a skillset they want to monetize can be an inprov on
              Inserviz. This includes students, freelancers, and professionals
              in various fields who are looking to make extra income.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="4">
              What is an intract on Inserviz?
            </AccordionHeader>
            <AccordionBody accordionId="4">
              An intract is a client who hires talented inprovs on the Inserviz
              platform to complete various tasks or projects.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="5">
              Who can be an intract on Inserviz?
            </AccordionHeader>
            <AccordionBody accordionId="5">
              Anyone in need of a service can be an intract on Inserviz. This
              includes individuals, small businesses, and organizations.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="6">
              How do inprovs and intracts connect on Inserviz?
            </AccordionHeader>
            <AccordionBody accordionId="6">
              Inprovs can list their services on the platform, and intracts can
              browse through the available services and contact inprovs directly
              to discuss their project needs.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="7">
              Who can use Inserviz?
            </AccordionHeader>
            <AccordionBody accordionId="7">
              Anyone can use Inserviz! Whether you're an individual looking for
              a skilled professional to complete a project or a business looking
              to hire a team of professionals, Inserviz is designed to help you
              find the right talent for your needs.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="8">
              What types of services are available on Inserviz?
            </AccordionHeader>
            <AccordionBody accordionId="8">
              Inserviz offers a wide range of services in various categories,
              including digital services, entertainment and events, health
              services, domestic services, beauty services, and artisan
              services. From graphic design and content writing to plumbing and
              carpentry, there's a skilled professional available for just about
              any type of service you need.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="9">
              How does Inserviz work?
            </AccordionHeader>
            <AccordionBody accordionId="9">
              As an Intract, you can browse through the available Inprovs on the
              platform, read their profiles and reviews, and select the one that
              meets your needs. Once you've chosen an Inprov, you can contact
              them directly to discuss the project details and negotiate a fair
              price. After the project is completed, you can leave a review of
              the Inprov to help others make informed decisions.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="10">
              How does Inserviz ensure quality services?
            </AccordionHeader>
            <AccordionBody accordionId="10">
              Inserviz requires all Inprovs to submit authentic and traceable
              information about their identity, experience, certifications,
              location, and reviews. This helps to ensure that only qualified
              professionals are listed on the platform. Additionally, the
              platform has a payment assurance service that facilitates payment
              and enhances trust between Inprovs and Intracts.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="11">
              What if I'm not satisfied with the service provided by an Inprov??
            </AccordionHeader>
            <AccordionBody accordionId="11">
              If you're not satisfied with the service provided by an Inprov,
              you can contact Inserviz customer support for assistance. We will
              work with you and the Inprov to resolve any issues and ensure that
              you're happy with the service provided.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="12">
              How does Inserviz help the youth in Africa?
            </AccordionHeader>
            <AccordionBody accordionId="12">
              Inserviz is committed to creating opportunities for the youth
              within the gig economy. By providing a platform for Inprovs to
              offer their services, we're helping to bridge the gap between
              skilled professionals and potential clients. Additionally,
              Inserviz allows NGOs to recruit Inprovs who may want to volunteer
              to gain working experience, which helps to create a pipeline of
              skilled professionals for the future.
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
