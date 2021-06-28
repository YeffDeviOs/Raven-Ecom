import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import '../css/Detail.css';


const ItemDetail = () => (
  <div className='Detail'>
  <Grid>
    <Grid.Column width={5}>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column width={9}>
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Grid.Column>
  </Grid>
  </div>
)

export default ItemDetail;
