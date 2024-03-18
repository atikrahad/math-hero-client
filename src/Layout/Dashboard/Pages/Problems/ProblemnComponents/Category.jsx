import React, { useEffect, useState } from "react";
import Button from "../../../../../Components/Button";

const Category = () => {
  const [datas, setDatas] = useState([])
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_url}/problems`)
    .then(dat => dat.json())
    .then(res=> setDatas(res))
  },[setDatas])

  return (
    <div className="flex flex-col gap-3">
      <div className=" flex flex-wrap gap-2 min-h-96 ">
        {datas.map((item, index) => (
          <button key={index}>
            <Button title={item.mathCategory} />
          </button>
        ))}
      </div>
      <div className="shadow-md gap-10 flex items-center justify-center h-60 rounded-md badge-ghost">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">1</h1>

          <h1 className="text-4xl font-bold border-t-2">100</h1>
        </div>
        <div>
          <div className="flex items-center gap-5 justify-between">
            <h1 className="text-2xl font-medium">Easy:</h1>
            <p className="text-2xl">54</p>
          </div>
          <div className="flex items-center gap-5 justify-between">
            <h1 className="text-2xl font-medium">Medium:</h1>
            <p className="text-2xl">43</p>
          </div>
          <div className="flex items-center gap-5 justify-between">
            <h1 className="text-2xl font-medium">High:</h1>
            <p className="text-2xl">33</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
