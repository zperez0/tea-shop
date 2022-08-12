import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewTeaForm(props) {
  function handleNewTeaFormSubmission(event) {
    event.preventDefault();
    props.onNewTeaCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      type: event.target.type.value,
      price: parseInt(event.target.price.value),
      quantity: parseInt(event.target.quantity.value),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewTeaFormSubmission}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="origin" placeholder="origin" />
        <input type="text" name="type" placeholder="type" />
        <input type="text" name="price" placeholder="price" />
        <input type="text" name="quantity" placeholder="quantity" />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

NewTeaForm.prototype = {
  onNewTeaCreation: PropTypes.func
};

export default NewTeaForm;
