import EcommerceImg from "../../../public/assets/Ecommerce.jpg";
import { CustomLink, HeadingTwo, Image } from "../../components";
import Paragraph from "../../components/Paragraph";
const content = `Create a stunning online store with our E-commerce Master
theme. Featuring a modern design and robust e-commerce
functionalities, it's perfect for selling products online.`;
import { motion, useAnimation } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
const Ecommerce = () => {
  // const sectionRef = useRef<HTMLDivElement>(null);
  // const controls = useAnimation();
  // const handleScroll = useCallback(() => {
  //   const scrollPosition = window.scrollY + window.innerHeight;
  //   const sectionPosition = sectionRef.current?.offsetTop || 0;
  //   const sectionHeight = sectionRef.current?.offsetHeight || 0;

  //   // Calculate the progress of scroll reveal animation
  //   let progress = 0;
  //   if (scrollPosition > sectionPosition) {
  //     progress = (scrollPosition - sectionPosition) / sectionHeight;
  //   }

  //   // Ensure animation stays within bounds
  //   const yValue = Math.min(0, -100 + 100 * progress);
  //   const opacityValue = Math.min(1, progress);

  //   // Apply animation based on scroll progress
  //   controls.start({
  //     y: `${yValue}%`, // Move from -100% to 0% as progress increases
  //     opacity: opacityValue, // Fade in as the section scrolls into view
  //   });
  // }, [controls]);
  // //Attach scroll event listener
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [handleScroll]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const handleScroll = useCallback(() => {
    const scrollPosition =
      window.scrollY + document.documentElement.clientHeight;
    const section = sectionRef.current;
    if (!section) return;

    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;
    const sectionHeight = section.offsetHeight;

    // Calculate the progress of scroll reveal animation
    let progress = 0;
    if (scrollPosition > sectionPosition) {
      progress = Math.min(
        1,
        (scrollPosition - sectionPosition) / sectionHeight
      );
    }

    // Ensure animation stays within bounds
    const yValue = Math.min(0, -100 + 100 * progress);
    const opacityValue = Math.min(1, progress);

    // Apply animation based on scroll progress
    controls.start({
      y: `${-yValue}%`, // Move from -100% to 0% as progress increases
      opacity: opacityValue, // Fade in as the section scrolls into view
    });
  }, [controls]);

  //Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <div
      ref={sectionRef}
      className="flex bg-neutral-900 flex-wrap md:flex-nowrap"
    >
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.8 }}
        className=" section p-8 md:px-0 space-y-3 md:space-y-5 lg:space-y-8 text-white flex flex-col max-w-7xl mx-auto justify-center items-start md:pl-10 lg:px-20"
      >
        <HeadingTwo classes="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          E-commerce <br />
          Master
        </HeadingTwo>
        <div className="section">
          <Paragraph
            title={content}
            classes="w-full md:w-[80%] text-slate-300"
          />
        </div>
        <CustomLink
          to="/"
          classes="hover:bg-neutral-900 hover:text-white px-8 py-2 bg-white text-neutral-900 rounded-xl font-semibold text-lg"
          title="Create One"
        />
      </motion.div>
      <div>
        <Image ImageURL={EcommerceImg} altText="Ecommerce" />
      </div>
    </div>
  );
};
export default Ecommerce;
