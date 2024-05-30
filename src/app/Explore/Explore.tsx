import { HeadingTwo } from "../../components";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
const Explore = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const controls = useAnimation();

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const footerSections = document.querySelectorAll<HTMLElement>(".section");
    footerSections.forEach((section) => {
      if (scrollPosition >= section.offsetTop - window.innerHeight * 0.8) {
        controls.start({ x: 0, opacity: 1, transition: { duration: 1 } });
      }
    });
  }, [scrollPosition, controls]);
  return (
    <div className="text-center bg-gray-100 py-16">
      <motion.div
        // id="animatediv"
        // initial={{ opacity: 0, x: -100 }}
        // animate={controls}
        // transition={{
        //   duration: 1,
        //   ease: "easeOut",
        // }}
        initial={{ x: 100, opacity: 0 }}
        animate={controls}
      >
        <HeadingTwo classes="text-5xl leading-snug font-semibold text-gray-900">
          Explore Our AI-Powered <br />
          <span>Themes</span>
        </HeadingTwo>
      </motion.div>
    </div>
  );
};
export default Explore;
