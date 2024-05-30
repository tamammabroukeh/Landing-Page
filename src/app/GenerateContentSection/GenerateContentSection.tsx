import GenerateImg from "../../../public/assets/Generate.jpg";
import { CustomLink, HeadingTwo, Image, Paragraph } from "../../components";
const content = `Save time with AI-generated content that’s tailored to your audience.
          From blog posts to product descriptions, let AI do the writing for
          you.`;
import { motion, useAnimation } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

const GenerateContentSection = () => {
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
    const xValue = Math.min(0, -100 + 100 * progress);
    const opacityValue = Math.min(1, progress);

    // Apply animation based on scroll progress
    controls.start({
      x: `${xValue}%`, // Move from -100% to 0% as progress increases
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
      className="flex flex-wrap md:flex-nowrap bg-slate-200"
    >
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.8 }}
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
      <div>
        <Image
          classes="w-full section h-full"
          ImageURL={GenerateImg}
          altText="Generate img"
        />
      </div>
    </div>
  );
};

export default GenerateContentSection;
