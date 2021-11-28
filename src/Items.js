import React from "react";

 const Items =(props)=>{
     return(
        <div>
            <div class="group relative shadow-xl p-5 rounded-md">
              <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none  ">
                <img
                  src={props.imgsrc}
                  alt="Front of men&#039;s Basic Tee in black."
                  class="w-full h-full object-center object-contain lg:w-full lg:h-full"
                />
              </div>
              <div class="mt-4 flex justify-around ">
                <div>
                  <h3 class="text-sm font-semibold text-gray-700">
                    <a href="/">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      {props.title}
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">{props.weight}</p>
                </div>
                <p class="text-md font-medium text-green-600">INR {props.price}</p>
                
              </div>
              <button className="bg-green-500 text-white mt-1 rounded-sm py-2 px-2 w-full  text-sm">Add to Cart <i class="fas fa-shopping-cart"></i></button>

            </div>
            
        </div>
     )
 }

 export default Items;  