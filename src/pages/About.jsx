import React, { useEffect } from 'react';
import './About.css';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 900, // animation time
      once: true,    // animation runs once
    });
  }, []);

  return (
    <div className="about-page">
      <h2
        className="page-heading"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        A Glimpse of Me
      </h2>

      <section
        className="about-card"
      >
        <p
          className="card-quote"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          "few words about me..."
        </p>

        <p
          className="about-description"
          data-aos="fade-left"
          data-aos-delay="800"
        >
          I’m Khushi Singh, a developer who thrives in the calm of late nights. I find peace in singing my favorite tunes, joy in exploring new places, and focus when the world is quiet. In short — they fuel the creativity and purpose behind everything I build.
        </p>

        <div
          className="about-tech-tools"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <h3 className="mini-heading">Technologies I Use</h3>
          <div className="skills-grid" data-aos="zoom-in" >
            {['HTML', 'CSS', 'JavaScript', 'React', 'JSON'].map((tech, index) => (
              <span
                className="skill-pill"
                key={index}
                data-aos="zoom-in"
                data-aos-delay={1100 + index * 100}
              >
                {tech}
              </span>
            ))}
          </div>

          <h3
            className="mini-heading"
            data-aos="fade-up"
            data-aos-delay="1700"
          >
            Tools I Work With
          </h3>
          <div className="skills-grid">
            {['VS Code', 'Git', 'GitHub', 'Vercel', 'Chrome DevTools'].map((tool, index) => (
              <span
                className="skill-pill"
                key={index}
                data-aos="zoom-in"
                data-aos-delay={1800 + index * 100}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
