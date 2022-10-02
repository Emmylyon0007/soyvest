import React from 'react';
import NavBar from '../Partials/Navbar';
import Footer from '../Partials/Footer';


export default function Blog() {
    return (
      <div>
      <NavBar />
      <div className="home_jumbotron mb-0">
          <div className="how_it_works_inner">
              <div className="row">
                  <div className="col-md-6" style={{textAlign: 'left'}}>
                      <p className="home_text pr-5 pt-5 mb-0">Recycle With <span className='logo-color'>PetVolt!</span></p>
                      <p className="home_subtext pr-5">We're reliable and offer a secured platform for plastic recycling.</p>
                      
                  </div>
                  <div className="col-md-6"></div>
              </div>
          </div>
      </div>
      <Footer />
  </div>
    )
}
