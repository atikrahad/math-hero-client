import React from "react";
import bannerJif from "../../../assets/banner/SoPp.gif";
import Button from "../../../Components/Button";
import { Link } from "react-router-dom";
import Stutas from "./Stutas";

const Banner = () => {
  return (
    <div
    id="banner"
      
      className="max-w-screen-2xl relative py-20  mx-auto"
    >
      <div className="max-w-screen-xl mx-auto gap-5 md:flex-row flex flex-col-reverse items-center justify-between md:py-20">
        <div className="space-y-5 ">
          <h1 className="text-2xl text-center md:text-start md:text-4xl font-medium">
            Solve Your Institute Math Problem By Sharing.
          </h1>
          <p className="text-xl text-center md:text-start pb-3">
            Math hero is a Platform where Students can share their institute
            math problem and get solution from another student.
          </p>
          <Link to="/login">
            <button>
              <Button title={"Get start"}></Button>
            </button>
          </Link>
        </div>
        <img className="w-[50%] select-none" src={bannerJif} alt="" />
      </div>
      <Stutas></Stutas>
    </div>
  );
};

export default Banner;
