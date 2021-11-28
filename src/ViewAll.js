import React from "react";
import { Link } from "react-router-dom";

const ViewAll=()=>{
    return(
        <div className="flex justify-center items-center pb-4">
        <button className="p-3 bg-red-700 rounded-full text-white font-semibold px-10"><Link to="services" >View All <i class="far fa-arrow-alt-circle-right pl-2"></i></Link>
          
        </button>
      </div>
    )
}

export default ViewAll;