import React from "react";
import PropTypes from "prop-types";
import Card from "./UI/Card";

function Tea(props) {
  return (
    <React.Fragment>
      <div className="tea-list">
        <Card>
          <div onClick={() => props.whenTeaClicked(props.id)}>
            <h3>
              {props.name} - {props.type}
            </h3>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func,
};

export default Tea;
