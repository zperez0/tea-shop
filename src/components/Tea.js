import React from "react";
import PropTypes from "prop-types";

function Tea(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenTeaClicked(props.id)}>
        <h3>{props.name}</h3>
      </div>
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func,
};

export default Tea;
