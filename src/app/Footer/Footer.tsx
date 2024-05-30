import { FooterContent } from "../../data/data";
import { CustomLink, Paragraph, HeadingTwo } from "../../components";
import { motion, useAnimation } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
const Footer = () => {
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
        <div
          ref={sectionRef}
          className="flex justify-between flex-wrap mx-2 text-slate-300"
        >
          {FooterContent.map((item) => {
            return (
              <motion.div
                initial={{ x: 0, opacity: 0 }}
                animate={controls}
                transition={{ duration: 1 }}
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
