import React from 'react';
import NavBar from '../Partials/Navbar';
import Footer from '../Partials/Footer';
import one from '../../images/img/1.png';
import two from '../../images/img/2.png';
import three from '../../images/img/3.png';
import plas from '../../images/img/plas.jpg';
import recyc from '../../images/img/recycle.jpg';
import garb from '../../images/img/trash.jpg';
import { Button } from 'react-bootstrap';
import '../About/about.css'

import men from '../../images/img/men.jpg'
import cows from '../../images/img/cows.jpg'
import work from '../../images/img/work.jpg'



export default function About() {
    return (
        <div>
            <NavBar />
            <div className="about_jumbotron mb-0">
                <div className="how_it_works_inner">
                    <div className="row">
                        <div className="col-md-6 petvolt-text" style={{textAlign: 'left'}}>
                            <small className='home_subtext mb-0'>Home / </small><span style={{color:'#D3D3D3'}}>About Us </span>
                            <p className="about_text pr-5 pt-3 pb-0" >We embrace excellence in order to create better ways of doing the things we do.</p>
                            <p className="about_subtext pr-5">Excellence for us is not a watchword, it’s an intrinsic habit.</p>
                            
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>

            <div className="our_story">
                <div className="our-story row mr-0">
                    <div className="col-md-1 pl-0"></div>
                    <div className="col-md-10">
                        <div className="about_story">
                            <div className="card about_card">
                            <div className="row about_info"> 
                                {/* Who we be */}
                                <div className="row about_info pt-5 mt-5">
                                <div className="col-md-5">
                                    <div className='row mb-0'>
                                        <div className='col-md-6'>
                                            <img style={{borderRadius: '5%'}} src={cows} width="100%" height="80%" alt='picture'/>
                                        </div>
                                        <div className='col-md-6'>
                                            <img style={{borderRadius: '5%'}} src={men} width="100%" height="80%" alt='picture'/>  
                                        </div>
                                    </div>
                                    <div className='row mt-0'>
                                        <div className='col-md-12'>
                                            <img style={{borderRadius: '5%'}} src={work} width="100%" height="70%" alt='picture'/>
                                        </div>
                                        {/* <div className='col-md-6'>
                                            <img src={recyc} width="100%" height="80%" alt='picture'/>  
                                        </div> */}
                                    </div>
                                </div>
                                    <div className="col-md-1"></div>
                                    <div className='col-md-4' style={{textAlign: 'left'}}>
                                        <p className="about_story_subtext">We Are SoyVest!</p>
                                        <p className='about_us_subtext' style={{textAlign: 'left'}}>Our business model leverages technology to connect stakeholders with easy access to aggregate farm produce, inputs, and processed food. Our Purpose is to deliver premium value to stakeholders in the food value chain. We are keen on leaving a strong legacy which is why we are focused on building a household name unrivaled in Africa’s digital agricultural space and known for driving food security solutions. We are driven by a mission to be the leading Agtech business promoting sustainability in the global food chain.</p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="">
                                        <p className="about_story_text">Our Core Values</p>
                                        <p className="about_story_smalltext">We embrace excellence in order to create better ways of doing the things we do. Excellence for us is not a watchword, it’s an intrinsic habit. It’s the default mode for all our operational standards so that mediocrity and half-measure become alien to our culture.</p>
                                        <p className="about_story_smalltext"> We have Interpersonal Intelligence and are constantly seeking ways of improving relationships with our personnel, farmers and farm sponsors. This allows us to effectively communicate with clarity.</p>
                                    </div>
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-4 pt-5">
                                    <div className="about_logo">
                                        <div className="dsh-logos">
                                            <img className="pt-2" src={one} width="10%" height="10%" alt="logo" />
                                            <span class="logo-text">Hunger</span>
                                            
                                        </div>
                                        <p className="safe_text pb-3">Our people have a ‘Hunger for More’ attitude which can drive us to eradicate ‘Hunger for All’. We must be seen as people who are constantly and consistently thinking out of the box.</p>
                                        
                                        <div className="dsh-logos">
                                            <img className="pt-2" src={two} width="10%" height="10%" alt="logo" />
                                            <span class="logo-text">Humility</span>
                                            
                                        </div>
                                        <p className="safe_text pb-3">In achieving success, we can never underestimate the value of our personnel, farmers and farm sponsors. Therefore to each one, we accord Respect and Humility.</p>
                                        
                                        <div className="dsh-logos">
                                            <img className="pt-2" src={three} width="10%" height="10%" alt="logo" />
                                            <span class="logo-text">Integrity</span>
                                            
                                        </div>
                                        <p className="safe_text pb-3">In achieving success, we can never underestimate the value of our personnel, farmers and farm sponsors. Therefore to each one, we accord Respect and Humility.</p>
                                            
                                    </div>
                                </div>
                                <div className="pb-3 pt-5 col-md-10">
                                    <hr></hr>
                                </div>
                                
                            </div>
                            </div>
                            <div className="row about_ratings pt-5">
                                <div className="col-md-3">
                                    <ul className="about_numbers">
                                        <li>
                                            <p className="about_numbers">1M+</p>
                                        </li>
                                        <li>
                                            <p className="about_numbers_text">Our cummulative supply should tell you something.</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <ul className="about_numbers">
                                        <li>
                                            <p className="about_numbers">92%</p>
                                        </li>
                                        <li>
                                            <p className="about_numbers_text">We’re reliable and offer a secured platform for agro trading.</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <ul className="about_numbers">   
                                        <li>
                                            <p className="about_numbers">4.9/5.0</p>
                                        </li>
                                        <li>
                                            <p className="about_numbers_text">We’re almost at our benchmarked market.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
            
            {/* <div className="about_banner">
                <div className="container client">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h1 className="text-white">More than mere talks, We are committed</h1>
                        </div>
                        <div className="col-md-3"></div>
                            
                    </div>
                    <p className="text-white">We’re reliable and offer a secured way to  recycle plastics.</p>
                    <Button className="get_started_today" to="/register">Get Started Today</Button>
                </div>
            </div> */}
            <Footer />
        </div>
    )
}
