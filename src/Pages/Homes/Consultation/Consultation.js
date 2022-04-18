import React from "react";
import { Button, Form, Row } from "react-bootstrap";
import "./Consultation.css";

const Consultation = () => {
  return (
    <div id="appointment" className="consultation py-5">
      <div className="container text-white mb-4">
        <h2 className="text-center">Request a Consultation</h2>
        <div className="bar"></div>
        <div style={{ maxWidth: "900px" }} className="my-5 mx-auto">
          <Form className=" form-transperent">
            <Row className="mb-3">
              <Form.Group className="col" controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group className="col" controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="email" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group className="col" controlId="formGridEmail">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="number" placeholder="Mobile" />
              </Form.Group>

              <Form.Group className="col" controlId="formGridState">
                <Form.Label>Choose Your Scheldule</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>9 AM to 10 AM</option>
                  <option>12 AM to 1 PM</option>
                  <option>6 PM to 8 PM</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                style={{ resize: "none" }}
                as="textarea"
                rows={5}
                placeholder="Message"
              />
            </Form.Group>

            <div className="d-flex justify-content-center">
              {" "}
              <Button variant="primary" type="submit">
                Get Consultation
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
