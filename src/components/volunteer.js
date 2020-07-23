import React from 'react';
import Container from 'react-bootstrap/Container';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import '../css/aboutMe.css';

function Volunteer() {
  return (
    <div className="Volunteer section-top section-full">

  <Container>

<VerticalTimeline layout= "1-column">
  <VerticalTimelineElement
    className="vertical-timeline-element--work"

    position='right'
    contentStyle={{ background: '#3498db', color: '#fff', borderTop: '7px solid black' }}
    contentArrowStyle={{ borderRight: '7px solid  #3498db' }}
    date="2018 - 2019"
    iconStyle={{ background: 'grey', color: '#fff' }}
    icon=<img src="https://img.icons8.com/color/35/000000/conference-foreground-selected.png"/>
  >
    <h3 className="vertical-timeline-element-title">Information Technology Student Association</h3>
    <h4 className="vertical-timeline-element-subtitle">Sports Coordinator</h4>
    <p>
    LEADERSHIP, TEAMWORK, CONFIDENCE, PROBLEM-SOLVING
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>

    </Container>
    </div>
  );
}

export default Volunteer;
