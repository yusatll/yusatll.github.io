import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Features1 from '../components/features1';
import CTA from '../components/cta';
import Features2 from '../components/features2';
import Steps from '../components/steps';
import FileTree from '../components/FileTree';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Testimonial from '../components/testimonial';

import { useTranslation } from 'react-i18next'; 

import './home.css';

const Home = (props) => {
  const { t } = useTranslation(); 

  return (
    <div className="home-container">
      <Helmet>
        <title>{t('title')}</title>
      </Helmet>
      <Navbar
        link5={t('contact')}
        logoSrc="/channels4_profile-1500h.jpg"
      ></Navbar>
      <Hero
        text={
          <Fragment>
            <span className="home-text10 thq-body-large">
              <span>{t('hero_text_line1')}</span>
              <br></br>
              <span>{t('hero_text_line2')}</span>
              <br></br>
              <span>{t('hero_text_line3')}</span>
              <br></br>
            </span>
          </Fragment>
        }
        action1={t('github')}
        action2={t('linkedin')}
        heading1="Ahmet Yuşa Telli"
        image1Src="https://photos.app.goo.gl/VUgARzkSainhaFd36"
        image2Src="https://photos.app.goo.gl/4eEnQM56VsLNSNPk7"
      ></Hero>
      <div id="about-me">
        <Testimonial></Testimonial>
      </div>
      <div id="projects">
        <Steps
          step1Title={t('step1_title')}
          feature3Description={t('step1_description')}
        ></Steps>
      </div>
      <Features1
        feature1Title={t('feature1_title')}
        feature2Title={t('feature2_title')}
        feature3Title={t('feature3_title')}
        feature1ImgSrc="/gtu.jpg"
        feature2ImgSrc="/dji_flag_blvdn.jpg"
        feature3ImgSrc="/dji_fatih.jpg"
        feature1Description={t('feature1_description')}
        feature2Description={t('feature2_description')}
        feature3Description={t('feature3_description')}
      ></Features1>
      <CTA></CTA>
      <Features2
        feature1Title={t('feature4_title')}
        feature2Title={t('feature5_title')}
        feature3Title={t('feature6_title')}
        feature1ImgSrc="/DJI_0052.gif"
        feature2ImgSrc="/followme.jpg"
        feature3ImgSrc="/githubcoder.png"
        feature1Description={t('feature4_description')}
        feature2Description={t('feature5_description')}
        feature3Description={t('feature6_description')}
      ></Features2>

      <FileTree />
      <div id="contact">
        <Contact
          email1="ayusatelli@outlook.com"
          phone1="+90 553 5758822"
          content3={t('contact_content3')}
          content5={t('contact_content5')}
        ></Contact>
      </div>
      <Footer
        content3={t('footer_content3')}
        content4={t('footer_content4')}
        content31={
          <Fragment>
            <span className="home-content3 thq-body-small">
              {t('footer_content3')}
            </span>
          </Fragment>
        }
      ></Footer>
    </div>
  );
};

export default Home;
