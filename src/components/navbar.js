import React from 'react';
import Cartwidget from './Cartwidget';
import Img from '../assets/raven.png';
import { Link } from 'react-router-dom';



const navbar = ({ title, color, subtitle }) => {
  return (
    <div className='Header'>
      <h1 style={{ color: `${color}` }}>{title}</h1>
      <h2>{subtitle}</h2>
      <img src={Img} width='150' alt="Logo de Tienda" />

      <nav>
      <ul>
        <li><Link className="active" to="/Home">Home</Link></li>
        <li><Link to="/Productos">Productos</Link></li>
        <li><Link to="/Servicios">Servicios</Link></li>
        <li><Link to="/Ondemand">Ondemand</Link></li>
        <li><Link to="/Novedades">Novedades</Link></li>
      </ul>
        <Cartwidget />
      </nav>
    </div>
  );
};

export default navbar;

