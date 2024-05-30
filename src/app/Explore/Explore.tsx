import { HeadingTwo } from "../../components";
import { motion, useAnimation } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
const Explore = () => {
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
      y: `${yValue}%`, // Move from -100% to 0% as progress increases
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
    <div ref={sectionRef} className="text-center bg-gray-100 py-16">
      <motion.div
        className="description"
        initial={{ x: "0", opacity: 0 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <HeadingTwo classes="text-5xl section leading-snug font-semibold text-gray-900">
          Explore Our AI-Powered <br />
          <span>Themes</span>
        </HeadingTwo>
      </motion.div>
    </div>
  );
};
export default Explore;
