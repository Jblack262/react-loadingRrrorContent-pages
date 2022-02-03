import React from 'react'

import Navbar from '../Navbar';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

function Content() {
  
  return (
    <div className="contentPage">
      <Navbar />

      <section className="contentBar Header">
        <h1>Oceans are cool beacause they make for an easy color scheme.</h1>
        <p>I don't really know if I like this color scheme at all. But it does look pretty nice and I'm certainly way to lazy to change it now so it is staying.</p>

        <div className="bottomWave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      <section className="slideShow">
        <div className="slides">
          <div id="slide-1" className="slide">
            <h1 className="title">Oceans</h1>
            <img src="https://images.wallpaperscraft.com/image/single/ocean_surf_foam_sea_water_117846_1600x900.jpg" alt="example slide"/>
            <a href="#slide-2" className="nextButton right" tabIndex="-1"><AiOutlineArrowRight/></a>
          </div>
          <div id="slide-2" className="slide">
            <h1 className="title">More Ocean</h1>
            <img src="https://images.wallpaperscraft.com/image/single/ocean_surf_foam_134695_1600x900.jpg" alt="example slide"/>
            <a href="#slide-1" className="nextButton left" tabIndex="-1"><AiOutlineArrowLeft/></a>
            <a href="#slide-3" className="nextButton right" tabIndex="-1"><AiOutlineArrowRight/></a>
          </div>
          <div id="slide-3" className="slide">
            <h1 className="title">Even More Ocean</h1>
            <img src="https://images.wallpaperscraft.com/image/single/ocean_surf_aerial_view_137639_1600x900.jpg" alt="example slide"/>
            <a href="#slide-2" className="nextButton left" tabIndex="-1"><AiOutlineArrowLeft/></a>
          </div>
        </div>
        <div className="slideNav">
            <a href="#slide-1" className="linkButton">1</a>
            <a href="#slide-2" className="linkButton">2</a>
            <a href="#slide-3" className="linkButton">3</a>
        </div>
      </section>

      
      <section className="contentBar">
        <div className="topWave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>
        <h1>This is a cool website about Earth's lovely oceans.</h1>
        <p>About 70% of the world is covered by water, and 97% of this water lies in the oceans and seas. The oceans have a major effect upon the weather, and they moderate the world’s climate. For example, water absorbs the Sun’s heat near the equator and surface currents distribute it around the earth warming the air and nearby landmasses in winter and cooling them in summer. Deep water circulation also helps distribute heat globally.</p>

        <div className="bottomWave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

        <footer>
          <div className="row top">
              <div className="col">
                  <ul>
                      <li className="title">Services</li>
                      <li><a href="/">Web Design</a></li>
                      <li><a href="/">Hosting</a></li>
                      <li><a href="/">Development</a></li>
                  </ul>
                  <ul>
                      <li className="title">About</li>
                      <li><a href="/">Company</a></li>
                      <li><a href="/">Team</a></li>
                      <li><a href="/">Jobs</a></li>
                  </ul>
              </div>
              <div className="col desc">
                  <h3>Title</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, est nulla porro voluptates maiores inventore qui odio sunt dolorum illo.</p>
              </div>
        </div>
        <div className="row">
            <div className="socials">
                <ul>
                    <li><a href="/"><i className='fa fa-facebook-square'></i></a></li>
                    <li><a href="/"><i className='fa fa-instagram'></i></a></li>
                    <li><a href="/"><i className='fa fa-twitter-square'></i></a></li>
                    <li><a href="/"><i className='fa fa-snapchat-square'></i></a></li>
                </ul>
            </div>
            <p>Company Name © 2021</p>
        </div>
    </footer>
    </div>
  )
}

export default Content
