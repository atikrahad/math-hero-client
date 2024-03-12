import React from "react";

const Button = ({ title }) => {
  return (
    <div className="px-4 py-2 rounded-sm border border-black bg-white font-medium text-xl hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
      {title}
    </div>
  );
};

export default Button;
