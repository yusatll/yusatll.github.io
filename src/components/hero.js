import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Script from 'dangerous-html/react';
import './hero.css';

const Hero = (props) => {
  const { images1, images2, heading1, action1, action2, text } = props;

  return (
    <div className="hero-header78">
      <div className="hero-column thq-section-padding thq-section-max-width">
        <div className="hero-content1">
          <h1 className="thq-heading-1">{heading1}</h1>
          <p>
            {text ?? (
              <Fragment>
                <p className="hero-text5 thq-body-large">
                  <span>
                    Explore my projects, videos, and more to see my passion for
                    technology and innovation.
                  </span>
                </p>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero-actions">
          <a
            href="https://github.com/yusatll"
            target="_blank"
            rel="noreferrer noopener"
            className="hero-button1 thq-button-filled"
          >
            <span className="thq-body-small">{action1}</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ayusatelli/"
            target="_blank"
            rel="noreferrer noopener"
            className="hero-button2 thq-button-outline"
          >
            <span className="thq-body-small">{action2}</span>
          </a>
        </div>
      </div>

      <div className="hero-content2">
        {/* First row of images */}
        <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            {images1.map((image, index) => (
              <img
                key={index}
                alt={image.alt}
                src={image.src}
                className={`hero-placeholder-image${10 + index} thq-img-ratio-1-1 thq-img-scale`}
              />
            ))}
          </div>
          <div className="thq-animated-group-horizontal">
            {images1.map((image, index) => (
              <img
                key={index}
                alt={image.alt}
                src={image.src}
                className={`hero-placeholder-image${16 + index} thq-img-ratio-1-1 thq-img-scale`}
              />
            ))}
          </div>
        </div>

        {/* Second row of images */}
        <div className="hero-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            {images2.map((image, index) => (
              <img
                key={index}
                alt={image.alt}
                src={image.src}
                className={`hero-placeholder-image${22 + index} thq-img-ratio-1-1 thq-img-scale`}
              />
            ))}
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            {images2.map((image, index) => (
              <img
                key={index}
                alt={image.alt}
                src={image.src}
                className={`hero-placeholder-image${28 + index} thq-img-ratio-1-1 thq-img-scale`}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="hero-container2">
          <Script
            html={`<style>
              @keyframes scroll-x {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(calc(-100% - 16px));
                }
              }
              @keyframes scroll-y {
                from {
                  transform: translateY(0);
                }
                to {
                  transform: translateY(calc(-100% - 16px));
                }
              }
            </style>`}
          />
        </div>
      </div>
    </div>
  );
};

Hero.defaultProps = {
  action1: 'GitHub',
  action2: 'LinkedIn',
  heading1: 'Ahmet Yuşa TELLİ',
  text: undefined,
  images1: [
    {
      alt: 'Hero Image 1',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczNNtEuuM9ZabKBM1I20edIh2L8pZB2PTGwSImj3hjvQ0OttyEZHa10CJWvB60qDc6hzHACJu-u82T7lmor4tyUxPzvbfC5qvTwBVYAKVuQMMZk7ArSAWbPmzuudF_779tAtkSMxxmnBqf7PXgPGhzE7bw=w2546-h1433-s-no-gm?authuser=0',
    },
    {
      alt: 'Hero Image 2',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczOihL83sPpa41yM0j1w6wMw4hnV5sBbiLetlXMwIxiJFxPCcB6_vgWFuAoeJ-H2E2moyEFM_fiyUUlBuGRTWnDQuIrSbMtnY0iOzyOsfLib4DdOT3lqVpPuPRhKyTj4A5SxRxntbN1_B41ywMAZZqEfHg=w2546-h1433-s-no-gm?authuser=0',
    },
    {
      alt: 'Hero Image 3',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczP1MDMY2_q3RD9nH5RUcltQAYIveZcgx6nUq2gsPFVUm9La-jKizI0VAcxMj0boHPb2BuousCBYj8tQVrwpJpxvb-MQ86_G2flVXWlHpgEEWNuQx-t1a0Dj6s3YBEWCYJSJ1i2APXp5rYg-4qlG_u9FUw=w2546-h1433-s-no-gm?authuser=0',
    },
    {
      alt: 'Hero Image 4',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczM_PoU0QHPgmaxwlM3DjjmWVJXmYFB2lN3eYi9Db28MKXrUuABnmH8xGA0N4EtHbMLWiRDuXaV4Ojq1GbeRFi2IBQe7nDvCtCq9kNcidyfh3zJrXC1z028xjCLcGUxeryh4myeKs7CkIn8QAFma-zOr6g=w2546-h1433-s-no-gm?authuser=0',
    },
    {
      alt: 'Hero Image 5',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczMB_a4ae2yRsOFcWo-NSEo4rcyGFDONF_XWRbyZw-a9PDUUrrJwnI6cfTHgl8il2Pq0IHw08zi0523SlyySgxJMrZvHn7qL38i5mKzyakvWY_UF1vjk4pyzn2rY1-QlVsTx_XxiQoxOmpav0iz8I1CKlg=w2546-h1433-s-no-gm?authuser=0',
    },
    {
      alt: 'Hero Image 6',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczPL6SqP0-y8pG9eEmaPdXHsA_n0jn5HTnrUbpLgxABDGg4wcDtj5NFWrw9RP0WsTNTaJl1nIBH8ZcY5N76cYr2DhJBAkNC0_S8V61NCgeImVmIdx3NOEx9iW5Pt6o3fCJ03_1pj18TUifTH0WlTw9D4cw=w2546-h1433-s-no-gm?authuser=0',
    },
    {
      alt: 'Hero Image 13',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczN4_XGQXhx6_pel8uCavhYfQwbqzRFtS7FsnwoNA84UYqKuOcPuPsiRquhX84kvJZIdqRd6B6jAVA8rFXulNC50gUSN-w4S33SnbdI03MywVF9rZRc0_dq04vJUzC4KvSM7QcrkbqEdM37k7o59LMBrrQ=w2560-h695-s-no-gm?authuser=0',
    },
  ],
  images2: [
    {
      alt: 'Hero Image 7',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczMxNmGaaIcZLRwwqR7mTpYYopfL22gi7iFpcbZJbrRHGG3y9ahGSzW6NkcWia49RzcZfzZ433ZXpbsL20dRWsgEeuW9graC2K8_u0hjx5mwNyVg1EXWLzCD3w3j8d_as7ze1UXC5Ftip0VkN2yUfYiebw=w1075-h1433-s-no-gm?authuser=0',
    },
    {
      alt: 'Hero Image 8',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczPhL95ER1SqhMQKdLV8YnbCZBLWLgfRjv8KbCfsdeRokzfEaAf0lBHWkcexMwUy6ODLVdgh_QQSL9qu4tqLfN_L9Jd0M7p3oaqh_0pjewPnju0u1qXIm5IuzcVZDDXpF-UOOxvkpBQ15Ed9nMJUqmmyyA=w1075-h1433-s-no-gm?authuser=0',
    },
    {
      alt: 'Hero Image 9',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczNCc9XgiNOZ6rXUTGnZ0oGuTFZigoGPvStTFgtNy6rJDlpFHjzjsxl6YryNfSUZGi5yHemguahonab6YnktZTdpgsJuEibzQ6Wdf-CTZ23CdsgRCMwsGaFkv_AQA6L85ihylWdb0ti3IgW8GVPCDmgYAA=w1075-h1433-s-no-gm?authuser=0',
    },
    {
      alt: 'Hero Image 10',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczNVhugaACD0iXrZYXEPMrEn555El2szT86Se7Ogtjk2QfdhkiUUUf_aztuqodQYGPATX6DQd9sf_2Ts81XD9-PUEXNXy0ytgBMQ1MTMXAt-Ii7LbeDO08rQp2FU4hyBbMIUDGnNo094Xbot6f3jUB6VFA=w1075-h1433-s-no-gm?authuser=0',
    },
    {
      alt: 'Hero Image 11',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczNIDRsWSM6idNNbiJ78k9xYRkYJkMdfFbLG7WnRo8pmx6Q6jA45wEftjw9-m6CnxKW5_AODpIJOG-ZQnjp4fxbO_iGnoh6xIS68TndsnLtPl-uROXDsHW4MLZZ_mUVJh_KbI4yewTkWW5CZfkZDXUkIFw=w1075-h1433-s-no-gm?authuser=0',
    },
    {
      alt: 'Hero Image 12',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczPsn43pr7j7fsxLvefvrlo8hbdqFqKVateRlBeXUhPSXAr4535bgBPfEm0C7gFAptD9L_gRhjKhVgtK1AjhvyBm5pX2QJ2sVLWLm8J-acYnEEwSq4owvuHJflxWnqcANu1zDnq7yNrcMLLrp_jo4mtHMw=w1075-h1433-s-no-gm?authuser=0',
    },
  ],
};

Hero.propTypes = {
  action1: PropTypes.string,
  action2: PropTypes.string,
  heading1: PropTypes.string,
  text: PropTypes.element,
  images1: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ),
  images2: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ),
};

export default Hero;
