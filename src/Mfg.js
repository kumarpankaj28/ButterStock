import React from "react";

function Mfg() {
  return (
    <div>
            <h1 className="text-3xl flex justify-center  py-4">How Our Products Are Made ?</h1>
        <div className="md:block hidden  ">
            <img  alt="this is img" src={require("./images/Web_1920_–_2.png").default} />
        </div>
        <div className="block md:hidden ">
        <img  alt="this is img" src={require("./images/iPhone_XR_XS_Max_11_–_1.png").default} />

        </div>
        
       

      <div class="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center bg-gray-100">
        

        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
          <h1 className="text-3xl capitalize">We guarantee purity and quality.</h1>
        
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium, ratione quos nostrum vel quibusdam inventore debitis
            rerum deleniti delectus quaerat dolorem, quo ut reiciendis nobis?
          </p>
        </div>
        <div>
          <img
            class="object-scale-down "
            src={require("./images/cow2.jpg").default}
            alt=""
          />
        </div>

      </div>
    </div>
  );
}

export default Mfg;
