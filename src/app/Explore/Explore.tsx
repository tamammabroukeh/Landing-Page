import { HeadingTwo } from "../../components";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
const Explore = () => {
  const controls = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const section = document.getElementById("animatediv");
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;
        if (scrollPosition > windowHeight + sectionHeight / 2) {
          controls.start({ opacity: 1, x: 0 });
        } else {
          controls.start({ opacity: 0, x: -100 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);
  return (
    <div className="text-center bg-gray-100 py-16">
      <motion.div
        id="animatediv"
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
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
