import { IHeadingTwo } from "../interfaces/Interfaces";
const HeadingTwo = ({ classes, title, children }: IHeadingTwo) => {
  let content;
  if (children) {
    content = <h2 className={classes}>{children}</h2>;
  } else {
    content = <h2 className={classes}>{title}</h2>;
  }
  return content;
};
export default HeadingTwo;
