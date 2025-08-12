import React, { useEffect } from 'react';
import './Education.css';
import { Atom, TabletSmartphone, Terminal } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return (
    <div className="education-page">
      <h2
        className="page-heading"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        My Academic Arc
      </h2>

      <section
        className="education-card"

      >
        <div
          className="education-info"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <h3 className="institute-name">Bareilly College, Bareilly</h3>
          <p className="course-year">
            Bachelor of Computer Applications (BCA) | 2023–2026
          </p>
          <p className="education-description">
            Currently in my final year of BCA, I’ve built a strong base in data structures, modern web technologies, and database systems — sharpening my logic, creativity, and ability to turn concepts into real-world solutions.
          </p>
        </div>

        <h3
          className="section-subheading"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Certifications & Courses
        </h3>

        <div className="certification-list" data-aos="zoom-in"
          data-aos-delay="1000">
          <div
            className="certification-item"
          >
            <a
              href="https://files.codingninjas.in/certi_image756593f9c9a8b2eca25a538227e10bcbf0bcea.jpg?trk=public_profile_see-credential"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-name"
            >
              <Atom size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              Basics of React – Coding Ninjas
            </a>
            <span className="cert-date">Issued: July 2025</span>
          </div>

          <div
            className="certification-item"
          >
            <a
              href="https://www.freecodecamp.org/certification/khushisingh20/responsive-web-design?trk=public_profile_see-credential"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-name"
            >
              <TabletSmartphone size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              Responsive Web Design – freeCodeCamp
            </a>
            <span className="cert-date">Issued: July 2025</span>
          </div>

          <div
            className="certification-item"
          >
            <a
              href="https://api2.sololearn.com/v2/certificates/CC-NWQJHIAE/image/png?t=638901351670711870&trk=public_profile_see-credential"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-name"
            >
              <Terminal size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              Web Development – Sololearn
            </a>
            <span className="cert-date">Issued: August 2025</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
