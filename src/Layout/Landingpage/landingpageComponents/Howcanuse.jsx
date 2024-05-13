import React from "react";
import img from "../../../assets/banner/Screenshot_5.png";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button";
import img2 from "../../../assets/Landingpage/imga.png";
const Howcanuse = () => {
  return (
    <div
    id="how"
      className="py-72 max-w-screen-2xl mx-auto"
    >
      <h1 className="text-4xl pb-10 font-bold text-center">
        How to create a Problem
      </h1>
      <div className="flex  max-w-screen-xl gap-5 mx-auto items-center justify-between">
        <div className="w-full shadow-2xl md:w-[70%]">
          <img src={img} alt="" />
        </div>
        <div className="space-y-5 w-[40%]">
          <h1 className="text-4xl font-bold">How you can use this site</h1>
          <p className="text-xl tracking-wider">
            Navigating through the world of mathematics has never been easier
            with Math hero. Our platform is designed to support students,
            educators, and math enthusiasts at every level, from basic
            arithmetic to advanced calculus and beyond. Here's how you can
            leverage the full potential of our website:
          </p>
          <Link to="/dashoard/problem" className="inline-block">
            <Button title={"Explore more"}></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Howcanuse;
