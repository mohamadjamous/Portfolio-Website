import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";


const labelsFirst = [
    "Kotlin",
    "Java",
    "Jetpack Compose",
    "XML",
    "Coroutines",
    "Room Database",
    "Retrofit",
    "Firebase",
    "SQLite",
    "Gradle",
    "Android Studio",
    "JUnit"
];


const labelsSecond = [
    "MVVM",
    "MVC",
    "Clean Architecture",
    "Dependency Injection (Hilt/Koin)",
    "Room",
    "Core Data",
    "SQLite",
    "Coroutines",
    "Combine",
    "Performance Profiling",
];

const labelsThird = [
    "Swift",
    "SwiftUI",
    "UIKit",
    "Combine",
    "Core Data",
    "Xcode",
    "TestFlight"
];


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faAndroid} size="3x"/>
                    <h3>Android Development</h3>
                    <p>I specialize in building modern Android applications using Kotlin, Java, and Jetpack libraries. My expertise covers the full SDLC, from UI/UX design with Compose to backend integration with REST APIs and Firebase.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMobile} size="3x"/>
                    <h3>App Architecture & Performance</h3>
                    <p>
                        I design scalable app architectures using MVVM, Clean Architecture, and dependency 
                        injection. I also focus on optimizing performance, memory usage, and responsiveness 
                        for smooth mobile experiences.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>


                <div className="skill">
                    <FontAwesomeIcon icon={faApple} size="3x"/>
                    <h3>iOS Development</h3>
                    <p>I design and develop high-quality iOS applications using Swift and SwiftUI. My work spans from elegant UI creation to integrating Core Data, Combine, and deployment via TestFlight and the App Store.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}


export default Expertise;