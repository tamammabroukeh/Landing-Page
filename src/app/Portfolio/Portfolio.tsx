import Portfolio1 from "../../../public/assets/Landing_Portfolio1.jpg";
import Portfolio2 from "../../../public/assets/Landing_Portfolio2.jpg";
import { CustomLink, HeadingTwo, Image, Paragraph } from "../../components";
import AnimateDiv from "../../components/AnimateDiv";
const description = `Showcase your creativity with this stylish portfolio theme. Ideal for
          artists, designers, and photographers`;
const Portfolio = () => {
  return (
    <div className="flex gap-7 py-10 md:px-10 lg:px-32 justify-between items-center bg-slate-200">
      <AnimateDiv>
        <div className="relative hidden md:block lg:block">
          <Image
            classes="md:w-full lg:w-80"
            ImageURL={Portfolio1}
            altText="Portfolio img"
          />
          <Image
            classes="absolute left-[50%] w-80 top-[10%]"
            ImageURL={Portfolio2}
            altText="Portfolio img"
          />
        </div>
      </AnimateDiv>
      <div className="flex flex-col justify-center items-center md:items-end  space-y-8">
        <HeadingTwo
          classes="text-2xl animate-bounce lg:text-3xl md:w-[50%] lg:w-full md:text-start lg:text-end lg:text-6xl font-bold text-gray-900"
          title="Creative Portfolio"
        />
        <Paragraph
          classes="mx-3 md:mx-0 md:w-[50%] text-gray-800 md:text-md lg:text-xl"
          title={description}
        />
        <CustomLink
          to="/"
          title="Create My Portfolio"
          classes="md:mr-10 border-solid text-lg border-[3px] px-8 py-3 rounded-xl border-slate-900"
        />
      </div>
    </div>
  );
};

export default Portfolio;
