import ExtensionsImg from "../../../public/assets/Extensions.jpg";
import { CustomLink, HeadingTwo, Image, Paragraph } from "../../components";
// import AnimateDiv from "../../components/AnimateDiv";
const content = `Tailor your website to fit your brand with our intuitive
            drag-and-drop interface. Make changes in real-time with a few simple
            clicks`;
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
const Extensions = () => {
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
          controls.start({ opacity: 1, x: 0 });
        } else {
          controls.start({ opacity: 0, x: 100 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);
  return (
    <div className="bg-gray-200 px-10 py-10 md:py-20">
      <motion.div
        id="animatediv"
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
        transition={{
          duration: 1,
          ease: "easeOut",
          delayChildren: 2,
          staggerChildren: 0.8,
        }}
        className="lg:px-20 mx-auto flex justify-around items-center flex-wrap-reverse md:flex-nowrap md:gap-20"
      >
        <div>
          <Image
            ImageURL={ExtensionsImg}
            altText="Extensions img"
            classes="w-full h-full mt-6"
          />
        </div>
        <div className="space-y-7">
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
        </div>
      </motion.div>
    </div>
  );
};

export default Extensions;
