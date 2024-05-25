import GenerateImg from "../../assets/Generate.jpg";
import { CustomLink, HeadingTwo, Image, Paragraph } from "../../components";
import AnimateDiv from "../../components/AnimateDiv";
const content = `Save time with AI-generated content that’s tailored to your audience.
          From blog posts to product descriptions, let AI do the writing for
          you.`;
const GenerateContentSection = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap bg-slate-200">
      <div className="my-20 text-center md:text-start w-full md:ml-10 lg:mx-24 space-y-8 transition-">
        <HeadingTwo
          title="Generate Content Instantly"
          classes="md:text-4xl animate-bounce md:w-[80%] lg:text-5xl leading-tight text-slate-900 font-semibold"
        />
        <Paragraph classes="text-gray-800 md:w-[70%]" title={content} />
        <div>
          <CustomLink
            title="Create One"
            classes="hover:bg-transparent hover:text-gray-800 px-10 rounded-2xl font-semibold py-3 text-gray-200 text-xl bg-gray-800"
            to="/"
          />
        </div>
      </div>
      <AnimateDiv>
        <Image
          classes="w-full h-full"
          ImageURL={GenerateImg}
          altText="Generate img"
        />
      </AnimateDiv>
    </div>
  );
};

export default GenerateContentSection;
