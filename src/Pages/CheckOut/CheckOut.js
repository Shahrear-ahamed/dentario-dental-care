import React from "react";
import { Button, Form, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

const CheckOut = () => {
  const checkOutNow = (e) => {
    e.preventDefault();

    // get data
    const name = e.target.name.value;
    const email = e.target.email.value;
    const number = e.target.number.value;
    const message = e.target.message.value;

    // error
    const notifyError = (data) => toast.error(data);
    const toastSuccess = (data) => toast.success(data);

    // send data
    if (name && email && number && message) {
      toastSuccess("Booked Your serial, We will call you leter");
    } else {
      notifyError("Please enter all data");
    }

  };

  return (
    <section className="div-size container">
      <div style={{ maxWidth: "900px" }} className="my-5 mx-auto">
        <h2 className="text-center">Check out now</h2>
        <div className="bar"></div>
        <Form onSubmit={checkOutNow} className="mt-4">
          <Row className="mb-3">
            <Form.Group className="col" controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Name"
                required
              />
            </Form.Group>

            <Form.Group className="col" controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="email"
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group className="col" controlId="formGridEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                name="number"
                type="number"
                placeholder="Mobile"
                required
              />
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
              name="message"
              placeholder="Write your problem in detai"
              required
            />
          </Form.Group>

          <div className="d-flex justify-content-center">
            {" "}
            <Button variant="primary" type="submit">
              Book Now
            </Button>
          </div>
        </Form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default CheckOut;
