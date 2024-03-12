import React from "react";
import bannerJif from "../../../assets/banner/SoPp.gif";
import Button from "../../../Components/Button";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="max-w-screen-xl py-20 flex items-center justify-between mx-auto">
      <div className="space-y-5">
        <h1 className="text-4xl font-medium">
          Solve Your Institute Math Problem By Sharing.
        </h1>
        <p className="text-xl pb-3">
          Math hero is a Platform where Students can share their institute math
          problem and get solution from another student.
        </p>
        <Link to="/login">
          <button>
            <Button title={"Get start"}></Button>
          </button>
        </Link>
      </div>
      <img src={bannerJif} alt="" />
    </div>
  );
};

export default Banner;
