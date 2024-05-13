import React from "react";

const Stutas = () => {
  return (
    <div className="absolute -bottom-16 w-[90%] md:w-[80%] lg:w-[60%] left-[5%] md:left-[10%] lg:left-[20%]">
      <div className="flex items-center w-full gap-2 mx-auto md:gap-6 lg:gap-10 justify-between">
        <div className="w-full h-28 flex-col md:h-32 lg:h-40 rounded-lg flex items-center justify-center bg-green-200">
          <h1 className="text-2xl font-bold text-green-600">All users</h1>
          <p className="text-4xl text-green-600 font-bold">100 +</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center h-28 md:h-32 lg:h-40 rounded-lg bg-pink-200">
        <h1 className="text-2xl font-bold text-pink-600">Problems</h1>
          <p className="text-4xl text-pink-600 font-bold">100 +</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center h-28 md:h-32 lg:h-40 rounded-lg bg-blue-100">
        <h1 className="text-2xl font-bold text-blue-600">All users</h1>
          <p className="text-4xl text-blue-600 font-bold">100 +</p>
        </div>
      </div>
    </div>
  );
};

export default Stutas;
