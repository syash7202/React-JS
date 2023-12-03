import React from "react";
import LOGO from "../../assets/about-logo.png";

function About() {
  return (
    <>
      <div className="mx-auto w-[65vw] flex flex-col flex-grow bg-red-50 ">
        <div className="mt-10 ml-5 mr-5 flex justify-center items-center">
          <img src={LOGO} alt="" className="h-30 w-60 mx-5" />
          <p className="text-justify  py-2  text-lg">
            <p className="text-5xl text-red-600 inline mx-3">Cards</p>a labor of
            love aimed at honing my skills in React and Tailwind CSS. This
            website, aptly named "Cards" is a manifestation of my dedication to
            mastering these cutting-edge technologies while providing users with
            a platform to create beautifully customized greeting cards.
            <br />
            <br />
            As you navigate through the site, you'll discover a variety of card
            templates meticulously designed to cater to different sentiments.
            Register and enjoy free templates, with one change in information
            the templates changes the information inside it. Feel free to reach
            out on LinkedIn or Github for any issues or suggestions.
          </p>
        </div>

        <p className="text-justify mx-5 text-lg ">
          While this project is a testament to my commitment to personal growth
          and skill development, it also serves as a practical application of my
          learnings. As you explore Cards, keep in mind that every line of code
          and every design element reflects my dedication to refining my craft.
          <br />
        </p>
        <p className="text-justify mx-5 py-2 text-lg">
          Your feedback is invaluable, and I invite you to be a part of this
          journey as Cards continues to evolve and improve. Thank you for
          visiting, and I hope you enjoy the experience as much as I enjoyed
          crafting it.
          <br />
          <br />
          Happy card-making!"
        </p>
        <p className=" mx-16 py-2 text-2xl text-right hover:text-red-600">
          Yash Sharma
        </p>
      </div>
    </>
  );
}

export default About;
