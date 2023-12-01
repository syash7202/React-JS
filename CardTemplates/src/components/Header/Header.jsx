import React from "react";
import plane from "../../assets/paper-plane.png";

function Header() {
  return (
    <>
      <div className="shadow-md w-full sticky top-0 flex justify-evenly py-6 bg-white">
        <div className=" ml-10 w-1/3 flex justify-center items-center mr-5">
          <span>
            <img src={plane} alt="png" className="h-10 w-10 " />
          </span>
          <h1 className="text-3xl mx-2 text-red-500 font-bold">CARDS</h1>
        </div>
        <div className=" flex justify-evenly items-center text-black text-xl w-1/3 ">
          <div className="hover:text-white  hover:bg-red-500 hover:drop-shadow-xl px-3 py-1 rounded">
            HOME
          </div>
          <div className="hover:text-white  hover:bg-red-500 px-3 py-1 rounded">
            ABOUT{" "}
          </div>
          <div className="hover:text-white  hover:bg-red-500 px-3 py-1 rounded">
            TEMPLATES{" "}
          </div>
        </div>
        <div className=" flex justify-center items-center text-black w-1/3 mr-5 pr-3">
          <div className="mr-6 text-xl hover:bg-red-500 hover:text-white hover:rounded-lg px-5 py-1">
            LOGIN
          </div>
          <div className="text-xl bg-red-500 rounded-lg text-white hover:drop-shadow-xl p-3">
            Get Started
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
