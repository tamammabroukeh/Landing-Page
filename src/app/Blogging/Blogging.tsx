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
import AnimateDiv from "../../components/AnimateDiv";
// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 1,
//       delayChildren: 1.5,
//       duration: 0.5,
//     },
//   },
// };
const container = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
const Blogging = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const section = document.getElementById("animatediv");
      if (section) {
        // const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;
        if (scrollPosition > windowHeight + sectionHeight / 2) {
          controls.start({ opacity: 1, x: 0 });
        } else {
          controls.start({ opacity: 0, x: 100 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  // function to render a blogs
  const renderBlogs = () => {
    return BloggingContent.map((item, index) => (
      // <AnimateDiv>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
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
      </motion.div>
      // </AnimateDiv>
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
    <div className="bg-slate-100">
      <div className="max-w-7xl my-5 md:my-10 lg:my-14 mx-auto">
        <HeadingTwo classes="text-center text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug text-gray-800">
          Advanced Blogging <br />
          Tools
        </HeadingTwo>
        <div className="flex flex-wrap md:flex-nowrap md:pl-10 items-center">
          <div>{renderBlogs()}</div>
          {/* <motion.div variants={container} initial="hidden" animate="show">
            {renderBlogs()}
          </motion.div> */}
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
