import React from "react";
import { useLoaderData } from "react-router-dom";

function Developer() {
  const data = useLoaderData();
  return (
    <>
      <div className="mx-auto w-[65vw] flex flex-grow bg-red-50 ">
        <div className=" ml-10 w-1/3 flex justify-center items-center mr-5">
          <span>
            <img
              src={data.avatar_url}
              alt="png"
              className="rounded-md shadow-xl border-4 border-red-500 border-spacing-3 "
            />
          </span>
        </div>
        <div className="flex flex-col justify-center  ml-20">
          <p className="text-7xl font-medium mb-5  text-red-500 hover:translate-y-1 hover:scale-110  duration-300 text-center">
            {data.name}
          </p>
          <p className="text-xl font-thin mb-2 ml-2 ">
            Username : {data.login}
          </p>
          <p className="text-xl font-thin mb-2 ml-2">
            Public Repositories : {data.public_repos}{" "}
          </p>
          <p className="text-xl font-thin mb-2 ml-2">
            Mail :{" "}
            <a
              href="mailto:workspacesyash7202@gmail.com"
              className="hover:text-blue-600"
            >
              workspacesyash7202@gmail.com
            </a>
          </p>
          <p className="text-xl font-thin mb-2 ml-2">
            Github :{" "}
            <a
              href="https://github.com/syash7202"
              target="_blank"
              className="hover:text-blue-600"
            >
              syash7202@github
            </a>
          </p>
          <p className="text-xl font-thin mb-2 ml-2">
            LinkedIn :{" "}
            <a
              href=" https://www.linkedin.com/in/syash7202"
              target="_blank"
              className="hover:text-blue-600"
            >
              syash7202@linkedin
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Developer;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/syash7202");
  return response.json();
};
