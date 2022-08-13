import React from "react";
import PropTypes from "prop-types";
import Card from "./UI/Card";
import "./ReusableForm.css";

function ReusableForm(props) {
  return (
    <div className="new-tea">
      <div className="form-box">
        <Card>
          <form onSubmit={props.formSubmissionHandler}>
            <div className="field1">
              <input
                type="text"
                name="name"
                placeholder="Zuko's Breath of Fire"
              />
              <input type="text" name="origin" placeholder="Fire Nation" />

              <input type="text" name="type" placeholder="Chai Tea" />

              <input type="text" name="price" placeholder="$12.99" />

              <button type="submit">{props.buttonText}</button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
