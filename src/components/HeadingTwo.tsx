// import { useEffect, useState } from "react";
import { IHeadingTwo } from "../interfaces/Interfaces";
const HeadingTwo = ({ classes, title, children }: IHeadingTwo) => {
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [text, setText] = useState("");
  // const [delta, setDelta] = useState(30 - Math.random() * 10);
  // const period = 20;

  // useEffect(() => {
  //   const ticker = setInterval(() => {
  //     tick();
  //   }, delta);
  //   return () => {
  //     clearInterval(ticker);
  //   };
  // }, [text, delta]);

  // const tick = () => {
  //   const updatedText = isDeleting
  //     ? title?.substring(0, text.length - 1)
  //     : title?.substring(0, text.length + 1);
  //   setText(updatedText || "");
  //   if (isDeleting) {
  //     setDelta((prevDelta) => prevDelta / 2);
  //   }
  //   if (!isDeleting && updatedText === title) {
  //     setIsDeleting(true);
  //     setDelta(period);
  //   } else if (isDeleting && updatedText === "") {
  //     setIsDeleting(false);
  //     setDelta(100);
  //   }
  // };
  let content;
  if (children) {
    content = <h2 className={classes}>{children}</h2>;
  } else {
    // content = <h2 className={classes}>{text}</h2>;
    content = <h2 className={classes}>{title}</h2>;
  }
  return content;
};
export default HeadingTwo;
