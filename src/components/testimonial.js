import React from 'react';
import { useTranslation } from 'react-i18next';
import './testimonial.css';

const Testimonial = () => {
  const { t } = useTranslation(); 
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{t('heading1')}</h2>
          <span className="testimonial-text11 thq-body-small">
            {t('content1')}
          </span>
        </div>
        <div className="thq-grid-2">
          {/* Personal Information */}
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container13">
                  <strong className="thq-body-large">{t('personalInfoTitle')}</strong>
                  <span className="thq-body-small">
                    {t('personalInfo')}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Education Details */}
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container15">
                  <strong className="thq-body-large">{t('educationTitle')}</strong>
                  <span className="thq-body-small">
                    {t('educationDetails')}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Business Life */}
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container17">
                  <strong className="thq-body-large">{t('businessLifeTitle')}</strong>
                  <span className="thq-body-small">
                    {t('businessLife')}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Hobbies and Interests */}
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container19">
                  <strong className="thq-body-large">{t('hobbiesTitle')}</strong>
                  <span className="thq-body-small">
                    {t('hobbies')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
