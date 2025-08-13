import React, { useEffect } from 'react';
import './Home.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation time in ms
      once: true,     // animate only once
    });
  }, []);

  return (
    <div className="home-container">
      <div
        className="home-header"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <h1>
          Hi, <span className='glow-text'>Khushi Singh</span> here.
        </h1>
        <h2 data-aos="fade-up" data-aos-delay="400">
          Think Twice, Code Once.
        </h2>
      </div>

<div   data-aos="zoom-in"
        data-aos-delay="800">
      <p
        className="home-intro"
        // data-aos="zoom-in"
        // data-aos-delay="600"
      >
        I’m a passionate frontend developer with a strong foundation in HTML, CSS, JavaScript, and React.
        I love building clean, responsive UIs and exploring creative solutions to problems through code.
      </p>

      <p
        className='home-intro'
        style={{ fontStyle: "italic", fontWeight: "300", color: "#eee" }}
      >
        "Frontend isn’t just about visuals — it’s about emotion, flow, and the silent language between user and machine."
      </p>
</div>
      <a
        href="/path-to-your-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="know-me-btn"
        data-aos="zoom-in"
        data-aos-delay="1000"
      >
        Know Me
      </a>
    </div>
  );
};

export default Home;

