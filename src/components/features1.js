import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features1-container2 thq-section-max-width">
        <div className="features1-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features1-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features1-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features1-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features1-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features1-tab-horizontal1"
          >
            <div className="features1-divider-container1">
              {activeTab === 0 && <div className="features1-container3"></div>}
            </div>
            <div className="features1-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features1-tab-horizontal2"
          >
            <div className="features1-divider-container2">
              {activeTab === 1 && <div className="features1-container4"></div>}
            </div>
            <div className="features1-content2">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features1-tab-horizontal3"
          >
            <div className="features1-divider-container3">
              {activeTab === 2 && <div className="features1-container5"></div>}
            </div>
            <div className="features1-content3">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1527167598984-8802d8028eea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjA3MjQyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    'Watch my personal YouTube videos, including work-related content and stunning drone footage.',
  feature3Description:
    'View a visually appealing gallery featuring a mix of personal and professional images.',
  feature1ImgAlt: 'Projects Portfolio Image',
  feature2Title: 'YouTube Videos',
  feature3ImgAlt: 'Photo Gallery Image',
  feature1Title: 'Projects Portfolio',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjA3MjQyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: 'Photo Gallery',
  feature2ImgAlt: 'YouTube Videos Image',
  feature1Description:
    'Explore a showcase of my software and technology projects with detailed descriptions, images, and code snippets.',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1585163218050-6e5058205b5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjA3MjQyMnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features1.propTypes = {
  feature2ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
}

export default Features1
