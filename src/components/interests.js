
import React from 'react';
import Fitness from '../images/fitness.jpeg';
import Trek from '../images/trek.jpg';
import Code from '../images/code.jpeg';
import Netflix from '../images/netflix.png';
import Dark from '../images/dark.jpeg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillBar from 'react-skillbars';
import ReactCardFlip from 'react-card-flip';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import '../css/interests.css';



class Interests extends React.Component {
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

  const skills = [
    {type: "English", level: 75},
    {type: "Hindi", level: 100},
    {type: "Marathi", level: 100},

  ];
  const colors = {
  "bar": "#3498db",
  "title": {
    "text": "#fff",
    "size":"500px",
    "background": "#2980b9"
  }
};

  return (
    <div className="Interests  section-full">

  <Container>
      {/* <Row >
        <Col xs={12} lg={3} >
          <h1 className='languages'>Languages</h1>
          <h5>I Speak</h5>

        </Col>
        <Col xs={12} lg={8} className='percentage'>
          <SkillBar  skills={skills} height={20} colors={colors}/>
        </Col>
        </Row> */}
      <Row>
        <Col xs={12} className='interests'>
          <h1>Interests</h1>
          <h5>What I like</h5>
          </Col>
      </Row>


      </Container>
          <CardDeck className='desk'>
            <Card>


            <ReactCardFlip isFlipped={this.state.isFlippedC} flipDirection="horizontal">
              <Card.Img variant="top" className='im' src={Code} onMouseOver={() => {this.setState({isFlippedC: true})}} onClick={() => {this.setState({isFlippedC: true})}} alt='loading..' />
              <div>
              <Card.Img variant="top" className='im' src={Dark} onMouseOut={() => {this.setState({isFlippedC: false})}} onClick={() => {this.setState({isFlippedC: false})}} alt='loading..' />
              <div class="carousel-caption">

              <h5>Searching for me? I must be there, coding.</h5>
              <h4>"Talk less code More"</h4>
              </div>
              </div>
            </ReactCardFlip>

              <Card.Footer>
                <small className="text-muted">CODE</small>
              </Card.Footer>
            </Card>
            <Card>
              <ReactCardFlip isFlipped={this.state.isFlippedF} flipDirection="horizontal">
                <Card.Img variant="top" className='im' src={Fitness} onMouseOver={() => {this.setState({isFlippedF: true})}} onClick={() => {this.setState({isFlippedF: true})}} alt='loading..' />
                <div>
                <Card.Img variant="top" className='im' src={Dark} onMouseOut={() => {this.setState({isFlippedF: false})}} onClick={() => {this.setState({isFlippedF: false})}} alt='loading..' />
                <div class="carousel-caption">

                <h5>Not coding? Then I am definitely at the gym.</h5>
                <h4>"abs>>carbs"</h4>
                </div>
                </div>
              </ReactCardFlip>
              <Card.Footer>
                <small className="text-muted">FITNESS</small>
              </Card.Footer>
            </Card>
            <Card>
            <ReactCardFlip isFlipped={this.state.isFlippedN} flipDirection="horizontal">
              <Card.Img variant="top" className='im' src={Netflix} onMouseOver={() => {this.setState({isFlippedN: true})}} onClick={() => {this.setState({isFlippedN: true})}} alt='loading..' />
              <div>
              <Card.Img variant="top" className='im' src={Dark} onMouseOut={() => {this.setState({isFlippedN: false})}} onClick={() => {this.setState({isFlippedN: false})}} alt='loading..' />
              <div class="carousel-caption">

              <h5>Not even there? Oh, so I must be binge watching latest shows</h5>

              </div>
              </div>
            </ReactCardFlip>
              <Card.Footer>
                <small className="text-muted">Binge Watching</small>
              </Card.Footer>
            </Card>
            <Card>
            <ReactCardFlip isFlipped={this.state.isFlippedT} flipDirection="horizontal">
              <Card.Img variant="top" className='im' src={Trek} onMouseOver={() => {this.setState({isFlippedT: true})}} onClick={() => {this.setState({isFlippedT: true})}} alt='loading..' />
              <div>
              <Card.Img variant="top" className='im' src={Dark} onMouseOut={() => {this.setState({isFlippedT: false})}} onClick={() => {this.setState({isFlippedT: false})}} alt='loading..' />
              <div class="carousel-caption">

              <h5>Didn't find me yet? I am definitely at some hill top.</h5>
              <h4>"Enjoying breathtaking views ❤️"</h4>
              </div>
              </div>
            </ReactCardFlip>
              <Card.Footer>
                <small className="text-muted">TREK</small>
              </Card.Footer>
            </Card>


          </CardDeck>

    </div>
  );
}
}

export default Interests;
