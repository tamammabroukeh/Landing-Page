import Portfolio1 from "../../../public/assets/Landing_Portfolio1.jpg";
import Portfolio2 from "../../../public/assets/Landing_Portfolio2.jpg";
import { CustomLink, HeadingTwo, Image, Paragraph } from "../../components";
const description = `Showcase your creativity with this stylish portfolio theme. Ideal for
          artists, designers, and photographers`;
import { motion, useAnimation } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
const Portfolio = () => {
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
    <div className="flex gap-7 py-10 md:px-10 lg:px-32 justify-between items-center bg-slate-200">
      <div>
        <div className="relative section hidden md:block lg:block">
          <Image
            classes="md:w-full lg:w-80"
            ImageURL={Portfolio1}
            altText="Portfolio img"
          />
          <Image
            classes="absolute left-[50%] w-80 top-[10%]"
            ImageURL={Portfolio2}
            altText="Portfolio img"
          />
        </div>
      </div>
      <motion.div
        ref={sectionRef}
        initial={{ x: "0", opacity: 0 }}
        animate={controls}
        transition={{ duration: 1 }}
        className="flex section flex-col justify-center items-center md:items-end  space-y-8"
      >
        <HeadingTwo
          classes="text-2xl lg:text-3xl md:w-[50%] lg:w-full md:text-start lg:text-end lg:text-6xl font-bold text-gray-900"
          title="Creative Portfolio"
        />
        <Paragraph
          classes="mx-3 md:mx-0 md:w-[50%] text-gray-800 md:text-md lg:text-xl"
          title={description}
        />
        <CustomLink
          to="/"
          title="Create My Portfolio"
          classes="md:mr-10 border-solid text-lg border-[3px] px-8 py-3 rounded-xl border-slate-900"
        />
      </motion.div>
    </div>
  );
};

export default Portfolio;
