import React, { useState } from "react";
import { Button } from "semantic-ui-react";

function ItemCount() {
  const [number, setNumber] = useState(0);
  const [stock, setStock] = useState(Number(0));


  const handleUp = () => {
    setNumber(number + 1);
    setStock(stock - 1)

  };

  const handleDown = () => {
    setNumber(number - 1);
    setStock(stock + 1)

  };

  return (
    <div className="Counter">
      <Button secondary>Añadir</Button>      <h2>{number}</h2>
      <Button attached="left" onClick={handleDown}>-</Button>
      <Button attached="right"onClick={handleUp}>+</Button>
    </div>
  );
}

export default ItemCount;
