import React from "react";
import PropTypes from "prop-types";
import Card from "./UI/Card";

function TeaDetail(props) {
  const { tea, onClickingDelete, onClickingPurchase, onClickingEdit } = props;

  return (
    <React.Fragment>
      <div className="detail">
        <Card>
          <h1>Tea Detail</h1>
          <h2>{tea.name}</h2>
          <p>{tea.origin}</p>
          <p>{tea.type}</p>
          <p>${tea.price} per oz</p>
          <p>
            Availability: {""}
            {tea.quantity > 0 ? tea.quantity + " oz" : "Out of Stock"}
          </p>
          <div className="btn-detail">
            <button onClick={onClickingEdit}>Update Tea</button>
            <button onClick={() => onClickingDelete(tea.id)}>Delete Tea</button>
            <button onClick={() => onClickingPurchase(tea.id)}>Purchase</button>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingPurchase: PropTypes.func,
};

export default TeaDetail;
