import React from 'react';
// import Section from "../components/Section";
import Img from '../assets/e-sports.jpg';
import Img2 from '../assets/esports-iStock.jpg';
 import "../App.css";


// import img from "../assets/raven.png";
// import img from "https://image.freepik.com/foto-gratis/pancarta-ninos-sorprendidos-mirando-al-borde_155003-13452.jpg"

function Home() {
    return (
        <div className="Home">
            <img src={Img} width='50%' opacity="50" alt="Banner" />
            <img src={Img2} width='50%' opacity="50" alt="Banner" />
        </div>
    )
}

export default Home;