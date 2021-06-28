import React, { useState, useEffect } from "react";
// import { Button, Card } from "semantic-ui-react";
// import "./styles.css";
// DATA
import { itemsData } from "./itemsData";

// console.log("ITEMS DATA", itemsData);

export default function Itemlist() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setItems(itemsData);
      console.log(items);
    }, 2000);
  });


  return (
    <div className="Counter">
      <h1>funciona</h1>
      {items.map((item, idx) => {
        return (
          <div key={idx}>
            <h2>
              {item.nombre} precio: {item.precio}
            </h2>
          </div>
        );
      })}
    </div>
  );
}
///aqui hago una prueba

    // <Card>
    //   <Image src={img} wrapped ui={false} />
    //   <Card.Content>
    //     <Card.Header>
    //       {producto}
    //     </Card.Header>
    //       <span className='Price'> {precio},
    //       ,{stock} {Detalles}</span>
    //     <Card.Description> {description} </Card.Description>
    //     <Divider />
    //     <ItemCount />
    //   </Card.Content>
    // </Card>
