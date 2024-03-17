import React from "react";
import bannerJif from "../../../assets/banner/SoPp.gif";
import Button from "../../../Components/Button";
import { Link } from "react-router-dom";
import img from "../../../assets/Landingpage/img.png";

const Banner = () => {
  return (
    <div
    id="banner"
      style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
      className="max-w-screen-2xl py-20  mx-auto"
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-20">
        <div className="space-y-5 ">
          <h1 className="text-4xl font-medium">
            Solve Your Institute Math Problem By Sharing.
          </h1>
          <p className="text-xl pb-3">
            Math hero is a Platform where Students can share their institute
            math problem and get solution from another student.
          </p>
          <Link to="/login">
            <button>
              <Button title={"Get start"}></Button>
            </button>
          </Link>
        </div>
        <img src={bannerJif} alt="" />
      </div>
    </div>
  );
};

export default Banner;
