import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonArgType = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode,
  variant?: "Default" | "Outline",
};

function Button({ children, variant = "Default", ...props }: ButtonArgType) {
  const base =
    "px-3 py-1.5 m-2 text-sm rounded-md duration-100 hover:cursor-pointer \
    hover:shadow-md";

  const variants = {
    Default: "bg-blue-300 text-slate-700 hover:bg-blue-200 hover:shadow-blue-200/20",
    Outline: "border border-blue-200/50 bg-slate-750 text-blue-200 hover:bg-slate-700",
  };

  const classes = `${base} ${variants[variant]}`;

  return (
    <button
      {...props}
      className={classes}
    >
      {children}
    </button>
  )
}

export default Button;
