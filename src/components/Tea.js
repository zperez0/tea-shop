import React from "react";

function Tea(props){

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

export default Tea;