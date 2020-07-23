import React from 'react';
import Fitness from '../images/MERN.jpeg';
import MERN from '../images/PHP.png';
import PHP from '../images/Wordpress.jpeg';
import Wordpress from '../images/fitness.jpeg';
import Trek from '../images/trek.jpg';
import Code from '../images/code.jpeg';
import Netflix from '../images/netflix.png';
import Dark from '../images/dark.jpeg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import '../css/interests.css';



class Certi extends React.Component {
  constructor() {
    super();
      this.state = {
        isFlippedN: false,
        isFlippedT: false,
        isFlippedF: false,
        isFlippedC: false
    };
  }



  render() {



  return (
    <div className="Interests  section-full">
    <h1>Certificates</h1>
    <Container >
    <CardDeck>

       <Row >
         <Col xs={4}>
              <Card>
              <Card.Header>Header</Card.Header>
                <Card.Img variant="top" className='im' src={MERN} alt='loading..' />
                <Card.Body>
                   </Card.Body>
                <Card.Footer>
                  <a href='http://localhost:3000/portfolio'>  <small className="text-muted">CODE</small></a>
                </Card.Footer>
              </Card>
         </Col>
         <Col xs={4}>
             <Card>
             <Card.Header>Header</Card.Header>
               <Card.Img variant="top" className='im' src={PHP} alt='loading..' />
               <Card.Body>
                  </Card.Body>
               <Card.Footer>
                 <a href='http://localhost:3000/portfolio'>  <small className="text-muted">CODE</small></a>
               </Card.Footer>
             </Card>
         </Col>
         <Col xs={4}>
            <Card>
            <Card.Header>Header</Card.Header>
              <Card.Img variant="top" className='im' src={Wordpress} alt='loading..' />
              <Card.Body>
                 </Card.Body>
              <Card.Footer>
                <a href='http://localhost:3000/portfolio'>  <small className="text-muted">CODE</small></a>
              </Card.Footer>
            </Card>
         </Col>
       </Row>

       </CardDeck>

    </Container >


    </div>
  );
}
}

export default Certi;
