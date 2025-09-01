import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            
            <div className="project">
                <a href="https://github.com/mohamadjamous/GoogleRepoList" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mohamadjamous/GoogleRepoList" target="_blank" rel="noreferrer"><h2>GoogleRepoList</h2></a>
                <p>A modern Android app built with Jetpack Compose, Kotlin, and Material 3 that displays repositories from Google's GitHub organization.</p>
            </div>

            <div className="project">
                <a href="https://github.com/mohamadjamous/NoteApp" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mohamadjamous/NoteApp" target="_blank" rel="noreferrer"><h2>NoteApp</h2></a>
                <p>A modern Note Taking App built with MVVM, Clean Architecture, and Jetpack Compose, using Dagger Hilt for dependency injection. Supports CRUD operations with Room Database, plus advanced filtering options.</p>
            </div>

            <div className="project">
                <a href="https://github.com/mohamadjamous/PayTrack" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mohamadjamous/PayTrack" target="_blank" rel="noreferrer"><h2>PayTrack</h2></a>
                <p>PayTrack is a modern Android application designed to help users easily manage and track their personal finances. With an intuitive and user-friendly interface built using Jetpack Compose, PayTrack provides users with the ability to log expenses, monitor financial habits, and stay on top of their spending — all in one clean, secure app.</p>
            </div>
            <div className="project">
                <a href="https://github.com/mohamadjamous/WeatherApp" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mohamadjamous/WeatherApp" target="_blank" rel="noreferrer"><h2>WeatherApp</h2></a>
                <p>A simple iOS app that retrieves and displays the current weather based on the user’s location. Built using Swift and SwiftUI, with data fetched from a weather API.</p>
            </div>
            <div className="project">
                <a href="https://github.com/mohamadjamous/Kotlin-Social-Connect" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mohamadjamous/Kotlin-Social-Connect" target="_blank" rel="noreferrer"><h2>KotlinSocial</h2></a>
                <p>KotlinSocial is a cross-platform Instagram clone built using Kotlin Multiplatform (KMP). This app showcases the potential of shared codebases for Android and iOS while maintaining a sleek, modern design inspired by Instagram's functionality and aesthetics.</p>
            </div>
           
        </div>
    </div>
    );
}

export default Project;