// import React, { useState, useEffect } from 'react';
// import './Projects.css';
// import AOS from "aos";
// import "aos/dist/aos.css";

// const projects = [
//   {
//     title: 'Folioforge – Portfolio Generator Website',
//     description:
//       'A React-based portfolio builder where users input their details and instantly preview a portfolio. Built with context API and styled using Tailwind CSS.',
//     image: '/folioforge.jpg',
//     liveLink: 'https://folio-forge-jade.vercel.app/',
//     githubLink: 'https://github.com/Khushisingh-dev/FolioForge',
//   },
//   {
//     title: 'Target 0.8 – A Strategic Number Battle',
//     description:
//       'Target 0.8 – A strategic multiplayer number game where players pick numbers, aim for 80% of the average, and compete to be the closest each round.',
//     image: '/target-0.8.jpg',
//     liveLink: 'https://target-08.vercel.app/',
//     githubLink: 'https://github.com/Khushisingh-dev/Target-0.8',
//   },
//   {
//     title: 'TravelEase – Travel Booking Website',
//     description:
//       'TravelEase is a fully responsive Travel Booking Website built using React.js. It allows users to search, view, and book their trips.',
//     image: '/travelease.jpg',
//     liveLink: 'https://travel-ease-nine.vercel.app/',
//     githubLink: 'https://github.com/Khushisingh-dev/TravelEase',
//   },
// ];

// const Projects = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     AOS.init({
//       duration: 900,
//       once: true,
//     });
//   }, []);

//   const nextProject = () => {
//     setCurrent((prev) => (prev + 1) % projects.length);
//   };

//   const prevProject = () => {
//     setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
//   };

//   const project = projects[current];

//   return (
//     <div className="projects-page">
//       <h2
//         className="page-heading"
//         data-aos="fade-down"
//         data-aos-delay="200"
//       >
//         Crafted with Code
//       </h2>

//       <section
//         className="projects-card"
//       >
//         <div
//           className="project-single-card"

//           key={project.title} // ensure animation triggers when project changes
//         >
//           <img
//             src={project.image}
//             alt={project.title}
//             className="project-image"
//             data-aos="zoom-in"
//             data-aos-delay="600"
//           />
//           <div
//             className="project-content"
//             data-aos="zoom-in"
//             data-aos-delay="800"
//           >
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <div className="project-links" data-aos="zoom-in" data-aos-delay="1000">
//               <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
//               <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
//             </div>
//           </div>
//         </div>

//         <div
//           className="project-navigation"
//           data-aos="zoom-in"
//           data-aos-delay="1200"
//         >
//           <button onClick={prevProject} className="arrow-btn">⟵</button>
//           <button onClick={nextProject} className="arrow-btn">⟶</button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Projects;

import React, { useState, useEffect } from 'react';
import './Projects.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowLeft, ArrowRight } from 'lucide-react'; // 👈 yeh import add karo

const projects = [
  {
    title: 'Folioforge – Portfolio Generator Website',
    description:
      'A React-based portfolio builder where users input their details and instantly preview a portfolio. Built with context API and styled using Tailwind CSS.',
    image: '/folioforge.jpg',
    liveLink: 'https://folio-forge-jade.vercel.app/',
    githubLink: 'https://github.com/Khushisingh-dev/FolioForge',
  },
  {
    title: 'Target 0.8 – A Strategic Number Battle',
    description:
      'Target 0.8 – A strategic multiplayer number game where players pick numbers, aim for 80% of the average, and compete to be the closest each round.',
    image: '/target-0.8.jpg',
    liveLink: 'https://target-08.vercel.app/',
    githubLink: 'https://github.com/Khushisingh-dev/Target-0.8',
  },
  {
    title: 'TravelEase – Travel Booking Website',
    description:
      'TravelEase is a fully responsive Travel Booking Website built using React.js. It allows users to search, view, and book their trips.',
    image: '/travelease.jpg',
    liveLink: 'https://travel-ease-nine.vercel.app/',
    githubLink: 'https://github.com/Khushisingh-dev/TravelEase',
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[current];

  return (
    <div className="projects-page">
      <h2
        className="page-heading"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        Crafted with Code
      </h2>

      <section className="projects-card">
        <div
          className="project-single-card"
          key={project.title} // ensure animation triggers when project changes
        >
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
            data-aos="zoom-in"
            data-aos-delay="600"
          />
          <div
            className="project-content"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links" data-aos="zoom-in" data-aos-delay="1000">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        <div
          className="project-navigation"
          data-aos="zoom-in"
          data-aos-delay="1200"
        >
          <button onClick={prevProject} className="arrow-btn">
            <ArrowLeft size={20} />
          </button>
          <button onClick={nextProject} className="arrow-btn">
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
