import React from 'react';
import { Card, Image,Divider } from 'semantic-ui-react';
import ItemCount from './ItemCount'
import '../css/UserCard.css';



const UserCard = ({ producto, precio, description, img ,stock, Detalles }) => (
  <div className='UserCard'>
    <Card>
      <Image src={img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>
          {producto}
        </Card.Header>
        {/* <Card.Meta> */}
          <h1 className='Price'> {precio}
          {stock} {Detalles}</h1>
          {/* <span className='Stock'> {stock} </span> */}
        {/* </Card.Meta> */}
        <Card.Description> {description} </Card.Description>
        <Divider />
        <ItemCount />
      </Card.Content>
    </Card>

    <div>
    </div>
  </div>
  
  
);

export default UserCard;
