import React from 'react'

import { Helmet } from 'react-helmet'

import './not-found.css'

const NotFound1 = (props) => {
  return (
    <div className="not-found1-container1">
      <Helmet>
        <title>Ahmet Yusa Telli</title>
      </Helmet>
      <h3>OOPS! PAGE NOT FOUND</h3>
      <div className="not-found1-container2">
        <h1 className="not-found1-text2">404</h1>
      </div>
      <div className="not-found1-container3">
        <h2 className="not-found1-text3">
          WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
        </h2>
      </div>
    </div>
  )
}

const NotFound = () => (
  <div>
    <h1>404 Page Not Found</h1>
    <p>This is the general NotFound handler.</p>
  </div>
);

export default NotFound1;
export { NotFound };
