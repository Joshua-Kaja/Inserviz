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

const InservizForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [skills, setSkills] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission
  };

  return (
    <div>
      {/* <NavBar /> */}
      <div className="container main_container">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name" className="mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="email" className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="contact" className="mb-2">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your contact number"
              value={contact}
              onChange={(event) => setContact(event.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="skills" className="mb-2">
            <Form.Label>Skills</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your skills"
              value={skills}
              onChange={(event) => setSkills(event.target.value)}
              required
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="mt-3"
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
