import { IButton } from "../interfaces/Interfaces";
const Button = ({ classes, children, ...rest }: IButton) => {
  return (
    <button
      className={`${classes} transition ease-in-out delay-150 duration-300 cursor-pointer w-full p-2 rounded-md text-white`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
