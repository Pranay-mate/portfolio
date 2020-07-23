import React from 'react';
import Container from 'react-bootstrap/Container';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import '../css/education.css';

function Education() {
  return (
    <div className="Education">

  <Container>

<VerticalTimeline layout= "1-column">
  <VerticalTimelineElement
    className="vertical-timeline-element--work"

    position='right'
    contentStyle={{ background: 'rgb(96,96,96)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(96,96,96)' }}
    date="2017 - present"
    iconStyle={{ background: 'rgb(96,96,96)', color: '#fff' }}
    icon=<img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/student-center.png" alt='loading..' />
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Engineering (BE) Information Technology</h3>
    <h4 className="vertical-timeline-element-subtitle">Mumbai University</h4>
    <p>
      Konkan Gyanpeeth College of Engineering
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>

    </Container>
    </div>
  );
}

export default Education;
