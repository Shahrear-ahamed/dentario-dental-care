import React from "react";
import { Card } from "react-bootstrap";

const SingleService = ({ props }) => {
  const { desc, name, price, img } = props;
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <Card>
        <Card.Img
          variant="top"
          src={img}
          alt={name}
          className="w-100 rounded-top"
        />
        <Card.Body>
          <Card.Title className="fs-3">{name}</Card.Title>
          <Card.Text style={{ minHeight: "120px" }}>
            {desc.slice(0, 150)} ...
          </Card.Text>
          <Card.Title>${price}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <button className="btn btn-primary">Book Now</button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default SingleService;
