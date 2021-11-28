import React from "react";
import Items from "./Items";

const Products=()=>{

    return(
        <div>
            <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <Items title="Deshi Ghee" weight="500gm" price="800" imgsrc={require("./images/kk220.png").default}/>
              <Items title="Deshi Ghee" weight="500gm" price="800" imgsrc={require("./images/cheese.jpg").default}/>
              <Items title="Deshi Ghee" weight="500gm" price="800" imgsrc={require("./images/butter7.jpg").default}/>
              <Items title="Deshi Ghee" weight="500gm" price="800" imgsrc={require("./images/butter3.jpg").default}/>
              {/* <!-- More products... --> */}
            </div>
          <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <Items title="Deshi Ghee" weight="500gm" price="800" imgsrc={require("./images/icream7.jpg").default}/>
              <Items title="Deshi Ghee" weight="500gm" price="800" imgsrc={require("./images/milk.jpg").default}/>
              <Items title="Deshi Ghee" weight="500gm" price="800" imgsrc={require("./images/icream2.jpg").default}/>
              <Items title="Deshi Ghee" weight="500gm" price="800" imgsrc={require("./images/milk2.jpg").default}/>

             {/* <!-- More products... --> */}
            </div>
        </div>
        
    )
}

export default Products;