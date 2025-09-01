import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQERKS1xpxwT3w/profile-displayphoto-scale_400_400/B4EZjLN7qfHgAk-/0/1755756084767?e=1759363200&v=beta&t=igbV5njnV6IYK-R6_wYbEtIQhaVQO6N6FSUu1qVyZV0" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/mohamadjamous" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mohamad-jamous-108488214/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Mohamad Jamous</h1>
          <p>Mobile Softaware Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/mohamadjamous" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mohamad-jamous-108488214/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;