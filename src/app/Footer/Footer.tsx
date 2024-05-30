import { FooterContent } from "../../data/data";
import { CustomLink, Paragraph, HeadingTwo } from "../../components";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
const Footer = () => {
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
    const footerSections =
      document.querySelectorAll<HTMLElement>(".footer-section");
    footerSections.forEach((section) => {
      if (scrollPosition >= section.offsetTop - window.innerHeight * 0.8) {
        controls.start({ x: 0, opacity: 1, transition: { duration: 1 } });
      }
    });
  }, [scrollPosition, controls]);

  return (
    <div className="bg-neutral-900">
      <div className="space-y-5 mx-auto md:px-20 my-8">
        <div className="flex text-white py-3 px-3 md:px-5 justify-between items-center">
          <Paragraph
            classes="text-lg md:text-2xl lg:text-4xl font-semibold"
            title="Ready to Take your next step ?"
          />
          <CustomLink
            to="/"
            title="Start Free Trail"
            classes="hover:bg-neutral-900 hover:text-white bg-white px-4 md:px-10 rounded-xl font-semibold text-sm md:text-lg py-3 text-slate-800"
          />
        </div>
        <div className="h-[1px] bg-slate-600" />
        <div className="flex justify-between flex-wrap mx-2 text-slate-300">
          {FooterContent.map((item) => {
            return (
              <motion.div
                className="footer-section"
                initial={{ x: -100, opacity: 0 }}
                animate={controls}
                key={item.id}
              >
                <HeadingTwo classes="" title={item.parent} />
                <ul className="list-disc mx-6 my-2">
                  {item.children.map((child, index) => {
                    return <li key={index}>{child}</li>;
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Footer;
