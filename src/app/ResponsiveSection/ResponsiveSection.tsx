import Responsive from "../../../public/assets/Responsive.jpg";
import { HeadingTwo, Image, Paragraph } from "../../components";
// import AnimateDiv from "../../components/AnimateDiv";
const description = `Ensure your website looks amazing on any device. Our AI optimizes
            layouts to be fully responsive and mobile-friendly`;
import { motion, useAnimation } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
const ResponsiveSection = () => {
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
  const renderHeading = (arr: string[]) => {
    return arr.map((item, index) => (
      <HeadingTwo
        classes="text-4xl md:text-5xl font-semibold"
        title={item}
        key={index}
      />
    ));
  };
  return (
    <div className="bg-teal-700/70 text-white text-center">
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        animate={controls}
        transition={{ duration: 1 }}
        ref={sectionRef}
        className="my-10 section relative text-center space-y-10"
      >
        <div className="space-y-5">
          {renderHeading(["Seamless Accross", "All Devices"])}
          <Paragraph
            classes="text-lg px-10 md:px-40 lg:px-96"
            title={description}
          />
        </div>
        <Paragraph
          classes="font-semibold text-xl"
          title={"Create Responsive Design"}
        />
        <div className="h-1 bg-white w-[20%] top-[90%] left-[40%] absolute"></div>
      </motion.div>
      <div>
        <div className="relative mb-16 md:w-[600px] md:h-[400px] lg:w-[800px] lg:h-[600px] border-[3px] mx-auto border-solid border-gray-800">
          <Image
            classes="absolute m-3 h-full w-full "
            ImageURL={Responsive}
            altText="Responsive img"
          />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSection;
