import React from 'react';
import Header from './Header';

function App() {
  const name = "Zuko's breath of fire"
  const origin = "fire nation"
  const type = 'chai tea'
  const price = 12.99
  const quantity = 130

  return (
<React.Fragment>
  <Header />
  <h3>3a</h3>
  <h3>{name}</h3>
  <p>{origin}</p>
  <p>{type}</p>
  <p>${price}</p>
  <p>{quantity} oz</p>
</React.Fragment>
  );
}

export default App;
