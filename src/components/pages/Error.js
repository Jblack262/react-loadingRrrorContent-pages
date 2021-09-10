import React from 'react';
import {Link} from 'react-router-dom';

function error() {
  return (
    <div className="errorPage">
      {/* <h1 className="background">404</h1> */}
      <div className="content">
        <h1>Page not found</h1>
        <p>We can't seem to find the page you are looking for.</p>
        <button><Link to="/">Return To Homepage</Link></button>
      </div>
    </div>
  )
}

export default error
