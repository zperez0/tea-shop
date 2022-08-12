import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";

function TeaList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.teaList.map((tea) => (
        <Tea
          whenTeaClicked={props.onTeaSelection}
          name={tea.name}
          origin={tea.origin}
          type={tea.type}
          price={tea.price}
          quantity={tea.quantity}
          id={tea.id}
          key={tea.id}
        />
      ))}
    </React.Fragment>
  );
}

TeaList.prototypes = {
  teaList: PropTypes.array,
  onTeaSelection: PropTypes.func,
};

export default TeaList;
