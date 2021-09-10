import React from 'react'

import Navbar from '../Navbar';

function Content() {
  return (
    <div className="contentPage">
      <Navbar />
      <div className="slider">
        <div className="slides">
            <div id="slide-1">
              <img src="https://signage.uiowa.edu/sites/signage.uiowa.edu/files/slides/1920x1080.jpg" alt="slideshow slide"/>
              <a href="#slide-2" className="nextButton right"><i className="fa fa-arrow-right"></i></a>
            </div>
            <div id="slide-2">
                <img src="https://signage.uiowa.edu/sites/signage.uiowa.edu/files/slides/1920x1080.jpg" alt="slideshow slide"/>
                <a href="#slide-1" className="nextButton left"><i className="fa fa-arrow-left"></i></a>
                <a href="#slide-3" className="nextButton right"><i className="fa fa-arrow-right"></i></a>
            </div>
            <div id="slide-3">
                <img src="https://signage.uiowa.edu/sites/signage.uiowa.edu/files/slides/1920x1080.jpg" alt="slideshow slide"/>
                <a href="#slide-2" className="nextButton left"><i className="fa fa-arrow-left"></i></a>
            </div>
        </div>
        <div className="slideNav">
            <a href="#slide-1" className="linkButton">1</a>
            <a href="#slide-2" className="linkButton">2</a>
            <a href="#slide-3" className="linkButton">3</a>
        </div>
      </div>
    </div>
  )
}

export default Content
