import React from "react";
import Tea from "./Tea";

function TeaList() {
  return (
    <React.Fragment>
    <Tea
      name="Zuko's breath of fire"
      origin="fire nation"
      type="chai tea"
      price={12.99}
      quantity={130}
    />
    <Tea
    name="Appa sip sip"
    origin="eastern air temple"
    type="chamomile tea"
    price={12.99}
    quantity={130}
  />
  </React.Fragment>
  );
}

export default TeaList;
