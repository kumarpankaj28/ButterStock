import React from "react";
 import { Link } from "react-router-dom";
import './Banner.css'
 

// const btn = document.querySelector("button.mobile-menu-button");
// const menu = document.querySelector(".mobile-menu");

// btn.addEventListener("click", () => {
// 	menu.classList.toggle("hidden");
// });



function NavBar(){
    return(

		<div>
        <div className="font-serif nvbar">
		<nav className="bg--500 shadow-lg sticky top ">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>
							<Link  to="/home" className="flex items-center py-4 px-2 text-red-700 font-semibold text-2xl ">
                            {/* <img className="h-8 object-scale-down" src={require('./images/kimmus-kitchen.png').default}  /> */}
							ButterStock
							</Link>
						</div>
						<div className="hidden md:flex items-center space-x-1">
							<Link to="/" className="py-4 px-2 text-gray-500 hover:text-red-700  border-red-700 font-semibold ">Home</Link>
							<Link to="services" className="py-4 px-2 text-gray-500 font-semibold hover:text-red-700 transition duration-300">Services</Link>
							<Link to="about" className="py-4 px-2 text-gray-500 font-semibold hover:text-red-700 transition duration-300">About</Link>
							<Link to="contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-red-700 transition duration-300">Contact Us</Link>
						</div>
					</div>
					<div className="hidden md:flex items-center space-x-3 ">
						<a href="/" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-red-700 hover:text-white transition duration-300">Log In</a>
						<a href="/" className="py-2 px-2 font-medium text-white bg-red-700 rounded hover:bg-red-400 transition duration-300">Register</a>
					</div>
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button">
						<svg className=" w-6 h-6 text-gray-500 hover:text-red-700 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			<div className="hidden mobile-menu">
				<ul className="">
					<li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-red-700 font-semibold">Home</a></li>
					<li><a href="services.js" className="block text-sm px-2 py-4 hover:bg-red-700 transition duration-300">Services</a></li>
					<li><a href="#about" className="block text-sm px-2 py-4 hover:bg-red-700 transition duration-300">About</a></li>
					<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-red-700 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
			
		</nav>
        </div>
	</div>
		
    )
	
}

export default NavBar;