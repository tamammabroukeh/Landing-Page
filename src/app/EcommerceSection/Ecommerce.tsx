import EcommerceImg from "../../../public/assets/Ecommerce.jpg";
import { CustomLink, HeadingTwo, Image } from "../../components";
import Paragraph from "../../components/Paragraph";
const content = `Create a stunning online store with our E-commerce Master
theme. Featuring a modern design and robust e-commerce
functionalities, it's perfect for selling products online.`;
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
const Ecommerce = () => {
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
    <div className="flex flex-wrap md:flex-nowrap">
      <div className="bg-neutral-900 section p-8 md:px-0 space-y-3 md:space-y-5 lg:space-y-8 text-white flex flex-col max-w-7xl mx-auto justify-center items-start md:pl-10 lg:px-20">
        <HeadingTwo classes="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          E-commerce <br />
          Master
        </HeadingTwo>
        <motion.div
          className="section"
          animate={controls}
          initial={{ x: 100, opacity: 0 }}
        >
          <Paragraph
            title={content}
            classes="w-full md:w-[80%] text-slate-300"
          />
        </motion.div>
        <CustomLink
          to="/"
          classes="hover:bg-neutral-900 hover:text-white px-8 py-2 bg-white text-neutral-900 rounded-xl font-semibold text-lg"
          title="Create One"
        />
      </div>
      <motion.div initial={{ x: -100, opacity: 0 }} animate={controls}>
        <Image ImageURL={EcommerceImg} altText="Ecommerce" />
      </motion.div>
    </div>
  );
};
export default Ecommerce;
