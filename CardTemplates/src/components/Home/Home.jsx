import React from "react";

function Home() {
  return (
    <>
      <div className="mx-auto w-[65vw] flex flex-grow bg-red-50 ">
        <div className="w-1/2  flex justify-center items-center p-10 ">
          <img
            src="https://images.pexels.com/photos/17827032/pexels-photo-17827032/free-photo-of-landscape-of-green-hills.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center px-7">
          <h1 className="text-6xl font-medium mb-1  text-red-500 hover:translate-y-1 hover:scale-110  duration-300">
            Unleash Creativity
          </h1>
          <h6 className="text-4xl font-medium ml-2 my-6 ">with </h6>
          <h1 className="text-6xl font-medium mb-1 text-red-500 hover:translate-y-1 hover:scale-110  duration-300">
            My Card Templates!
          </h1>

          <div className="mt-16 ">
            <button class="bg-red-500 text-white border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
              <span class="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              See More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
