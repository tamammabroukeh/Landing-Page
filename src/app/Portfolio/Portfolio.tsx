import Portfolio1 from "../../../public/assets/Landing_Portfolio1.jpg";
import Portfolio2 from "../../../public/assets/Landing_Portfolio2.jpg";
import { CustomLink, HeadingTwo, Image, Paragraph } from "../../components";
const description = `Showcase your creativity with this stylish portfolio theme. Ideal for
          artists, designers, and photographers`;
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
const Portfolio = () => {
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
    <div className="flex gap-7 py-10 md:px-10 lg:px-32 justify-between items-center bg-slate-200">
      <div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={controls}
          className="relative section hidden md:block lg:block"
        >
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
        </motion.div>
      </div>
      <motion.div
        // id="animatediv"
        // initial={{ opacity: 0, x: 100 }}
        // animate={controls}
        // transition={{
        //   duration: 1,
        //   ease: "easeOut",
        //   delayChildren: 2,
        //   staggerChildren: 0.8,
        // }}
        initial={{ x: 100, opacity: 0 }}
        animate={controls}
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
