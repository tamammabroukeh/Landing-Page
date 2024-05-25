import EcommerceImg from "../../assets/Ecommerce.jpg";
import { CustomLink, HeadingTwo, Image } from "../../components";
import AnimateDiv from "../../components/AnimateDiv";
import Paragraph from "../../components/Paragraph";
const content = `Create a stunning online store with our E-commerce Master
theme. Featuring a modern design and robust e-commerce
functionalities, it's perfect for selling products online.`;
const Ecommerce = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap">
      <div className="bg-neutral-900 p-8 md:px-0 space-y-3 md:space-y-5 lg:space-y-8 text-white flex flex-col max-w-7xl mx-auto justify-center items-start md:pl-10 lg:px-20">
        <HeadingTwo classes="text-3xl animate-bounce md:text-5xl lg:text-6xl font-semibold leading-tight">
          E-commerce <br />
          Master
        </HeadingTwo>
        <AnimateDiv>
          <Paragraph
            title={content}
            classes="w-full md:w-[80%] text-slate-300"
          />
        </AnimateDiv>
        <CustomLink
          to="/"
          classes="hover:bg-neutral-900 hover:text-white px-8 py-2 bg-white text-neutral-900 rounded-xl font-semibold text-lg"
          title="Create One"
        />
      </div>
      <AnimateDiv>
        <Image ImageURL={EcommerceImg} altText="Ecommerce" />
      </AnimateDiv>
    </div>
  );
};
export default Ecommerce;
