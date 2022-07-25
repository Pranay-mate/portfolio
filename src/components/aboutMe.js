import React from 'react';
import mine from '../images/mine.jpg';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-scroll";
import Typist from 'react-typist';


import '../css/aboutMe.css';
const a= '<';
const b= '>';
function AboutMe() {
  return (
    <div className="AboutMe ">

  <Container fluid>
      <Row>
      <Col xs={12} lg={4} className='text-center'>
        <Image className='mine img-fluid img-thumbnail' src={mine} roundedCircle width={300} height={300} alt='loading..' />
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
                      <a href="https://www.instagram.com/pranay_mate?r=nametag"><img src="https://img.icons8.com/metro/20/000000/instagram-new.png" alt='loading..' /></a>
                </Col>
                <Col xs={4}   className="icon">
                      <a href="https://www.linkedin.com/in/pranay-mate-arvind"><img src="https://img.icons8.com/windows/25/000000/linkedin-2.png" alt='loading..' /></a>
                </Col>
                <Col xs={4} sm={12} className="icon">
                      <a href="mailto:matepranay11@gmail.com"><img src="https://img.icons8.com/android/20/000000/gmail-login.png" alt='loading..' /></a>
                </Col>

              </Row>
              <Col xs={12}  className="icon">
              <a><Link
              className="nav-item nav-link"
                activeClass="active"
                to="Experience"
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
      </Col>
        <Col xs={12} lg={8} className='AboutText' >
        <h5>About me</h5>
        <h3><span>Aspiring</span> Full Stack developer</h3>
        <p>I did my BE in Information Technology and obsessed with the development of Web applications.</p>
        <p>1.5 years of development experience in php/Laravel.</p>
        <p>Love to engage my time in solving problems.</p>
        <p>Highly patient in work and a quick learner. I like to learn new things and Interested in full-stack web development.</p>
        <p>Love to add more technology stacks to improve my technical skills and believe in #keeplearning and #keepCoding.</p>
        <a href="https://drive.google.com/file/d/1nHSdcEobXAC7vwZ1dPs6N0yRUSmCGsbK/view?usp=sharing">  <button type="button" class="resume ml-1 mt-2 btn-lg btn btn-dark">Resume</button></a>


        </Col>


      </Row>
    </Container>
    </div>
  );
}

export default AboutMe;
