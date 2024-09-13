import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next'; 

import './navbar.css';

const Navbar = (props) => {
  const { t, i18n } = useTranslation(); 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="navbar-container">
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <img
          alt={props.logoAlt}
          src={process.env.PUBLIC_URL + '/page_logo.jpg'} 
          className="navbar-image1"
        />
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <nav className="navbar-links1">
            <Link to="/steps" className="thq-body-small thq-link">{t('projects')}</Link>
            <a href="https://www.youtube.com/@byteandflight" target="_blank" rel="noopener noreferrer" className="thq-body-small thq-link">{t('youtube_videos')}</a>
            <a href="https://photos.google.com" target="_blank" rel="noopener noreferrer" className="thq-body-small thq-link">{t('photo_gallery')}</a>
            <a href="#about-me" className="thq-body-small thq-link">{t('about_me')}</a>
            <a href="#contact" className="thq-body-small thq-link">{t('contact')}</a>
          </nav>
          <div className="navbar-buttons1">
            <a
              href="/ahmet_yusa_telli_resume.pdf"
              download
              className="navbar-download-resume thq-button-filled thq-button-animated"
            >
              <span className="thq-body-small">{t('download_resume')}</span>
            </a>
            <button
              onClick={() => changeLanguage(i18n.language === 'en' ? 'tr' : 'en')}
              className="navbar-github1 thq-button-animated thq-button-outline"
            >
              <span className="thq-body-small">{t('turkish')}</span>
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon1">
            {/* Icon SVG paths */}
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          {/* Mobile navigation identical to desktop */}
        </div>
      </header>
    </header>
  );
};

Navbar.defaultProps = {
  logoAlt: 'logo',
  logoSrc: '/page_logo.jpg',
};

Navbar.propTypes = {
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
};

export default Navbar;
