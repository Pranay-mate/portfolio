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
            <Image src={homeImage} alt="Chania" fluid  />
            <div class="carousel-caption">
            <Container className='heading_text'>
            <Row >
            <Col xs={12} className='heading'>

            <Typist cursor={{ hideWhenDone: true }}>
            <span>Aspiring</span> Full Stack developer
            <Typist.Backspace count={29} delay={200}  />
            <span>{a}Web</span> Developer/{b}

            </Typist>
            </Col>
            </Row>

                  <Row xs={12} className="icons justify-content-sm-center" >
                    <Col xs={4}  className="icon">
                          <a href="https://www.instagram.com/pranay_mate?r=nametag"><img src="https://img.icons8.com/metro/20/FFFFFF/instagram-new.png" alt='loading..' /></a>
                    </Col>
                    <Col xs={4}   className="icon">
                          <a href="https://www.linkedin.com/in/pranay-mate-arvind"><img src="https://img.icons8.com/windows/25/FFFFFF/linkedin-2.png" alt='loading..' /></a>
                    </Col>
                    <Col xs={4} sm={12} className="icon">
                          <a href="mailto:matepranay11@gmail.com"><img src="https://img.icons8.com/android/20/FFFFFF/gmail-login.png" alt='loading..' /></a>
                    </Col>

                  </Row>
                  <Col xs={12}  className="icon">
                  <a><Link
                  className="nav-item nav-link"
                    activeClass="active"
                    to="AboutMe"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  ><img src="https://img.icons8.com/fluent/48/000000/expand-arrow.png" alt='loading..' /></Link>
                        </a>
                  </Col>
                  <Row>
                  </Row>

                </Container>
            </div>
          </div>
          </div>
    </div>
  );
}

export default Home;
