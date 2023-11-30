import React from "react";

function Cards() {
  return (
    <>
      <div className=" bg-slate-600 rounded-lg flex w-1/2 h-1/2">
        <div className="w-1/4 relative bg-blue-500 rounded"></div>
        <div className="w-3/4 h-56 flex flex-col">
          <h3 className="text-3xl my-2 text-white shadow-orange-500 ">
            Your Name
          </h3>
          <h4 className="">Position</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nemo
            impedit saepe. Veritatis doloribus autem sed ipsum reiciendis omnis
            similique possimus porro assumenda, tempore expedita.
          </p>
        </div>
      </div>
    </>
  );
}

export default Cards;
