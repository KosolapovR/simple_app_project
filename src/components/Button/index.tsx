import React, { ButtonHTMLAttributes } from "react";
import './index.scss'

interface IButtonProps extends ButtonHTMLAttributes<any>{
  title: string
  onClick: () => void
}
const Button = React.forwardRef<HTMLButtonElement,IButtonProps>(({title, onClick, disabled, }, ref) => {
  return (
    <button ref={ref} className={'button'} disabled={disabled} onClick={onClick}>{title}</button>
  );
});

Button.displayName = 'Button'

export default Button;
