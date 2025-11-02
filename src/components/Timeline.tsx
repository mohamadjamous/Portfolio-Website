import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">

        <h1>Career History</h1>

        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2020 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Android Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Neelwafurat — Beirut, Lebanon</h4>
            <p>
              As a Senior Android Software Engineer at Neelwafurat, I contribute to the development of multiple Android applications, leveraging Firebase, RESTful APIs, authentication systems, and Android-specific features such as Book Reader functionality. I have collaborated on and managed 7+ apps 
            </p>
          </VerticalTimelineElement>

        

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2022 – Jul 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Mobile Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">XRide — Remote</h4>
            <p>
              Senior Mobile Software Engineer contributing to a web and mobile car rental platform, focusing on building and maintaining high-performance, seamless, and consistent Android and iOS apps.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2022 – Jul 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Android Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">ihjoz — Beirut, Lebanon</h4>
            <p>
              Providing consulting, development, and architecture services for Android applications using Kotlin, Java, Jetpack Compose, and Coroutines.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;