import GenerateImg from "../../../public/assets/Generate.jpg";
import { CustomLink, HeadingTwo, Image, Paragraph } from "../../components";
const content = `Save time with AI-generated content that’s tailored to your audience.
          From blog posts to product descriptions, let AI do the writing for
          you.`;
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const GenerateContentSection = () => {
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
    <div className="flex flex-wrap md:flex-nowrap bg-slate-200">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={controls}
        className="my-20 section text-center md:text-start w-full md:ml-10 lg:mx-24 space-y-8 transition-"
      >
        <HeadingTwo
          title="Generate Content Instantly"
          classes="text-2xl md:text-4xl md:w-[80%] lg:text-5xl leading-tight text-slate-900 font-semibold"
        />
        <Paragraph classes="text-gray-800 md:w-[70%]" title={content} />
        <div>
          <CustomLink
            title="Create One"
            classes="hover:bg-transparent hover:text-gray-800 px-10 rounded-2xl font-semibold py-3 text-gray-200 text-xl bg-gray-800"
            to="/"
          />
        </div>
      </motion.div>
      <motion.div initial={{ x: -100, opacity: 0 }} animate={controls}>
        <Image
          classes="w-full section h-full"
          ImageURL={GenerateImg}
          altText="Generate img"
        />
      </motion.div>
    </div>
  );
};

export default GenerateContentSection;
