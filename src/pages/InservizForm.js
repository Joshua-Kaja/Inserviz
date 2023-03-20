// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return <div className="App">INSERVIZ</div>;
// }

// export default App;

import React, { useState } from "react";
import { Form, Button, Toast } from "react-bootstrap";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import logo from "../assets/images/logo.png";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import CopyToClipboard from "react-copy-to-clipboard";

const InservizForm = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
  };

  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO: Handle form submission
    const remove = toast.loading("Loading...");
    const response = await axios.post(
      "https://inserviz-381216.uc.r.appspot.com/api/v1/forms/register",
      {
        ...details,
      }
    );

    if (response.data.status === 400) {
      toast.error("You are already regsitered");
      toast.dismiss(remove);
    } else {
      console.log(response);
      setIsOpen(true);
      toast.dismiss(remove);
      setDetails({
        ...details,
        name: "",
        phone: "",
        email: "",
        skills: "",
      });
    }
  };

  const [copy, setCopy] = useState(false);

  return (
    <div>
      {/* <NavBar /> */}
      <div className="container main_container">
        <Toaster />
        <Form
          onSubmit={handleSubmit}
          className="card rounded border-0 shadow mx-auto p-5 m-3 form_card"
        >
          <h4
            className="text-primary text-center"
            style={{ fontWeight: "bolder" }}
          >
            Become an Inprov
          </h4>
          <div className="small text-center text-secondary">
            Inprovs are the talents on{" "}
            <img src={logo} alt="" width={50} className="" />{" "}
          </div>
          <Form.Group controlId="name" className="mb-2">
            <Form.Label className="text-secondary">Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              value={details.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="email" className="mb-2">
            <Form.Label className="text-secondary">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              value={details.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="contact" className="mb-2">
            <Form.Label className="text-secondary">Contact</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              placeholder="Enter your contact number"
              value={details.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="skills" className="mb-2">
            <Form.Label className="text-secondary">Skills</Form.Label>
            <Form.Control
              as="textarea"
              type="textarea"
              name="skills"
              rows={3}
              placeholder="Enter your skills. Seperate each skill with comma (,) eg. Frontend developer, Photographer, Graphics designer"
              value={details.skills}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="mt-3 border-0 btn-lg"
            style={{ backgroundColor: "dodgerblue" }}
          >
            Submit
          </Button>
        </Form>
        <Modal isOpen={isOpen} centered>
          <ModalHeader
            toggle={() => setIsOpen(false)}
            className="text-secondary"
          >
            Success ✅
          </ModalHeader>
          <ModalBody className="d-flex flex-column justify-content-center align-items-center">
            <p className="text-secondary text-center w-75">
              Congratulations on being an early adopter of a whole new gig
              experience 🎉🎉🎉
            </p>
            <div>
              <CopyToClipboard
                text="https://inserviz.com/form"
                onCopy={(text) => {
                  setCopy(!copy);
                }}
              >
                <button className="btn btn-primary">
                  {copy ? "Link copied ✅" : "Share with friends"}
                </button>
              </CopyToClipboard>
            </div>
          </ModalBody>
        </Modal>
      </div>
      <Footer />
    </div>
  );
};

export default InservizForm;
