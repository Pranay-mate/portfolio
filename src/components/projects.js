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
    date="March 2021 - Present"
    iconStyle={{ background: 'black', color: '#fff' }}
    icon=<img className='iconp' src="https://img.icons8.com/nolan/60/react-native.png" alt='loading..' />
  >
    <h3 className="vertical-timeline-element-title">AI Resume</h3>
    <h4 className="vertical-timeline-element-subtitle">ReactJs, NodeJs, ExpressJs, MongoDB</h4>
    <p>
    Interactive web application prepared using MERN stack, which assists users to build resume and get score as per user's resume.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="December 2020 - December 2020"
    iconStyle={{ background: '#86aadb', color: '#000000' }}
    icon=<img className='iconp' src="https://img.icons8.com/color/55/000000/nodejs.png" alt='loading..' />
    contentStyle={{borderTop: '5px solid black'} }

  >
    <h3 className="vertical-timeline-element-title">WhiteClouds</h3>
    <h4 className="vertical-timeline-element-subtitle">PHP/ Laravel stack</h4>
    <p>
    Flight booking web application made using PHP, Laravel and MySql.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"

    contentStyle={{borderTop: '5px solid red'} }
    date="August 2020 - August 2020"
    iconStyle={{ background: 'black', color: '#fff' }}
    icon=<img className='iconp' src="https://img.icons8.com/nolan/60/react-native.png" alt='loading..' />
  >
    <h3 className="vertical-timeline-element-title">Easy Books</h3>
    <h4 className="vertical-timeline-element-subtitle">AngularJs</h4>
    <p>
      Book subscription web application ( responsive ) made using angular.
    </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"

    contentStyle={{borderTop: '5px solid black'} }
    date="July 2020 - July 2020"
iconStyle={{ background: '#86aadb', color: '#000000' }}
icon=<img className='iconp' src="https://img.icons8.com/metro/60/000000/wordpress.png" alt='loading..' />
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
contentStyle={{borderTop: '5px solid red'} }
icon=<img className='iconp' src="https://img.icons8.com/nolan/60/react-native.png" alt='loading..' />

>
<h3 className="vertical-timeline-element-title">Personal Portfolio</h3>
<h4 className="vertical-timeline-element-subtitle">HTML, CSS, Bootstrap, ReactJs</h4>
<p>
  Portfolio made in using HTML, CSS, Bootstrap, and ReactJs.
</p>
</VerticalTimelineElement>


</VerticalTimeline>


    </Container>
    </div>
  );
}

export default Projects;
