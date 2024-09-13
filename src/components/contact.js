import React from 'react';
import { useTranslation } from 'react-i18next';

import './contact.css';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-contact20 thq-section-padding">
      <div className="contact-max-width thq-section-max-width">
        <div className="contact-section-title">
          <span className="thq-body-small">{t('content2')}</span>
          <div className="contact-content1">
            <h2 className="thq-heading-2">{t('contact_heading1')}</h2>
            <p className="thq-body-large">{t('contact_content1')}</p>
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-content2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact-contact-info1">
              <div className="contact-content3">
                <h3 className="contact-text13 thq-heading-3">{t('emailLabel')}</h3>
                <p className="thq-body-large">{t('content3')}</p>
              </div>
              <a
                href="mailto:ayusatelli@outlook.com?subject="
                className="contact-email thq-body-small"
              >
                {t('email1')}
              </a>
            </div>
          </div>
          <div className="contact-content4">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact-contact-info2">
              <div className="contact-content5">
                <h3 className="contact-text15 thq-heading-3">{t('phoneLabel')}</h3>
                <p className="thq-body-large">{t('content4')}</p>
              </div>
              <a
                href="tel:+905535758822"
                className="contact-phone thq-body-small"
              >
                {t('phone1')}
              </a>
            </div>
          </div>
          <div className="contact-content6">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact-contact-info3">
              <div className="contact-content7">
                <h3 className="contact-text17 thq-heading-3">{t('officeLabel')}</h3>
                <p className="thq-body-large">{t('content5')}</p>
              </div>
              <span className="contact-address2 thq-body-small">
                {t('address')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
