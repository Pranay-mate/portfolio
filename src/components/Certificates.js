import React from 'react';
import MERN from '../images/MERN.jpeg';
import PHP from '../images/PHP.png';
import AngularJs from '../images/angular.jpg';
import Wordpress from '../images/Wordpress.jpeg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import '../css/certificates.css';



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
    <div className="Certificates section-full">
    <h1>Certificates</h1>
    <Container >
    <CardDeck>

       <Row >
         <Col xs={12}  lg={4}>
              <Card>
                <Card.Img variant="top" className='img-responsive' src={MERN} alt='loading..' />

                <Card.Footer>
                  <a href='https://www.coursera.org/account/accomplishments/specialization/certificate/6BCDW9XJBV4F'>  <small className="text-muted">View certificate</small></a>
                </Card.Footer>
              </Card>
         </Col>
         <Col xs={12} lg={4}>
             <Card>
               <Card.Img variant="top" className='img-responsive' src={PHP} alt='loading..' />

                  <Card.Footer>
                    <a href='https://www.coursera.org/account/accomplishments/certificate/969A53T9CP65'>  <small className="text-muted">View certificate</small></a>
                  </Card.Footer>
             </Card>
         </Col>
         <Col xs={12} lg={4}>
            <Card>
              <Card.Img variant="top" className='img-responsive' src={Wordpress} alt='loading..' />

              <Card.Footer>
                <a href='https://www.coursera.org/account/accomplishments/certificate/Y7KPJM96RDW3'>  <small className="text-muted">View certificate</small></a>
              </Card.Footer>
            </Card>
         </Col>
         <Col xs={12} lg={4}>
            <Card>
              <Card.Img variant="top" className='img-responsive' src={AngularJs} alt='loading..' />

              <Card.Footer>
                <a href='https://www.coursera.org/account/accomplishments/certificate/AT5JH4BCU5G3'>  <small className="text-muted">View certificate</small></a>
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
