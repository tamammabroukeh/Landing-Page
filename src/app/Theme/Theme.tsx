import { Paragraph } from "../../components";
import { motion, useAnimation } from "framer-motion";
// import AnimateDiv from "../../components/AnimateDiv";
import { useCallback, useEffect, useRef } from "react";
const themeContent = `Create stunning, professional designs effortlessly using our AIdriven
        tools. Let the AI handle the heavy lifting, so you can focus on your
        vision`;
const Theme = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const sectionPosition = sectionRef.current?.offsetTop || 0;
    const sectionHeight = sectionRef.current?.offsetHeight || 0;

    // Calculate the progress of scroll reveal animation
    let progress = 0;
    if (scrollPosition > sectionPosition) {
      progress = (scrollPosition - sectionPosition) / sectionHeight;
    }

    // Ensure animation stays within bounds
    const yValue = Math.min(0, -100 + 100 * progress);
    const opacityValue = Math.min(1, progress);

    // Apply animation based on scroll progress
    controls.start({
      x: `${yValue}%`, // Move from -100% to 0% as progress increases
      opacity: opacityValue, // Fade in as the section scrolls into view
    });
  }, [controls]);

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      ref={sectionRef}
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
