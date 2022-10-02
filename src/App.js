import React from "react";
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Partials from "./components/Partials/partials";
import NavBar from "./components/Partials/Navbar";
import Footer from "./components/Partials/Footer";
import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/contact";

function App() {
    return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="about-us" element={ <About /> } />  
					<Route path="about-us" element={ <About /> } />  
					<Route path="blog" element={ <Blog /> } />  
					<Route path="contact" element={ <Contact /> } />
				</Routes>
			</BrowserRouter>
		</div>
    );
}

export default App;
