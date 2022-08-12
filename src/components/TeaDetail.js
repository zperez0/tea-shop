import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props) {
  const { tea, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>🍵Tea Detail🍵</h1>
      <h3>{tea.name}</h3>
      <p>{tea.origin}</p>
      <p>{tea.type}</p>
      <p>${tea.price}</p>
      <p>{tea.quantity} oz</p>
      <button onClick={props.onClickingEdit}>🔄Update Tea🔄</button>
      <br />
      <br />
      <button onClick={() => onClickingDelete(tea.id)}>❌Delete Tea❌</button>
      <hr />
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default TeaDetail;
