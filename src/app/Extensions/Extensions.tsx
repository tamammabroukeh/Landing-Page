import ExtensionsImg from "../../../public/assets/Extensions.jpg";
import { CustomLink, HeadingTwo, Image, Paragraph } from "../../components";
// import AnimateDiv from "../../components/AnimateDiv";
const content = `Tailor your website to fit your brand with our intuitive
            drag-and-drop interface. Make changes in real-time with a few simple
            clicks`;
import { motion, useAnimation } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
const Extensions = () => {
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
  return (
    <div className="bg-gray-200 px-10 py-10 md:py-20">
      <div
        ref={sectionRef}
        className="lg:px-20 mx-auto flex justify-around items-center flex-wrap-reverse md:flex-nowrap md:gap-20"
      >
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Image
            ImageURL={ExtensionsImg}
            altText="Extensions img"
            classes="w-full h-full mt-6"
          />
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
          className="space-y-7"
        >
          <HeadingTwo
            classes="font-semibold md:text-4xl text-6xl text-slate-900"
            title="Customize with Ease"
          />
          <div>
            <Paragraph classes="text-gray-700" title={content} />
          </div>
          <div>
            <CustomLink
              title="Create One"
              classes="hover:bg-gray-800 hover:text-white px-10 rounded-2xl font-semibold py-3 text-gray-800 text-xl bg-white"
              to="/"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Extensions;
