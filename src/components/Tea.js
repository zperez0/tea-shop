import React from "react";
import PropTypes from "prop-types";

function Tea(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.origin}</p>
      <p>{props.type}</p>
      <p>${props.price}</p>
      <p>{props.quantity} oz</p>
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
};

export default Tea;
