import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="origin" placeholder="origin" />
        <input type="text" name="type" placeholder="type" />
        <input type="text" name="price" placeholder="price" />
        <input type="text" name="quantity" placeholder="quantity" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
