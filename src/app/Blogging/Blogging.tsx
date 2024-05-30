// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, EffectFlip, Pagination, Navigation } from "swiper/modules";
import BloggingImg from "../../../public/assets/Blogging.jpg";
import { BloggingContent } from "../../data/data";
import { CustomLink, HeadingTwo, Image, Paragraph } from "../../components";
import { motion, useAnimation } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
const Blogging = () => {
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
      y: `${yValue}%`, // Move from -100% to 0% as progress increases
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

  // function to render a blogs
  const renderBlogs = () => {
    return BloggingContent.map((item, index) => (
      <div
        className="mx-5 md:mx-0 mt-5 lg:mt-10 space-y-2 lg:space-y-5"
        key={item.id}
      >
        <HeadingTwo
          classes="md:text-2xl text-3xl font-semibold text-gray-900"
          title={item.title}
        />
        <Paragraph
          title={item.description}
          classes="md:text-sm text-gray-800 w-[90%]"
        />
        {index !== BloggingContent.length - 1 && (
          <div className="h-[1px] w-[90%] border-[1px] border-solid border-teal-400/55" />
        )}
      </div>
    ));
  };
  // function to render img blogs
  const renderImgs = (blogImgs: string[]) => {
    return blogImgs.map((blog, index) => {
      return (
        <SwiperSlide className="" key={index}>
          <div className="w-full">
            <Image ImageURL={blog} altText="blog img" classes="w-full" />
          </div>
        </SwiperSlide>
      );
    });
  };
  return (
    <div ref={sectionRef} className="bg-slate-100 relative">
      <div className="max-w-7xl my-5 md:my-10 lg:my-14 mx-auto">
        <HeadingTwo classes="text-center text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug text-gray-800">
          Advanced Blogging <br />
          Tools
        </HeadingTwo>
        <div className="flex flex-wrap md:flex-nowrap md:pl-10 items-center">
          <motion.div
            className="section"
            initial={{ y: 0, opacity: 0 }}
            animate={controls}
            transition={{ duration: 1 }}
          >
            {renderBlogs()}
          </motion.div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              waitForTransition: true,
              disableOnInteraction: false,
            }}
            effect={"flip"}
            grabCursor={true}
            pagination={true}
            // navigation={true}
            modules={[Autoplay, EffectFlip, Pagination, Navigation]}
            className="mySwiper pl-10"
          >
            {renderImgs([BloggingImg, BloggingImg, BloggingImg])}
          </Swiper>
        </div>
        <div className="md:mt-2 lg:mt-0 pt-0 px-10">
          <CustomLink
            title="Learn More"
            to="/"
            classes="px-5 py-2 font-semibold hover:bg-slate-200 text-gray-900 border-b-[3px]  border-slate-800 border-solid"
          />
        </div>
      </div>
    </div>
  );
};
export default Blogging;
