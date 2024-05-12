import React, { useEffect, useState } from "react";

const Add = () => {
  const [arr, setArr] = useState([]);
  const [firstv, setFirstv] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const firstValue = Math.ceil(Math.random() * 20);
    const secondValue = Math.ceil(Math.random() * 20);
    const first = Math.ceil(Math.random() * 40);
    const second = Math.ceil(Math.random() * 40);
    const ans = firstValue + secondValue;
    setFirstv(firstValue);
    setSec(secondValue);
    setArr([first, second, ans]);
  }, []);
  console.log(arr);

  const output = arr.sort(() => Math.random() - 0.5);

  return (
    <div className="grid grid-cols-10 gap-5 max-w-screen-xl mx-auto my-10">
      <div className="col-span-7 h-[80vh] shadow-xl rounded-md badge-ghost">
        <div className="w-full flex items-center justify-center h-full">
          <h1 className="text-[9em] font-bold">
            {firstv} + {sec} = ?
          </h1>
        </div>
      </div>
      <div className="col-span-3 gap-5 grid grid-rows-3">
        {output.map((i) => (
          <div className="badge-ghost shadow-xl rounded-md">
            <div className="w-full h-full flex items-center justify-center">
              <h1 className="text-7xl font-semibold">{i}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Add;
