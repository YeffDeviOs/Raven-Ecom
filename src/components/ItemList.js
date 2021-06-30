import React, { useState, useEffect } from "react";
import {Card, Image} from "semantic-ui-react";
import ItemCount from './ItemCount'
// DATA
import { itemsData } from "./itemsData";
// import UserCard from './UserCard';

export default function Itemlist() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setItems(itemsData);
      console.log(items);
    }, 2000);
  });


  return (
    <div className="Container">
      {items.map((item, index) => {
        return (
          <div className="Wrapper">
            <Card key={index}>
            <Image src={item.img} wrapped ui={false} />
            <Card.Content>
              <Card.Header>
                {item.producto}
              </Card.Header>
                <h3 className='Price'> ${item.precio}
                {item.stock} {item.Detalles}</h3>
              <Card.Description> {item.description} </Card.Description>
              {/* <Divider /> */}
              <br></br>
              <ItemCount />
            </Card.Content>
          </Card>
          </div>
        );
      })}
    </div>
  );
}
