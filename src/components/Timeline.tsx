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
            date="June 2020 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Android Engineer (Full-time)</h3>
            <h4 className="vertical-timeline-element-subtitle">Neelwafurat (E-commerce Marketplace) — Beirut, Lebanon</h4>
            <p>
              Worked on 7+ Android apps including Firebase, authentication, RESTful web services, and an eBook Reader app.  
              Published 4+ Android apps to production.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Part-time"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Android Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Upwork (Freelance)</h4>
            <p>
              Built and delivered high-quality Android apps using Kotlin, Jetpack Compose, and MVVM.  
              Integrated REST APIs, Firebase, and third-party services for enhanced functionality.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2023 – Apr 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Mobile Engineer (Part-time)</h3>
            <h4 className="vertical-timeline-element-subtitle">XRide — Remote (Car Rental Platform)</h4>
            <p>
              Worked on a mobile & web car rental platform where travelers could search and book cars from rental companies.  
              Maintained and developed native mobile apps for both iOS and Android.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2022 – Apr 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Android Engineer (Full-time)</h3>
            <h4 className="vertical-timeline-element-subtitle">ihjoz (Online Ticketing Platform) — Beirut, Lebanon</h4>
            <p>
              Built and consulted on Android apps using Kotlin, Java, Jetpack Compose, and Coroutines.  
              Focused on smooth user experiences and performance improvements.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;