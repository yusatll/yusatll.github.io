import React from 'react';
import { useTranslation } from 'react-i18next';
import './cta.css';

const CTA = () => {
  const { t } = useTranslation();

  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta-accent2-bg">
          <div className="cta-accent1-bg">
            <div className="cta-container2">
              <div className="cta-content">
                <span className="thq-heading-2">{t('cta_heading')}</span>
                <p className="thq-body-large">{t('cta_content')}</p>
              </div>
              <div className="cta-actions">
                <a
                  href="mailto:ayusatelli@outlook.com?subject=Let's%20Collaborate"
                  className="thq-button-filled cta-button"
                >
                  {t('cta_action')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
