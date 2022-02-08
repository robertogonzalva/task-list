import React from "react";

function Button({ className, children, variant, ...rest }) {
  const variants = {
    primary: "bg-slate-200 text-slate-800 py-2 px-3 font-bold rounded",
    secondary: "text-red-400 py-2 px-3 font-bold",
  };
  return (
    <button className={[variants[variant], className].join(" ")} {...rest}>
      {children}
    </button>
  );
}

export default Button;
