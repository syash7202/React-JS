import React from "react";
import { Link } from "react-router-dom";
import plane from "../../assets/paper-plane.png";
import menu from "../../assets/menu-burger.png";

function Header() {
  return (
    <>
      <div className="shadow-md w-full sticky top-0 flex justify-evenly py-6 bg-white">
        <div className=" ml-10 w-1/3 flex justify-center items-center mr-5">
          <span>
            <img src={plane} alt="png" className="h-10 w-10 " />
          </span>
          <Link to="/">
            <h1 className="text-3xl mx-2 text-red-500 font-bold">CARDS</h1>
          </Link>
        </div>

        <div className="hidden md:flex md:justify-evenly md:items-center text-black md:text-xl md:w-1/3 ">
          <Link to="/">
            <div className="hover:text-white  hover:bg-red-500 hover:drop-shadow-xl px-3 py-1 rounded">
              HOME
            </div>
          </Link>
          <Link to="/about">
            <div className="hover:text-white  hover:bg-red-500 px-3 py-1 rounded">
              ABOUT{" "}
            </div>
          </Link>
          <Link to="/templates">
            <div className="hover:text-white  hover:bg-red-500 px-3 py-1 rounded">
              TEMPLATES{" "}
            </div>
          </Link>
          <Link to="/developer">
            <div className="hover:text-white  hover:bg-red-500 px-3 py-1 rounded">
              DEVELOPER{" "}
            </div>
          </Link>
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

      {/* <div className="w-full shadow-md sticky top-0 flex justify-evenly py-2">
        <div className="w-1/2 flex justify-start items-center p-3">
          <span>
            <img src={plane} alt="png" className="h-7 w-7 " />
          </span>
          <Link to="/">
            <h1 className="text-2xl mx-2 text-red-500 font-bold">CARDS</h1>
          </Link>
        </div>
        <div className="w-1/2 flex justify-end items-center p-3 gap-3 static md:absolute ">
          <div>
            <ul>
              <li>1234</li>
              <li>1234</li>
              <li>1234</li>
              <li>1234</li>
            </ul>
          </div>
          <button className="flex justify-center items-center ">
            <img src={menu} alt="" className="  h-7 w-7 md:hidden " />
          </button>

          <div className="hidden ">login</div>
          <div className="hidden">get Started</div>
        </div>
      </div> */}
    </>
  );
}

export default Header;
