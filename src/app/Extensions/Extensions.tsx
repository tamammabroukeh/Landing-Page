import ExtensionsImg from "../../assets/Extensions.jpg";
import { CustomLink, HeadingTwo, Image, Paragraph } from "../../components";
import AnimateDiv from "../../components/AnimateDiv";
const content = `Tailor your website to fit your brand with our intuitive
            drag-and-drop interface. Make changes in real-time with a few simple
            clicks`;
const Extensions = () => {
  return (
    <div className="bg-gray-200 px-10 py-20">
      <div className="max-w-7xl lg:px-20 mx-auto flex justify-around items-center gap-20">
        <AnimateDiv>
          <Image
            ImageURL={ExtensionsImg}
            altText="Extensions img"
            classes="w-full h-full"
          />
        </AnimateDiv>
        <div className="space-y-7">
          <HeadingTwo
            classes="font-semibold animate-bounce md:text-4xl text-6xl text-slate-900"
            title="Customize with Ease"
          />
          <AnimateDiv>
            <Paragraph classes="text-gray-700" title={content} />
          </AnimateDiv>
          <div>
            <CustomLink
              title="Create One"
              classes="hover:bg-gray-800 hover:text-white px-10 rounded-2xl font-semibold py-3 text-gray-800 text-xl bg-white"
              to="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extensions;
