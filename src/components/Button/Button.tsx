import clsx from "clsx";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type ButtonVariant = "contained" | "outlined" | "text";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  children?: React.ReactNode;
  variant: ButtonVariant;
}

function Button({ variant, className, children, ...rest }: ButtonProps) {
  const baseStyles =
    "mx-2 p-3 rounded text-sm font-medium text-primary transition-transform duration-150";

  const variantStyles = {
    contained:
      "button-contained hover:shadow-lg active:transform active:scale-95",
    outlined:
      "border button-outlined bg-transparent hover:shadow-lg active:transform active:scale-95",
    text: "bg-transparent text-primary hover:shadow-lg active:transform active:scale-95",
  };

  const classes = clsx(baseStyles, variantStyles[variant], className);

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}

export default React.memo(Button);
