import React from 'react';
import { useTranslation } from 'react-i18next';
import './steps.css';

const Steps = () => {
  const { t } = useTranslation();

  return (
    <div className="steps-container1 thq-section-padding">
      <div className="steps-max-width thq-section-max-width">
        <div className="steps-container2 thq-grid-2">
          <div className="steps-section-header">
            <h2 className="thq-heading-2">
              {t('steps_header_title')}
            </h2>
            <p className="thq-body-large">
              {t('steps_header_description')}
            </p>
            <div className="steps-actions">
              <button className="thq-button-filled thq-button-animated steps-button">
              <a
                href="https://github.com/yusatll"
                target="_blank"
              >
                <span className="thq-body-small">{t('github')}</span>
              </a>
              </button>
            </div>
          </div>
          <div className="steps-container3">
            <div className="steps-container4 thq-card">
              <h2 className="thq-heading-2">{t('step1_title')}</h2>
              <span className="thq-body-small">{t('step1_description')}</span>
              <label className="steps-text15 thq-heading-3">01</label>
            </div>
            <div className="steps-container5 thq-card">
              <h2 className="thq-heading-2">{t('step2_title')}</h2>
              <span className="thq-body-small">{t('step2_description')}</span>
              <label className="steps-text18 thq-heading-3">02</label>
            </div>
            <div className="steps-container6 thq-card">
              <h2 className="thq-heading-2">{t('step3_title')}</h2>
              <span className="thq-body-small">{t('step3_description')}</span>
              <label className="steps-text21 thq-heading-3">03</label>
            </div>
            <div className="steps-container7 thq-card">
              <h2 className="thq-heading-2">{t('step4_title')}</h2>
              <span className="thq-body-small">{t('step4_description')}</span>
              <label className="steps-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
