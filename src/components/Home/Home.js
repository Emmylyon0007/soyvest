import React from 'react';
import plastic from '../../images/img/plastic.png'
// import afro1 from '../../images/banner/home-banner.jpg'
import work from '../../images/img/work.jpg'
import green from '../../images/img/green.jpg'
import weather from '../../images/img/weather.png'
import price from '../../images/img/price.png'
import analysis from '../../images/img/analysis.png'
import optimize from '../../images/img/optimize.png'
import men from '../../images/img/men.jpg'
import cows from '../../images/img/cows.jpg'
import woman from '../../images/img/woman.jpg'
import women from '../../images/img/women.jpg'
import drone from '../../images/img/drone.jpg'


import secure from '../../images/img/secure.png'
import market from '../../images/img/market.png'
import trust from '../../images/img/trust.png'
import icon1 from '../../images/icons/icon1.png'
import icon2 from '../../images/icons/icon2.png'
import icon3 from '../../images/icons/icon3.png'
import love from '../../images/img/love.png';
import nigga from '../../images/img/nigga.png';
import karen from '../../images/img/karen.png';
import carbon from '../../images/img/carbon.jpeg'
import economy from '../../images/img/economy.jpeg'
import garbage from '../../images/img/garbage.jpeg'
import planet from '../../images/img/city.webp'
import '../Home/Home.css'
import NavBar from '../Partials/Navbar';
import Footer from '../Partials/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="home_jumbotron mb-0">
                <div className="how_it_works_inner">
                    <div className="row">
                        <div className="col-md-6 petvolt-text" style={{textAlign: 'left'}}>
                            <p className="home_text pt-5 mb-0">Redefining Agriculture With <span className='logo-color'>SoyVest!</span></p>
                            <p className="home_subtext pr-5">We identify innovative solutions in commodities trading.</p>
                            {/* <img src={plastic} width="50%" height="30%" /> */}
                            <div className='row mt-5 '>
                                <div className='col-3'style={{textAlign: 'right'}} >
                                    <Link 
                                        style={{textAlign: 'right', textDecoration:'none'}} 
                                        type="button" 
                                        class="about-btn"
                                        to='/about-us'
                                        // onClick={() => {
                                        //     window.location.to = `/about-us`
                                        // }}
                                    >   
                                    About
                                    </Link>
                                </div>
                                <div className='col-6'>
                                    <Link 
                                        style={{ textDecoration:'none'}} 
                                        type="button" 
                                        class=" contact-btn "
                                        to='/contact'
                                        // onClick={() => {
                                        //     window.location.href = `/contact`
                                        // }}
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
            {/* Get Paid for how it works */}
            <div className="paid_works">
                <div className="container">
                    <div className="row pb-4">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <p className="homebody_text">Building Sustaineable Food Solutions in Africa through Technology</p>
                            <span className="row">
                                <p className="col-md-1"></p>
                                <p className="paid-subtext col-md-10">Using innovation and harnessed data, we create enabling environments for key players in the food value chain to maximize output and yield untapped profits..</p>
                                <p className="col-md-1"></p>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
        
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 safe">
                                <img src={work} width="100%" height="100%" alt="logo" />
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-5">
                                <div>
                                    <p className="body-text">Harnessing the Power OF Technology</p>
                                    {/* <p className="body-subtext">Join over 8 million people who rely on us to give them the best rates in exchange. We’re reliable and offer a secured platform for all transactions.</p> */}
                                    <p className='body-subtext'>
                                    Leveraging the power of ICT to address information asymmetries and to unlock innovation potential, E-agriculture is seen as an emerging field focusing on the enhancement of agricultural and rural development through improved information and communication processes, which is where our expertise lies.                                  </p>
                                </div>
                                   

                            </div>
                        </div>
                    </div>

                    {/* <div className="container">
                        <div className="row">
                            <div className="col-md-6 safe">
                                <img src={green} width="100%" height="100%" alt="logo" />
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-5">
                                <div>
                                    <p className="body-text">Strengthening the local food supply chain</p>
                                    
                                    <p className='body-subtext'>
                                    At Soyvest, we have aligned our business models with Sustainable Development Goal 2, to end all forms of hunger while promoting food security across the globe. Our tech-infused platform drives an enabling environment for farmers and sets up more efficient food distribution channels. We have also developed two Strategic Business Units, FC Foods and FC Shops, that facilitate stakeholder access to maximum profitability in the food value chain.                                    </p>
                                </div>
                                   

                            </div>
                        </div>
                    </div> */}
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 safe">
                            <p className="body-text">Aerial Imagery</p>
                                    {/* <p className="body-subtext">Join over 8 million people who rely on us to give them the best rates in exchange. We’re reliable and offer a secured platform for all transactions.</p> */}
                                    <p className='body-subtext'>
                                    For efficient field planning, agricultural drones can be used to mount sensors to evaluate moisture content in the soil, terrain conditions, soil conditions, soil erosion, nutrient content, and fertility of the soil. 
                                    They can help in effective crop surveillance by inspecting the field with infrared cameras and based on their real-time information, farmers can take active measures to improve the condition of plants in the field.</p>                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-5" style={{marginTop:'170px'}}>
                                <div>

                                <img src={drone} width="100%" height="100%" alt="logo" />

                                  
                                </div>
                                   



                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 safe">
                                <img src={men} width="100%" height="100%" alt="logo" />
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-5">
                                <div>
                                    <p className="body-text">Strengthening the local food supply chain</p>
                                    {/* <p className="body-subtext">Join over 8 million people who rely on us to give them the best rates in exchange. We’re reliable and offer a secured platform for all transactions.</p> */}
                                    <p className='body-subtext'>
                                    Human inventiveness, scientific breakthroughs, and technological advancements have given the world a pioneering array of tools to transform the food-growing system and alleviate its repercussions on nature and climate.    </p>
                                </div>
                                   

                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 safe">
                            <p className="body-text">Strengthening the local food supply chain</p>
                                    {/* <p className="body-subtext">Join over 8 million people who rely on us to give them the best rates in exchange. We’re reliable and offer a secured platform for all transactions.</p> */}
                                    <p className='body-subtext'>
                                    At Soyvest, we have aligned our business models with Sustainable Development Goal 2, to end all forms of hunger while promoting food security across the globe. Our tech-infused platform drives an enabling environment for farmers and sets up more efficient food distribution channels. </p>                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-5" style={{marginTop:'170px'}}>
                                <div>

                                <img src={women} width="100%" height="100%" alt="logo" />

                                  
                                </div>
                                   



                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 safe">
                                <img src={woman} width="100%" height="100%" alt="logo" />
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-5">
                                <div>
                                    <p className="body-text">Controlled environment agriculture</p>
                                    {/* <p className="body-subtext">Join over 8 million people who rely on us to give them the best rates in exchange. We’re reliable and offer a secured platform for all transactions.</p> */}
                                    <p className='body-subtext'>
                                    Controlled environment agriculture systems are designed to provide optimal growing conditions for crops and prevent disease and pest damage. They encompass a variety of systems that take a technology-based approach to farming.  </p>
                                </div>
                                   

                            </div>
                        </div>
                    </div>

                    {/* <div className="container">
                        <div className="row">
                            <div className="col-md-6 safe">
                                <img src={cows} width="100%" height="100%" alt="logo" />
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-5">
                                <div>
                                    <p className="body-text">Strengthening the local food supply chain</p>
                                    
                                    <p className='body-subtext'>
                                    At Soyvest, we have aligned our business models with Sustainable Development Goal 2, to end all forms of hunger while promoting food security across the globe. Our tech-infused platform drives an enabling environment for farmers and sets up more efficient food distribution channels. We have also developed two Strategic Business Units, FC Foods and FC Shops, that facilitate stakeholder access to maximum profitability in the food value chain.                                    </p>
                                </div>
                                   

                            </div>
                        </div>
                    </div> */}

                    
                    
                    {/* <div className="container">
                        <div className="row">
                            <div className="col-md-6 safe">
                            <p className="body-text">Strengthening the local food supply chain</p>
                                   
                                    <p className='body-subtext'>
                                    At Soyvest, we have aligned our business models with Sustainable Development Goal 2, to end all forms of hunger while promoting food security across the globe. Our tech-infused platform drives an enabling environment for farmers and sets up more efficient food distribution channels. We have also developed two Strategic Business Units, FC Foods and FC Shops, that facilitate stakeholder access to maximum profitability in the food value chain.                                    </p>                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-5">
                                <div>

                                <img src={cows} width="100%" height="100%" alt="logo" />

                                  
                                </div>
                                   



                            </div>
                        </div>
                    </div> */}
                </div>
            </div>


            
            {/* end of get paid for how it works section * loving DHS */}
            {/* <div className="paid">
                <div className="container">
                    <div className="row pb-4">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <p className="paid-text mb-0">Recycle with us in six simple steps</p>
                            <span className="row">
                                <p className="col-md-1"></p>
                                <p className="paid-subtext col-md-10 mb-0">Join over 8 million people who rely on us to give them the best rates in exchange.</p>
                                <p className="col-md-1"></p>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
        
                    <div className="row icons">
                        <div className="col-md-3">
                            <ul className="icons">
                                <li className="icon">
                                    <img src={icon2} width="50%" height="50%" alt="logo" />
                                </li>
                                <li className="icon-text">
                                    <p className='mb-0'>Blending</p>
                                </li>
                                <li className="icon-subtext">
                                    <p>Two-factor authentication is required for all withdrawals and API usage.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1">
                            <p className="transform1">  </p>
                        </div>
                        <div className="col-md-3">
                            <ul className="icons">
                                <li>
                                    <img className="" src={icon1} width="50%" height="50%" alt="logo" />
                                </li>
                                <li className="icon-text">
                                    <p className='mb-0'>Label & Lid Removal</p>
                                </li>
                                <li className="icon-subtext">
                                    <p>Two-factor authentication is required for all withdrawals and API usage.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1">
                        <p className="transform2"></p>
                        </div>
                        <div className="col-md-3">
                            <ul className="icons">
                                <li>
                                    <img className="" src={icon3} width="50%" height="50%" alt="logo" />
                                </li>
                                <li className="icon-text">
                                    <p className='mb-0'>Hot Washing</p>
                                </li>
                                <li className="icon-subtext">
                                    <p>Two-factor authentication is required for all withdrawals and API usage.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row icons">
                        <div className="col-md-3">
                            <ul className="icons">
                                <li className="icon">
                                    <img src={icon2} width="50%" height="50%" alt="logo" />
                                </li>
                                <li className="icon-text">
                                    <p className='mb-0'>Friction</p>
                                </li>
                                <li className="icon-subtext">
                                    <p>Two-factor authentication is required for all withdrawals and API usage.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1">
                            <p className="transform1">  </p>
                        </div>
                        <div className="col-md-3">
                            <ul className="icons">
                                <li>
                                    <img className="" src={icon1} width="50%" height="50%" alt="logo" />
                                </li>
                                <li className="icon-text">
                                    <p className='mb-0'>Metal Detection</p>
                                </li>
                                <li className="icon-subtext">
                                    <p>Two-factor authentication is required for all withdrawals and API usage.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1">
                        <p className="transform2"></p>
                        </div>
                        <div className="col-md-3">
                            <ul className="icons">
                                <li>
                                    <img className="" src={icon3} width="50%" height="50%" alt="logo" />
                                </li>
                                <li className="icon-text">
                                    <p className='mb-0'>Drying</p>
                                </li>
                                <li className="icon-subtext">
                                    <p>Two-factor authentication is required for all withdrawals and API usage.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div> */}
            {/* FAQ For How it works sections */}
            
            {/* <div className="dhs">
                <div className="container-fluid">
                    <div className="row">
                        <div className="love col-md-6">
                            <img src={love} width="84px" height="84px" alt="logo" />
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <div className="row">
                        <div className="love col-md-6 dhs-text">
                            1,000+ people are benefiting from SoyVest.
                        </div>
                        

                    </div>
                    <div className="row">
                        <div className="col-md-3 card-margin">
                            <div className="card card-color mb-3">
                                <div className="card-image">
                                    <img src={nigga} width="50px" height="50px" alt="logo" />
                                </div>
                                <div className="card-content pr-5">
                                    <p>SoyVest plays a crucial role in commodity products domestically and internationally…  </p>
                                </div>
                                <div className="card-subcontent">
                                    <p>-@thepatwalls</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 card-margin">
                            <div className="card card-color mb-3">
                                <div className="card-image">
                                    <img src={karen} width="50px" height="50px" alt="logo" />
                                </div>
                                <div className="card-content pr-5">
                                    <p>SoyVest plays a crucial role in commodity products domestically and internationally…  </p>
                                </div>
                                <div className="card-subcontent">
                                    <p>-@thepatwalls</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-color mb-3">
                                <div className="card-image">
                                    <img src={nigga} width="50px" height="50px" alt="logo" />
                                </div>
                                <div className="card-content pr-5">
                                    <p>SoyVest plays a crucial role in commodity products domestically and internationally…  </p>
                                </div>
                                <div className="card-subcontent">
                                    <p>-@thepatwalls</p>
                                </div>
                                
                            </div>
                        </div> 


                       

                </div>
            </div> */}

            <div className="paid">
                <div className="container">
                    <div className="row pb-4">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <p className="paid-text mb-0">Benefits of SoyVest</p>
                            <span className="row">
                                <p className="col-md-1"></p>
                                <p className="paid-subtext col-md-10 mb-0">We are happy to have you join our customer base of over 8 million people.</p>
                                <p className="col-md-1"></p>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
        
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card benefit-card-color mb-3">
                                <div className='mt-5'>
                                    <img src={analysis} width="50%" height="46%" alt="logo" />
                                </div>
                                <div className="benefit-card-content">
                                    <p className='benefit-text'>Data and Market analysis tools</p>
                                </div>
                                
                                
                            </div>
                        </div>
                        
                        <div className="col-md-3">
                            <div className="card benefit-card-color mb-3">
                                <div className='mt-5'>
                                    <img src={price} width="58%" height="45%" alt="logo" />
                                </div>
                                <div className="benefit-card-content">
                                    <p className='benefit-text'>Pricing decision making tools </p>
                                </div>
                                
                                
                            </div>
                        </div>
                        
                        <div className="col-md-3">
                            <div className="card benefit-card-color mb-3">
                                <div className='mt-5'>
                                    <img src={optimize} width="58%" height="58%" alt="logo" />
                                </div>
                                <div className="benefit-card-content">
                                    <p className='benefit-text'>Yield Projection and Optimization for farmers all over the country</p>
                                </div>
                                
                                
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card benefit-card-color mb-3">
                                <div className='mt-5'>
                                    <img src={weather} width="70%" height="70%" alt="logo" />
                                </div>
                                <div className="benefit-card-content">
                                    <p className='benefit-text'>GPS and Weather data tracking</p>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;