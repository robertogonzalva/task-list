import React from "react";

function Button({ className, children, variant, ...rest }) {
  const variants = {
    primary: "bg-gray-200 text-gray-800 p-1 m-1 font-bold rounded",
    secondary: "text-red-400 p-1 m-1 font-bold",
  };
  return (
    <button className={[variants[variant], className].join(" ")} {...rest}>
      {children}
    </button>
  );
}

export default Button;
