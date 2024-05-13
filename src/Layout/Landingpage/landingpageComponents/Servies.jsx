import React from "react";
import { FaGamepad, FaNotesMedical } from "react-icons/fa";
import { PiMathOperationsFill } from "react-icons/pi";

const Servies = () => {
  return (
    <div className="min-h-screen  badge-ghost py-40">
      <h1 className="text-center py-20 font-bold text-2xl md:text-4xl">
        How topic you can find this site
      </h1>
      <div className=" max-w-screen-xl gap-5 mx-auto grid grid-cols-1 md:grid-cols-3 ">
        <div className="w-full rounded-2xl flex items-center p-5 space-y-2 md:p-3 lg:p-10 flex-col text-secondary border-secondary border-2 ">
          <FaGamepad className="text-center text-6xl" />
          <h1 className="text-center text-xl md:text-3xl font-bold">
            Child Math Game
          </h1>
          <p className="text-center">
            Exercise your math muscles and sharpen your skills with our fun and
            challenging addition, subtraction, multiplication, and division
            games. Whether you're a beginner or a math whiz, our games offer a
            playful way to practice and improve your mental math abilities. Get
            ready to crunch numbers, solve puzzles, and level up your math
            prowess!
          </p>
        </div>
        <div className="w-full rounded-2xl flex items-center p-5 space-y-2 md:p-3 lg:p-10 flex-col text-primary border-primary border-2 ">
          <PiMathOperationsFill className="text-center text-6xl" />
          <h1 className="text-center text-xl md:text-3xl font-bold">
            Math Problem Create
          </h1>
          <p className="text-center">
            Step into our Math Problem Creator, where you can design your own
            math challenges! Whether for practice, homework, or just for fun,
            this tool allows you to customize problems in addition, subtraction,
            multiplication, and division. Tailor the difficulty to suit your
            needs or the needs of your students and generate unique,
            personalized math problems. Get creative and test your mathematical
            limits!
          </p>
        </div>
        <div className="w-full rounded-2xl flex items-center p-5 space-y-2 md:p-3 lg:p-10 flex-col text-success border-success border-2  ">
          <FaNotesMedical className="text-center text-6xl" />
          <h1 className="text-center text-xl md:text-3xl font-bold">
            Users Personal Note
          </h1>
          <p className="text-center">
            Welcome to your Personal Notes section! This space is designed to
            help you keep track of your mathematical journey. Here, you can jot
            down solutions, record tricky problems, or note important math
            concepts. Use this personal area to reflect on your progress,
            organize your thoughts, and keep all your math-related insights in
            one convenient place. It's your own digital math notebook,
            accessible anytime, anywhere!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Servies;
