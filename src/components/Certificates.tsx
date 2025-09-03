import React from "react";
import cs50x from '../assets/images/cs50x-certificate.png';
import '../assets/styles/Project.scss';

function Certificates() {
  const certificates = [
    { title: "CS50's Introduction to Computer Science", image: cs50x, link: "https://certificates.cs50.io/2ac32627-0eb5-4cd1-9f79-177e8ef8d6aa.pdf?size=letter" },
  ];

    return (
    <div id="certificates">
        <div className="items-container">
        <h1 style={{ marginBottom: '2rem' }}>Personal Certificates</h1>
        <div className="certificates-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            {certificates.map((cert, idx) => (
            <div className="certificate" key={idx} style={{ marginBottom: '2rem' }}>
                <a href={cert.link} target="_blank" rel="noreferrer">
                <img src={cert.image} className="zoom" alt={cert.title} width="50%" />
                </a>
                <a href={cert.link} target="_blank" rel="noreferrer">
                <h2 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>{cert.title}</h2>
                </a>
            </div>
            ))}
        </div>
        </div>
    </div>
    );

}

export default Certificates;
