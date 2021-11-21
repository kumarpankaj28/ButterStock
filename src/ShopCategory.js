import React from "react";
import './Banner.css'

function ShopCategory() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-">
      <h1 className="text-2xl font-semibold text-center ">Shop by Catagory</h1>
      
      <div class="grid grid-cols-1 gap-6 xl:gap-8 sm:grid-cols-2 lg:grid-cols-4 mx-auto pt-4">
        <div class="box1 bg-blue-200 w-full h-80 aspect-w-1 aspect-h-1 flex justify-center items-end lg:rounded-bl-3xl lg:rounded-tl-3xl "><a href="/"><h1 className="text-center text-xl font-semibold text-white align-text-bottom pb-8 ">Cone Ice-cream</h1> </a> </div>
        <div class="box2 bg-red-300 w-full h-80 aspect-w-1 aspect-h-1 flex justify-center items-end "><a href="/"><h1 className="text-center text-xl font-semibold text-white align-text-bottom pb-8 ">Bowl Ice-cream</h1> </a></div>
        <div class="box3 bg-green-300 w-full h-80 aspect-w-1 aspect-h-1 flex justify-center items-end "><a href="/"><h1 className="text-center text-xl font-semibold text-white align-text-bottom pb-8 ">Fresh Milk</h1> </a></div>
        <div class="box4 bg-cyan-600 w-full h-80 aspect-w-1 aspect-h-1 flex justify-center items-end lg:rounded-tr-3xl lg:rounded-br-3xl"><a href="/"><h1 className="text-center text-xl font-semibold text-white align-text-bottom pb-8 ">Ghee Special</h1> </a></div>
      </div>
    </div>
  );
}

export default ShopCategory;
