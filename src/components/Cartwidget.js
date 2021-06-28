import React from 'react';
import { Icon, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



const Cartwidget = () => (
  <Label>
    <Link to="/Home"><Icon name='cart' color='black'size='small' /> 0</Link>
  </Label>
)

export default Cartwidget


