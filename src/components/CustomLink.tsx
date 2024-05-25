import { ILink } from "../interfaces/Interfaces";
import { Link } from "react-router-dom";
const CustomLink = ({ id, title, to, classes }: ILink) => {
  return (
    <Link
      key={id}
      to={to}
      className={`${classes} transition ease-in-out delay-150 duration-300`}
    >
      {title}
    </Link>
  );
};

export default CustomLink;
