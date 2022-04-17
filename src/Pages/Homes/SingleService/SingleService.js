import React from "react";

const SingleService = ({ props }) => {
  console.log(props);
  const { id, desc, name, price, img } = props;
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <h2>single service</h2>
    </div>
  );
};

export default SingleService;
