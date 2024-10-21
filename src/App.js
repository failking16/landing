import React, { useState, useEffect, useCallback } from 'react';
import './App.css'; // Import the CSS for styling

// Importing images for team members
import AbylayImage from './ab.png';
import InkarImage from './Inkar.jpg';
import DiasImage from './Dias.jpg';
import MeyrashImage from './Nurba.jpeg';

function App() {
  const [slideIndex, setSlideIndex] = useState(0); // State to keep track of the current slide
  const slides = [
    {
      title: "Function for HR",
      content: [
        { heading: "Candidate Scoring", description: "Automate the process of evaluating and scoring candidates based on their skills, qualifications, and experience." },
        { heading: "Candidate Searching", description: "Advanced search capabilities to find the most suitable candidates from a large talent pool." }
      ]
    },
    {
      title: "Functionality Expansion",
      content: [
        { heading: "HR Segment", description: "Expand HR tools to offer more functionalities for HR professionals to manage recruitment efficiently." },
        { heading: "Gamification System", description: "Introduce game-based elements to enhance candidate engagement and make recruitment more interactive." }
      ]
    },
    {
      title: "AI Functionality",
      content: [
        { heading: "Conduct Profession-Oriented Tests", description: "Use AI to create customized tests tailored to specific professions." },
        { heading: "Personalized Plans and Courses", description: "Provide learning plans and course recommendations based on candidate profiles." }
      ]
    }
  ];

  // Function to move slides manually, memoized with useCallback
  const moveSlide = useCallback((n) => {
    let newIndex = slideIndex + n;
    if (newIndex >= slides.length) {
      newIndex = 0; 
    }
    if (newIndex < 0) {
      newIndex = slides.length - 1;
    }
    setSlideIndex(newIndex);
  }, [slideIndex, slides.length]);

  // Auto-slide functionality: slide every 5 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      moveSlide(1);
    }, 5000); // 5 seconds interval

    return () => clearInterval(autoSlide);
  }, [moveSlide]);

  // Team members array with Instagram URLs
  const teamMembers = [
    {
      name: "Султанбеков Абылай",
      role: "Data Science",
      bio: "KBTU, University of London",
      image: AbylayImage,
      instagram: "https://www.instagram.com/buble_abl_humble/"
    },
    {
      name: "Кумбаева Инкар",
      role: "IT manager",
      bio: "KBTU",
      image: InkarImage,
      instagram: "https://www.instagram.com/kmbva_i?igsh=MXVlbzFuczZkcGlkNA=="
    },
    {
      name: "Ерлан Диас",
      role: "App Developer",
      bio: "KBTU",
      image: DiasImage,
      instagram: ""
    },
    {
      name: "Нурболат Мейраш",
      role: "Data Scientist",
      bio: "KBTU",
      image: MeyrashImage,
      instagram: ""
    }
  ];

  return (
    <div className="App">
      <section className="parallax-section">
        <div className="content-overlay">
          <h1>Recruit Me AI</h1>
        </div>
      </section>
      <section className="normal-section">
        <div className="normal-content">
          <div className="services-container">

            <div className="service">
              <h2>Resume Constructor</h2>
              <p>Fast CV Creation Process</p>
              <p>Allows to edit existing resume</p>
            </div>

            <div className="service">
              <h2>Dream_Job AI</h2>
              <p>AI that can create the RoadMap of any Job that user wishes</p>
              <p>Kazakhstan's vacancies based AI builder</p>
            </div>

            <div className="service">
              <h2>CV Searcher</h2>
              <p>Cross-Platformed Vacancy searcher</p>
            </div>

          </div>
        </div>
      </section>

      <section className="future-plans-section">
      <div className="future-plans-content">
          <h1>{slides[slideIndex].title}</h1>

          {/* Render content dynamically based on slide index */}
          <div className="slideshow-container">
            <div className="slides">
              {slides[slideIndex].content.map((item, index) => (
                <div key={index} className="slide">
                  <h2>{item.heading}</h2>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
          <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="team-section">
        <div className="team-content">
          <h1>Meet the Team</h1>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img src={member.image} alt={`${member.name} profile`} />
                {/* Member's name is a clickable Instagram link */}
                <h2>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    {member.name}
                  </a>
                </h2>
                <h3>{member.role}</h3>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
