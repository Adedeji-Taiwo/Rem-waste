import { JSX } from 'react';
import { ButtonProps } from '../../types/button';



const Button = ({className, children, onClick, type, onMouseEnter, onMouseLeave}:ButtonProps):JSX.Element => {
  return (
    <button type={type} className={`${className} relative flex w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-xl before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max`} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
    </button>
  )
}

export default Button;