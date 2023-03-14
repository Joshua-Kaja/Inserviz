// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return <div className="App">INSERVIZ</div>;
// }

// export default App;

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import logo from "../assets/images/logo.png";
import axios from "axios";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission
    axios
      .post("http://localhost:3001/api/v1/forms/get-registered-form", {
        ...details,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {/* <NavBar /> */}
      <div className="container main_container">
        <Form
          onSubmit={handleSubmit}
          className="card rounded border-0 shadow w-50 mx-auto p-5 m-3"
        >
          <h4
            className="text-primary text-center"
            style={{ fontWeight: "bolder" }}
          >
            <img src={logo} alt="" width={100} className="mb-1" /> Become an
            inprov
          </h4>
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
              placeholder="Enter your skills. Seperate each skill with comma (,) eg. Frontend Dev, Backend Dev"
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
      </div>
      <Footer />
    </div>
  );
};

export default InservizForm;
