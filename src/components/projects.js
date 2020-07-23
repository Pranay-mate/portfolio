import React from 'react';
import Container from 'react-bootstrap/Container';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import '../css/projects.css';

function Projects() {
  return (
    <div className="Projects section-top section-full">
      <h1>Projects</h1>
  <Container>
  <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"

    contentStyle={{borderTop: '5px solid red'} }
    date="March 2020 - March 2020"
    iconStyle={{ background: 'black', color: '#fff' }}
    icon=<img className='iconp' src="https://img.icons8.com/nolan/60/react-native.png" alt='loading..' />
  >
    <h3 className="vertical-timeline-element-title">World clock</h3>
    <h4 className="vertical-timeline-element-subtitle">ReactJs, NodeJs, ExpressJs</h4>
    <p>
    Interactive web application prepared in reactjs ,node.js. Assists users to get time and date, date related information of any country of the world in a matter of seconds.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="June 2020 - Present"
    iconStyle={{ background: '#86aadb', color: '#000000' }}
    icon=<img className='iconp' src="https://img.icons8.com/color/55/000000/nodejs.png" alt='loading..' />
    contentStyle={{borderTop: '5px solid black'} }

  >
    <h3 className="vertical-timeline-element-title">Trek Booking</h3>
    <h4 className="vertical-timeline-element-subtitle">MERN stack</h4>
    <p>
      An attractive website built on the MERN stack with a mongodb database, Expressjs backend, Reactjs frontend, and a Nodejs runtime.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"

    contentStyle={{borderTop: '5px solid red'} }
    date="July 2020 - July 2020"
    iconStyle={{ background: 'black', color: '#fff' }}
    icon=<img className='iconp' src="https://img.icons8.com/nolan/60/react-native.png" alt='loading..' />
  >
    <h3 className="vertical-timeline-element-title">Fitness Freak</h3>
    <h4 className="vertical-timeline-element-subtitle">Wordpress</h4>
    <p>
      Expressive, utterly responsive e-commerce website which built on Wordpress platform by keeping all user requirements in mind.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="July 2020 - July 2020"
    iconStyle={{ background: '#86aadb', color: '#000000' }}
    icon=<img className='iconp' src="https://img.icons8.com/metro/60/000000/wordpress.png" alt='loading..' />
    contentStyle={{borderTop: '5px solid black'} }

  >
    <h3 className="vertical-timeline-element-title">Personal Portfolio</h3>
    <h4 className="vertical-timeline-element-subtitle">HTML, CSS, Bootstrap, ReactJs</h4>
    <p>
      Portfolio made in using HTML, CSS, Bootstrap, and ReactJs.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'red', color: '#fff' }}
    icon=<img className='iconp' src="https://img.icons8.com/android/40/000000/star.png" alt='loading..' />
  />
</VerticalTimeline>


    </Container>
    </div>
  );
}

export default Projects;
