import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import '../css/ItemCount.css';




function ItemCount( stockinit) {
  const [number, setNumber] = useState(0);
  // const [stock, setStock] = useState(Number(0));


  const handleUp = () => {
    setNumber((number + 1));
    // setStock(stock - 1)

  };

  const handleDown = () => {
    setNumber(Math.max(number - 1, 0));
    // setStock(stock + 1)

  };

  return (
    <div className="Counter">
              <h4>{number}</h4>
      <Button attached="left" onClick={handleDown}>-</Button>
      <Button attached="right"onClick={handleUp}>+</Button>
      <Link to="/"><Button secondary>Añadir</Button></Link>

    </div>
  );
}

export default ItemCount;
