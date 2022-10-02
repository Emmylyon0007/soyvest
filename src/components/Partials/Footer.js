import React from 'react';
import './css/footer.css'

export default function Footer() {
    return (
        <div className="footer">
                <div className="container-fluid">
                    <div className="row"> 
                        <div className="col-md-2 p-0">
                            <ul className="footer-content pl-0">
                                <li>
                                    <p className="footer-heading"> Company</p>
                                    <p className="footer-body">About Us</p>
                                    <p className="footer-body">FAQ</p>
                                    <p className="footer-body">Our Blog</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2 p-0">
                            <ul className="footer-content pl-0">
                                <li>
                                    <p className="footer-heading"> Information</p>
                                    <p className="footer-body">How it work</p>
                                    <p className="footer-body">Security</p>
                                    <p className="footer-body">Contact</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-2 p-0">
                            <ul className="footer-content pl-0">
                                <li>
                                    <p className="footer-heading"> Useful</p>
                                    <p className="footer-body">Careers</p>
                                    <p className="footer-body">Privacy Policy</p>
                                    <p className="footer-body">Terms of Use</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 p-0">
                            <ul className="footer-content pl-0">
                                <li>
                                    <p className="footer-heading"> Subscribe to Our Newsletter</p>
                                    <p className="footer-body pb-3">Time is the most precious thing you have when bootstrapping. You can't take time.</p>                                  
                                </li>
                                <div class="subscribe">
                                <form class="form-inline my-2 my-lg-0">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Enter Your Email" aria-label="Search"/>
                                    <button class="btn my-2 my-sm-0 subscribe-btn" type="submit">Submit</button>
                                </form>
                                    {/* <input className="pl-3 footer-input" type="text" id="enter" placeholder="Enter Your Email"/>
                                    <button className="subscribe-btn" id="clear">Subscribe</button> */}
                                </div> 
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
    )
}
