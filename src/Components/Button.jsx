import React from "react";

const Button = ({ title }) => {
  return (
    <div className="px-4 py-2 rounded-sm border border-ghost badge-ghost font-medium text-xl hover:shadow-[4px_4px_0px_0px_] transition duration-200">
      {title}
    </div>
  );
};

export default Button;
