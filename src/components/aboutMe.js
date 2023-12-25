import React from 'react';
import mine from '../images/mine_img.jpeg';
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
        <Image className='mine img-fluid img-thumbnail' src={mine} roundedCircle width={250} height={250} alt='loading..' />
        <Container className='heading_text'>
        <Row >
        <Col xs={12} className='heading'>

          <Typist cursor={{ hideWhenDone: true }}>
          <span>Aspiring</span> Full Stack developer
          <Typist.Backspace count={29} delay={200}  />
          <span>{a}Full Stack</span> Developer/{b}

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
          <h3 className='Title'><span>Full Stack Developer At Hudle</span> </h3>
{/* 
          <p>I am a Full Stack Developer with over 2 years of experience, passionate about creating intuitive and user-friendly web applications. My expertise lies in front-end web development, back-end development, and database management. I am proficient in a variety of programming languages and frameworks, including HTML, CSS, Bootstrap, JavaScript, ReactJS, NodeJS, ExpressJS, MySql, PHP, and Laravel.</p>

          <p>I hold a Bachelor's degree in Information Technology from Mumbai University and have completed various courses, including Full-Stack Web Development with React Specialization and Building Web Applications in PHP. I started my career as a Web Developer at AppInSource, where I gained hands-on experience in developing Fintech applications and contributed to the development of major projects based on the PHP (Laravel) framework with Oracle as a backend. Currently, I work as a Full-stack Developer at Hudle in New Delhi, where I continue to enhance my skills and contribute to the development of innovative web applications.</p>

          <p>In addition to my professional experience, I have also worked on several personal projects, including an interactive web application developed using the MERN stack that assists users in building resumes and a book subscription web application designed using Angular.</p>

          <p>Although I have only worked on one freelance project, I received positive feedback from my client, who commended my dedication to completing the work as soon as possible and my willingness to research and overcome any challenges that arose.</p>

          <p>Outside of work, I volunteered as a Sports Coordinator for ITSA.</p>

          <p>Thank you for taking the time to read my profile. If you have any questions or opportunities, feel free to reach out to me at matepranay11@gmail.com.</p> */}

          <p>Full Stack Developer with a solid background of 2.5+ years, demonstrating proficiency in fintech web development.</p>
          <p>Proven leadership skills showcased through impactful mentoring.</p>
          <p>Currently amplifying skills in both web and app development at Hudle, an innovative sports tech organization.</p>

          <a href="https://drive.google.com/file/d/1SKijywhUb2FPOff9qOMcqB1oiIo3HZ2b/view?usp=sharing"
          >  <button type="button" class="resume ml-1 mt-2 btn btn-dark">RESUME  
          <span> </span><img src="https://img.icons8.com/fluent/24/FFFFFF/download.png" alt='loading..' /></button></a>

        </Col>


      </Row>
    </Container>
    </div>
  );
}

export default AboutMe;
