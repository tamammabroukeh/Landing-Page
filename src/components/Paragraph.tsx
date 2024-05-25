import { IParagraph } from "../interfaces/Interfaces";
const Paragraph = ({ classes, title }: IParagraph) => {
  return <p className={classes}>{title}</p>;
};
export default Paragraph;
