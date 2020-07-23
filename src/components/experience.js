import React from 'react';
import Container from 'react-bootstrap/Container';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import '../css/experience.css';

function Experience() {
  return (
    <div className="Experience ">
    <h1>Experience</h1>
  <Container>
  <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"

    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="April 2020 - July 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon=<img  fluid  src="https://img.icons8.com/color/48/000000/working-with-a-laptop.png" alt='loading..' />
  >
    <h3 className="vertical-timeline-element-title">Web Development Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Cloud Counselage Pvt. Ltd.</h4>
    <p>
      Collected, defined, and translated user requirements into project designs and implementation plans.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="June 2020 - July 2020"
    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}

    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon=<img className='img-responsive' src="https://img.icons8.com/color/48/000000/working-with-a-laptop.png"  alt='loading..' />
  >
    <h3 className="vertical-timeline-element-title">Web Development Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">WeeToo Ecom Pvt. Ltd.</h4>
    <p>
      Contributing to the development of the E-commerce website along with my team members.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon=<img className='star' src="https://img.icons8.com/android/40/000000/star.png"  alt='loading..' />
  />
</VerticalTimeline>


    </Container>
    </div>
  );
}

export default Experience;
