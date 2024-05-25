import Responsive from "../../../public/assets/Responsive.jpg";
import { HeadingTwo, Image, Paragraph } from "../../components";
import AnimateDiv from "../../components/AnimateDiv";
const description = `Ensure your website looks amazing on any device. Our AI optimizes
            layouts to be fully responsive and mobile-friendly`;
const ResponsiveSection = () => {
  const renderHeading = (arr: string[]) => {
    return arr.map((item, index) => (
      <HeadingTwo
        classes="text-4xl  animate-bounce md:text-5xl font-semibold"
        title={item}
        key={index}
      />
    ));
  };
  return (
    <div className="bg-teal-700/70 text-white text-center">
      <div className="my-10 relative text-center space-y-10">
        <AnimateDiv>
          <div className="space-y-5">
            {renderHeading(["Seamless Accross", "All Devices"])}
            <Paragraph
              classes="text-lg px-10 md:px-40 lg:px-96"
              title={description}
            />
          </div>
        </AnimateDiv>
        <Paragraph
          classes="font-semibold text-xl"
          title={"Create Responsive Design"}
        />
        <div className="h-1 bg-white w-[20%] top-[90%] left-[40%] absolute"></div>
      </div>
      <AnimateDiv>
        <div className="relative mb-16 md:w-[600px] md:h-[400px] lg:w-[800px] lg:h-[600px] border-[3px] mx-auto border-solid border-gray-800">
          <Image
            classes="absolute m-3 h-full w-full "
            ImageURL={Responsive}
            altText="Responsive img"
          />
        </div>
      </AnimateDiv>
    </div>
  );
};

export default ResponsiveSection;
