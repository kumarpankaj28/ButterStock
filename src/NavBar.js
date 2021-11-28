import React,{useState} from "react";
import { Link } from "react-router-dom";

import './Banner.css'
 

// const btn = document.querySelector("button.mobile-menu-button");
// const menu = document.getElementById("menuMobile");
 

 

// btn.addEventListener("click", () => {
// 	menu.classList.toggle("hidden");
// });



function NavBar(){
	const[isOpen,setOpen]=useState(true);
	function navShow(){
		setOpen(!isOpen)
	   	
	}
    return(

		<div>
        <div className="font-serif nvbar">
		<nav className="bg--500 shadow-lg sticky top ">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>
							<Link to  ="/home" className="flex items-center py-4 px-2 text-red-700 font-semibold text-2xl ">
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

					<div className="hidden md:flex items-center ">
					
					</div>
					<div className="hidden md:flex  items-center space-x-3 ">
						<Link to="login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-red-700 hover:text-white transition duration-300">Log In</Link>
						<Link to="login" className="py-2 px-2 font-medium text-white bg-red-700 rounded hover:bg-red-400 transition duration-300">Register</Link>
						<span className="pl-6"> <i className="far fa-user text-2xl rounded-full hover:text-red-800  "></i></span>
					</div>
					
					<div className="md:hidden flex items-center">
						<button onClick={navShow} className="outline-none mobile-menu-button">
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
			{/* <div id="menuMobile" className={classNames("md:hidden",{ isOpen ?"hidden":null}}> */}
			<div id="menuMobile" className="md:hidden">
				<div className={isOpen ?"hidden":null}>
				<ul className="">
					<li><Link to="/" className="block text-sm px-2 py-4 text-gray-500 hover:bg-red-700 font-semibold">Home</Link></li>
					<li><Link to="services" className="block text-sm px-2 py-4 text-gray-500 hover:bg-red-700 transition duration-300">Services</Link></li>
					<li><Link to="about" className="block text-sm px-2 py-4 text-gray-500 hover:bg-red-700 transition duration-300">About</Link></li>
					<li><Link to="contact" className="block text-sm px-2 py-4 text-gray-500 hover:bg-red-700 transition duration-300">Contact Us</Link></li>
					<div className=" md:flex items-center space-x-3 py-4  justify-center ">
						<Link to="login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-red-700 hover:text-white transition duration-300">Log In</Link>
						<Link to="login" className="py-2 px-2 font-medium text-white bg-red-700 rounded hover:bg-red-400 transition duration-300">Register</Link>
					</div>	
				</ul>
				</div>
			</div>
			
		</nav>
     </div>
	</div>
		
    )
	
}

export default NavBar;