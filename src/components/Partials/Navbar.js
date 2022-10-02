import React from 'react';
import { Link } from 'react-router-dom';
import volt from '../../images/logos/volt.png'
import './css/navbar.css'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-xl navbar-light">
                <div className="container-fluid pt-4">
                    <Link className="navbar-brand navbar-container" to="/"><span className='dsh'>SOY</span><span className='xchange'>VEST</span></Link>
                    {/* <img src={volt} /> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link 
                                    className="mr-4 menu" 
                                    // onClick={() => {
									// 	window.location.href = `/`
									// }}
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="mr-4 menu" 
                                    // onClick={() => {
                                    //     window.location.href = `/about-us`
                                    // }}
                                    to="/about-us"
                                >
                                    About
                                </Link>
                                {/* <Link className="mr-4 menu" to="/about-us">About</Link> */}
                            </li>
                            {/* <li className="nav-item">
                                <Link className="mr-4 menu" to="/how-it-works">How it works</Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link className="mr-4 menu" to="/career">Careers</Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link 
                                    className="mr-4 menu" 
                                    onClick={() => {
                                        window.location.href = `/blog`
                                    }}
                                    to=""
                                >
                                    Blog
                                </Link>
                            </li> */}
                            <li className="nav-item">
                                <Link 
                                    className="mr-4 menu" 
                                    // onClick={() => {
                                    //     window.location.href = `/contact`
                                    // }}
                                    to="/contact"
                                >
                                        Contact Us
                                </Link>
                                {/* <Link className="mr-4 menu" to="/contact">Contact Us</Link> */}
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </div>
    )
}
