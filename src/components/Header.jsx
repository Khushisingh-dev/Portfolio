import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Mail,
  Linkedin,
  Github,
  User,
  GraduationCap,
  Code,
  Home,
  Grid
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-out',
      once: true
    });
  }, []);

  const getNavClass = (path) => {
    return `nav-btn ${currentPath === path ? 'active' : 'inactive'}`;
  };

  const getTooltipClass = (path) => {
    return `tooltip-text ${currentPath === path ? 'tooltip-active' : 'tooltip-inactive'}`;
  };

  const icons = [
    { to: '/', icon: <Home size={18} />, label: 'Home' },
    { to: '/about', icon: <User size={18} />, label: 'About' },
    { to: '/education', icon: <GraduationCap size={18} />, label: 'Education' },
    { to: '/projects', icon: <Code size={18} />, label: 'Projects' },
    { href: 'mailto:ksingh237890@gmail.com', icon: <Mail size={18} />, label: 'Email' },
    { href: 'https://linkedin.com/in/khushisingh50', icon: <Linkedin size={18} />, label: 'LinkedIn' },
    { href: 'https://github.com/Khushisingh-dev', icon: <Github size={18} />, label: 'GitHub' },
  ];

  return (
    <div className="footer-container">
      {/* Grid button (mobile only) */}
      {!showIcons && (
        <button
          className="nav-btn grid-toggle"
          onClick={() => setShowIcons(true)}
        >
          <Grid size={20} />
        </button>
      )}

      {/* Footer nav icons */}
      <div className={`footer-nav ${showIcons ? 'show' : ''}`}>
        {icons.map((item, index) => (
          <div
            className="tooltip"
            key={index}
            data-aos={window.innerWidth <= 768 && showIcons ? 'fade-up' : ''}
            data-aos-delay={window.innerWidth <= 768 ? index * 120 : 0}
          >
            {item.to ? (
              <Link to={item.to} className={getNavClass(item.to)}>
                {item.icon}
              </Link>
            ) : (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="nav-btn inactive"
              >
                {item.icon}
              </a>
            )}
            <span
              className={
                item.to
                  ? getTooltipClass(item.to)
                  : 'tooltip-text tooltip-inactive'
              }
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
