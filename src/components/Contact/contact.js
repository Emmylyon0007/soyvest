import React from 'react';
import NavBar from '../Partials/Navbar';
import Footer from '../Partials/Footer';
import '../Contact/contact.css'


export default function contact() {
    return (
        <div>
            <NavBar />
            <div className="contact_jumbotron mb-0">
                <div className="container career_inner">
                    <div className="container row pl-5 pb-5 pt-5">
                        <div className="col-md-6" style={{textAlign: 'left'}}>
                            <small className='home_subtext mb-0'>Home / </small><span style={{color:'#D3D3D3'}}>Contact Us </span>
                            <p className="home_text mb-0">Contact Us Today!</p>
                            <p className="contact_subtext pr-5">We enhance value by building connections across the food value chain.</p>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
            <div className="contactpt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-3">
                            <ul className="contact_details">
                                <li className="contact_details_header mb-4 mt-5">
                                    <p>Find Us:</p>
                                </li>
                                <li className="contact_details_text mb-4">
                                    <p><i class="fa fa-map-marker mr-2" aria-hidden="true"></i>34C Waziri Maccido Road,Malali Kaduna, Kaduna , Nigeria.</p>
                                </li>
                                <li className="contact_details_text mb-4">
                                    <p><i class="fa fa-envelope-o mr-2" aria-hidden="true"></i>Email Address:info@soyvest.com</p>
                                </li>
                                <li className="contact_details_text">
                                    <p><i class="fa fa-phone mr-2" aria-hidden="true"></i>Phone Number:(+234) 703-2244-195</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="upload_card pt-5 col-md-6">
                            <div className="contact_cv card pl-5 pr-5 pb-3 pt-4">
                                <p className="submit_cv"> Send Us A Message</p>
                                <p className="submit_cv_text pb-3">Join over 8 million people who rely on us to give them the best rates in exchange. We’re reliable and offer a secured platform for all transactions.</p>
                                <div className="row">

                                    <div className="col-md-6 col-sm-5 pt-2 pr-0">
                                        <div className="input-group mb-0">
                                            <input type="text" className="contact-form" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-5 pt-2 pr-0">
                                        <div className="input-group mb-0">
                                            <input type="text" className="contact-form" placeholder="Last Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-5 pt-2 pr-0">
                                        <div className="input-group mb-0">
                                            <input type="text" className="contact-form" placeholder="Email Address" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-5 pt-2 pr-0">
                                        <div className="input-group mb-0">
                                            <textarea type="text" className="contact-form "rows="3" placeholder="Your Message" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-md-12 pt-4 pr-0">
                                    <button 
                                        type="button" 
                                        className="message-btn"
                                    >
                                        Send A Message
                                    </button>
                                </div>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div style={{padding: '50px'}}></div>
            <Footer />
        </div>
    )
}
