import Responsive from "../../../public/assets/Responsive.jpg";
import { HeadingTwo, Image, Paragraph } from "../../components";
// import AnimateDiv from "../../components/AnimateDiv";
const description = `Ensure your website looks amazing on any device. Our AI optimizes
            layouts to be fully responsive and mobile-friendly`;
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
const ResponsiveSection = () => {
  // const controls = useAnimation();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const section = document.getElementById("animatediv");
  //     if (section) {
  //       const sectionTop = section.offsetTop;
  //       const sectionHeight = section.offsetHeight;
  //       const windowHeight = window.innerHeight;
  //       if (scrollPosition > sectionTop - windowHeight + sectionHeight / 2) {
  //         controls.start({ opacity: 1, x: 0 });
  //       } else {
  //         controls.start({ opacity: 0, x: -100 });
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [controls]);

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
        initial={{ x: 100, opacity: 0 }}
        animate={controls}
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
