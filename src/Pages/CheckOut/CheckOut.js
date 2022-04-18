import React from "react";
import { Button, Form, Row } from "react-bootstrap";

const CheckOut = () => {
  return (
    <section className="div-size container">
      <div style={{ maxWidth: "900px" }} className="my-5 mx-auto">
        <h2 className="text-center">Check out now</h2>
        <div className="bar"></div>
        <Form className="mt-4">
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
              <Form.Label>Add Your Dental Provlem </Form.Label>
              <Form.Select defaultValue="Teeth Whitening">
                <option>Teeth Whitening</option>
                <option>Consmetic Dentistry</option>
                <option>Root Canan Therepay</option>
                <option>Dental Implants</option>
                <option>Oral Surgery</option>
                <option>Kids Dentist</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              style={{ resize: "none" }}
              as="textarea"
              rows={5}
              placeholder="Write your problem in detai"
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
    </section>
  );
};

export default CheckOut;
