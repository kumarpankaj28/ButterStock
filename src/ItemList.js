import React from "react";

function ItemList(){
    return(
        <div>
            {/* Start of item list section */}
      <div class="bg-white">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900">
            Our Products
          </h2>

          <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div class="group relative shadow-xl p-5 rounded-md">
              <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none  ">
                <img
                  src={require("./images/kk220.png").default}
                  alt="Front of men&#039;s Basic Tee in black."
                  class="w-full h-full object-center object-contain lg:w-full lg:h-full"
                />
              </div>
              <div class="mt-4 flex justify-around ">
                <div>
                  <h3 class="text-sm font-semibold text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Home-made Ghee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">50 gm to 5 ltr</p>
                </div>
                <p class="text-md font-medium text-green-600">INR 35</p>
              </div>
            </div>

            <div class="group relative shadow-xl p-5 rounded-md">
              <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none shadow-xl">
                <img
                  src={require("./images/butter2.png").default}
                  alt="Front of men&#039;s Basic Tee in black."
                  class="w-full h-full object-center object-contain lg:w-full lg:h-full"
                />
              </div>
              <div class="mt-4 flex justify-around ">
                <div>
                  <h3 class="text-sm font-semibold text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Butter
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">weight</p>
                </div>
                <p class="text-md font-medium text-green-600">INR 35</p>
              </div>
            </div>
            <div class="group relative shadow-xl p-5 rounded-md">
              <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none shadow-xl">
                <img
                  src={require("./images/kk500.png").default}
                  alt="Front of men&#039;s Basic Tee in black."
                  class="w-full h-full object-center object-contain lg:w-full lg:h-full"
                />
              </div>
              <div class="mt-4 flex justify-around">
                <div>
                  <h3 class="text-sm font-semibold text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Ice-Cream
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">weight</p>
                </div>
                <p class="text-md font-medium text-green-600">INR 35</p>
              </div>
            </div>
            <div class="group relative shadow-xl p-5 rounded-md">
              <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none shadow-xl">
                <img
                  src={require("./images/butter6.jpg").default}
                  alt="Front of men&#039;s Basic Tee in black."
                  class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div class="mt-4 flex justify-around">
                <div>
                  <h3 class="text-sm font-semibold text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Curd
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Weight</p>
                </div>
                <p class="text-md font-medium text-green-600">INR 35</p>
              </div>
            </div>
            {/* <!-- More products... --> */}
          </div>
          <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div class="group relative shadow-xl p-5 rounded-md">
              <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none shadow-xl">
                <img
                  src={require("./images/butter6.jpg").default}
                  alt="Front of men&#039;s Basic Tee in black."
                  class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>

            <div class="group relative shadow-xl p-5 rounded-md">
              <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none shadow-xl">
                <img
                  src={require("./images/butter6.jpg").default}
                  alt="Front of men&#039;s Basic Tee in black."
                  class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div class="group relative shadow-xl p-5 rounded-md">
              <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none shadow-xl">
                <img
                  src={require("./images/butter6.jpg").default}
                  alt="Front of men&#039;s Basic Tee in black."
                  class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
            <div class="group relative shadow-xl p-5 rounded-md">
              <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none shadow-xl">
                <img
                  src={require("./images/butter6.jpg").default}
                  alt="Front of men&#039;s Basic Tee in black."
                  class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>

            {/* <!-- More products... --> */}
          </div>
        </div>
        <div className="flex justify-center items-center pb-4">
          <button className="p-3 bg-red-700 rounded-full text-white font-semibold px-10">
            View All
          </button>
        </div>
      </div>
        </div>
    );

}

export default ItemList; 