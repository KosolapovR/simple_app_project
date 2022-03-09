import React, { ButtonHTMLAttributes } from "react";
import cn from "classnames";

import "./index.scss";

interface IButtonProps extends ButtonHTMLAttributes<any> {
  title: string;
  onClick: () => void;
}
const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ title, onClick, disabled }, ref) => {
    return (
      <button
        ref={ref}
        className={cn("button", { button_disabled: disabled })}
        disabled={disabled}
        onClick={onClick}
      >
        {title}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
