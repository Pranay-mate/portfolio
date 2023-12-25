import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillBar from 'react-skillbars';

import Chart from "./chart";

import '../css/technicalSkills.css';



function TechnicalSkills() {
  let chartData = null;

  const skills = [
    {type: "Bootstrap", level: 100},
    {type: "JQuery", level: 75},
    {type: "Javascript", level: 75},
    {type: "MySql", level: 75},
    {type: "ReactJs", level: 90},
    {type: "VueJs", level: 100},
    {type: "NextJs", level: 75},
  ];
  const skillsB = [
    {type: "PHP", level: 75},
    {type: "NodeJs", level: 75},
    {type: "NestJs", level: 75},
    {type: "MongoDB", level: 75},
    {type: "Mongoose", level: 75},
    {type: "Laravel", level: 75},
    {type: "GitHub", level: 100},

  ];
  const colors = {
  "bar": "#3498db",
  "title": {
    "text": "#fff",
    "background": "#849ebd"
  }
};
const headline = '<Technical Skills/>';
  return (
    <div className="TechnicalSkills section-full">

  <Container>

      <Row>
        <Col xs={12}>
        <h2>{headline}</h2>

        </Col>

        <Col xs={12} className='' >
         <Chart chartData={chartData}  lavel="HTML" LegendPosition="bottom" />
        </Col>

      </Row>
      {/* <Row>
        <Col xs={12}>
        <h2>{headline}</h2>

        </Col>

        <Col xs={6} className='' >
          <SkillBar skills={skills} height={15} colors={colors}/>
        </Col>
        <Col xs={6} className='' >
          <SkillBar skills={skillsB} height={15} colors={colors}/>
        </Col>


      </Row> */}
    </Container>
    </div>
  );
}

export default TechnicalSkills;
