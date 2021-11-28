import React from "react";
import Products from "./Products";

function ItemListInHome(){
    return(
        <div>
            {/* Start of item list section */}
      <div class="bg-white">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900">
            Our Products
          </h2>
        <Products/>
        
        </div>
        
      </div>
        </div> 
    );

}

export default ItemListInHome; 