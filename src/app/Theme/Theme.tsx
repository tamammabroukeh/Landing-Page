import { Paragraph } from "../../components";
import { motion, useAnimation } from "framer-motion";
// import AnimateDiv from "../../components/AnimateDiv";
import { useEffect } from "react";
const themeContent = `Create stunning, professional designs effortlessly using our AIdriven
        tools. Let the AI handle the heavy lifting, so you can focus on your
        vision`;
const Theme = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const section = document.getElementById("animatediv");
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;
        if (scrollPosition > sectionTop - windowHeight + sectionHeight / 2) {
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
    <motion.div
      id="animatediv"
      initial={{ opacity: 0, x: -100 }}
      animate={controls}
      transition={{
        duration: 1,
        ease: "easeOut",
        delayChildren: 2,
        staggerChildren: 0.8,
      }}
      className="text-center my-10 md:my-20"
    >
      <h1 className="text-3xl md:text-6xl font-semibold text-slate-900">
        Discover The Power of Ai
      </h1>

      <div>
        <Paragraph
          title={themeContent}
          classes="text-xl font-medium mx-auto text-gray-950 my-5 w-[80%] md:w-[50%]"
        />
      </div>
    </motion.div>
  );
};

export default Theme;
