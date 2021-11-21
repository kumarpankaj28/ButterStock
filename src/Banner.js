import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";


function Banner() {
  return (
    
    <div className="font-serif">
      <div className="backgd w-full h-96 flex flex-col justify-center items-center text-center ">
        <h1 className="md:text-8xl text-5xl text-red-700 font-bold">
          ButterStock
        </h1>
        <h1 className="md:text-2xl text-md font-semibold  ">
          Pure and Quality Products
        </h1>
        <button className="text-md bg-red-700 text-white md:w-44 md:text-xl mt-4 rounded-full p-2 px-4 font-semibold hover:bg-red-900">
         <Link to="Services"> Buy from Us </Link>
        </button>
      </div>

        {/* End of intro section */}

        {/* Start of offer section */}

      <section class="  body-font ">
        <div class="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center  "
              alt="hero"
              src={require("./images/butter1.jpg").default}
            />
          </div>

        
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium 0">
              Before The Offer Ends
              <br class=" inline-block md:" />
              Buy Now
            </h1>
            <p class="mb-8 leading-relaxed">
              In our store we have much milk products. We provide health
              ensureness, fresh and quality products.
            </p>
            <div class="flex justify-center items-center">
              {/* <button class="inline-flex text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Buy</button> */}
              <button className="bg-red-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-red-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2">
                Buy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* End of offer section */}

    </div>
  );
}

export default Banner;
