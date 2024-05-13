import React, { useEffect, useState } from "react";
import success from "../../../../../assets/audio/success.mp3";
import error from "../../../../../assets/audio/error.mp3";

const Add = () => {
  const [arr, setArr] = useState([]);
  const [firstv, setFirstv] = useState(0);
  const [sec, setSec] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [clicks, setClicks] = useState(false);

  useEffect(() => {
    const firstValue = Math.ceil(Math.random() * 20);
    const secondValue = Math.ceil(Math.random() * 20);
    const first = Math.ceil(Math.random() * 40);
    const second = Math.ceil(Math.random() * 40);
    const ans = firstValue + secondValue;
    setAnswer(ans);
    setFirstv(firstValue);
    setSec(secondValue);
    setArr([first, second, ans]);
  }, [clicks]);
  console.log(arr);

  const output = arr.sort(() => Math.random() - 0.5);

  const handleMatch = (i) => {
    if (i === answer) {
      const audios = new Audio(success);
      audios.play();
      setClicks(!clicks)
    } else {
      const audios = new Audio(error);
      audios.play();
      setClicks(!clicks)
    }
  };

  return (
    <div className="grid grid-cols-10 gap-5 max-w-screen-xl mx-auto my-10">
      <div className="col-span-7 h-[80vh] select-none shadow-xl rounded-md badge-ghost">
        <div className="w-full flex items-center justify-center h-full">
          <h1 className="text-[9em] font-bold">
            {firstv} + {sec} = ?
          </h1>
        </div>
      </div>
      <div className="col-span-3 gap-5 grid grid-rows-3">
        {output.map((i) => (
          <div
            onClick={() => handleMatch(i)}
            className="badge-ghost hover:badge-success cursor-pointer select-none shadow-xl rounded-md"
          >
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
