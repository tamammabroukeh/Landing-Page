import GenerateImg from "../../../public/assets/Generate.jpg";
import { CustomLink, HeadingTwo, Image, Paragraph } from "../../components";
import AnimateDiv from "../../components/AnimateDiv";
const content = `Save time with AI-generated content that’s tailored to your audience.
          From blog posts to product descriptions, let AI do the writing for
          you.`;
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const GenerateContentSection = () => {
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
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 100 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="flex flex-wrap md:flex-nowrap bg-slate-200">
      <motion.div
        id="animatediv"
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        transition={{
          duration: 1,
          ease: "easeOut",
          delayChildren: 2,
          staggerChildren: 0.8,
        }}
        className="my-20 text-center md:text-start w-full md:ml-10 lg:mx-24 space-y-8 transition-"
      >
        <HeadingTwo
          title="Generate Content Instantly"
          classes="text-2xl md:text-4xl animate-pulse md:w-[80%] lg:text-5xl leading-tight text-slate-900 font-semibold"
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
      <div>
        <Image
          classes="w-full h-full"
          ImageURL={GenerateImg}
          altText="Generate img"
        />
      </div>
    </div>
  );
};

export default GenerateContentSection;
