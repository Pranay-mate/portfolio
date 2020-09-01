import React from 'react';
import mine from '../images/mine.jpg';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import '../css/aboutMe.css';

function AboutMe() {
  return (
    <div className="AboutMe container">

  <Container>
      <Row>
      <Col xs={12} lg={4} className='text-center'>
        <Image className='mine img-fluid img-thumbnail' src={mine} roundedCircle width={300} height={300} alt='loading..' />
      </Col>
        <Col xs={12} lg={8} className='AboutText' >
        <h5>About me</h5>
        <h3><span>Aspiring</span> Full Stack developer</h3>
        <p>Currently pursuing my BE in Information Technology.</p>
        <p>Expertise in MERN stack In the web development domain. Also completed relevant courses on MERN stack specialization.</p>
        <p>I love to add more technology stacks to improve my technical skills and working on it.</p>
        <p>I believe in #keeplearning and #keepCoding.</p>


        <p>Highly patient in work and a quick learner. I like to learn new things and Interested in full-stack web development.</p>
        <a href="https://drive.google.com/file/d/1PDlOnjNMeUxkiwvyT-3B4cnDg7RuvwfS/view?usp=sharing">  <button type="button" class="btn btn-dark">Resume</button></a>

        </Col>


      </Row>
    </Container>
    </div>
  );
}

export default AboutMe;
