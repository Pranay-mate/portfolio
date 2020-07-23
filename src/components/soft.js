import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {CircleProgress} from 'react-gradient-progress';
import 'react-circular-progressbar/dist/styles.css';
import '../css/soft.css';



function SoftSkills() {

  return (
    <div className="SoftSkills section-full">

  <Container>
      <Row>
      <Col xs={12}>
        <h1>Soft Skills</h1>
      </Col>
        <Col xs={12} className='SoftSkills-bar' >
            <Row>
            <Col xs={3}>
                <CircleProgress percentage={100} width={70}  />
                <p>LEADERSHIP</p>
            </Col>
            <Col xs={3}>
                <CircleProgress percentage={100} width={70} />
                <p>TEAMWORK</p>
            </Col>
            <Col xs={3}>
                <CircleProgress percentage={90} width={70} />
                <p>CONFIDENCE</p>
            </Col>
            <Col xs={3}>
                <CircleProgress percentage={90} width={70} />
                <p>PROBLEM SOLVING</p>
            </Col>
            </Row>

        </Col>



      </Row>
    </Container>
    </div>
  );
}

export default SoftSkills;
