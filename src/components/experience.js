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
  Practical experience of working on a live project with a Predefined workflow.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="June 2020 - July 2020"
    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}

    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon=<img fluid src="https://img.icons8.com/color/48/000000/working-with-a-laptop.png"  alt='loading..' />
  >
    <h3 className="vertical-timeline-element-title">Web Development Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">WeeToo Ecom Pvt. Ltd.</h4>
    <p>
  Used programming capabilities for development of E-commerce website in PHP, LARAVEL, MYSQL, VUE.JS.
  </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"

    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="August 2020 - August 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon=<img  fluid  src="https://img.icons8.com/color/48/000000/working-with-a-laptop.png" alt='loading..' />
  >
    <h3 className="vertical-timeline-element-title">Freelance Web Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Freelance</h4>
    <p>
  Created a website that exemplifies my client's beliefs, skills, qualifications and experiences.
    </p>
  </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Nov 2020 - Present"
    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}

    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon=<img fluid src="https://img.icons8.com/color/48/000000/working-with-a-laptop.png"  alt='loading..' />
  >
    <h3 className="vertical-timeline-element-title">PHP/ Laravel Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">
    AppInSource - ideas to solutions</h4>
    <p>Working on Fintech applications.</p><p> Contributing as developer to the projects which are based on
    PHP( LARAVEL ) framework with oracle as a backend.</p>
 
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
