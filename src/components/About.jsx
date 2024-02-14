import React from "react";
import './assets/style/About.scss'
import '@fortawesome/free-regular-svg-icons'
import '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { TypeAnimation } from 'react-type-animation';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function About() {
  return (
    <div className="items_wrapper">
      <h1>About Me</h1>
      <div className="about-page">
        <div className="align-items-center">
          <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/about-image.jpg" alt="Asset by Oziel Gómez" />
          <h2>Brief Intro</h2>
          <p>
              Greetings! I'm Sijia Han, a Data Science Graduate hailing from the prestigious University 
              of British Columbia, complemented by a solid foundation in Computer Science and Mathematics 
              from the University of Dalhousie.  <br></br><br></br>
            
              I'm a dedicated Machine Learning Developer and Data Scientist, boasting over 5 years 
              of programming expertise in software development, coupled with 1+ years of 
              hands-on experience in the specialized field of natural language processing. 
              My unwavering commitment revolves around catalyzing innovation through data-driven insights. 
              I thrive on crafting and deploying advanced models to unearth valuable knowledge, 
              all while maintaining a fervent commitment to continuous learning. 
              This ensures that I remain at the vanguard of our ever-evolving industry, 
              adept at assisting organizations in navigating the dynamic landscape.
          </p>
          <TypeAnimation
            sequence={[
              "If I am not coding, you can find me: playing vedio games",
              1000,
              "If I am not coding, you can find me: watching movies",
              1000,
              "If I am not coding, you can find me: traveling",
              1000,
              "If I am not coding, you can find me: reading",
              1000,
              "If I am not coding, you can find me: hanging out with friends",
              1000
            ]}
            wrapper="p"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        <h2>Experience</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black', marginLeft: "-8px"}}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Oct 2023 - Present"
            iconStyle={{ background: 'rgb(0, 128, 254)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faFacebook} />}
          >
            <h3 className="vertical-timeline-element-title">Prompt Engineer @ Meta</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{marginTop: "10px"}}>Vancouver, BC</h4>
            <p>
              Python, SQL, Data Analysis, Data Engineering, Prompt Engineering
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black', marginRight: "-8px"}}
            date="May 2023 - Sep 2023"
            iconStyle={{ background: 'rgb(0, 128, 254)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Associate Machine Learning Developer @ AltaML</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{marginTop: "10px"}}>Calgary, AB</h4>
            <p>
              Python, Data Analytics, NLP, LLMs, Prompt Engineering, Git, Data Engineering, Azure Platform
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black', marginLeft: "-8px"}}
            date="May 2022 - Jul 2022"
            iconStyle={{ background: 'rgb(0, 128, 254)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">NLP Data Scientist @ Heyday by Hootsuite</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{marginTop: "10px"}}>Vancouver, BC</h4>
            <p>
              Python, Machine Learning, Data Analysis, Data Visualization, NLP, Computational Linguistics, Git, Data Science
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black', marginRight: "-8px"}}
            date="Sep 2021 - Nov 2022"
            iconStyle={{ background: 'rgb(249, 38, 114)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faUniversity} />}
          >
            <h3 className="vertical-timeline-element-title">The University of British Columbia</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{marginTop: "10px"}}>Vancouver, BC</h4>
            <p>
              Master of Data Science in Computational Linguistics
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black', marginRight: "-8px"}}
            date="Aug 2019 - Sep 2019"
            iconStyle={{ background: 'rgb(0, 128, 254)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Information Technology Associate @ CMEL</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{marginTop: "10px"}}>Halifax, NS</h4>
            <p>
              Java, React, JavaScript, HTML, MySQL
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black', marginRight: "-8px"}}
            date="Jan 2017 - Aug 2021"
            iconStyle={{ background: 'rgb(249, 38, 114)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faUniversity} />}
          >
            <h3 className="vertical-timeline-element-title">Dalhousie University</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{marginTop: "10px"}}>Halifax, NS</h4>
            <p>
              Bachelor's degree of Computer Science with a Minor in Mathematics
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default About;