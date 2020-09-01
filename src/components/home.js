import React from 'react';
import homeImage from '../images/home.jpeg';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typist from 'react-typist';
import { Link } from "react-scroll";


import '../css/home.css';
const a= '<';
const b= '>';

function Home() {
  return (
    <div className="Home section-top">


      <div class="carousel-inner">
          <div class="item active">
            <Image src={homeImage} alt="Chania" fluid />
            <div class="carousel-caption">
            
            </div>
          </div>
          </div>
    </div>
  );
}

export default Home;
