import React from "react";
import Tea from "./Tea";

const mainTeaList = [
  {
    name: "Zuko's breath of fire",
    origin: "fire nation",
    type: "chai tea",
    price: 12.99,
    quantity: 130,
  },
  {
    name: "Appa sip sip",
    origin: "eastern air temple",
    type: "chamomile tea",
    price: 12.99,
    quantity: 130,
  },
];

function TeaList() {
  return (
    <React.Fragment>
      <hr />
      {mainTeaList.map((tea, index) => (
        <Tea
          name={tea.name}
          origin={tea.origin}
          type={tea.type}
          price={tea.price}
          quantity={tea.quantity}
          key={index}
        />
      ))}
    </React.Fragment>
  );
}

export default TeaList;
