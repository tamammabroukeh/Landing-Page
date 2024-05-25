import { Paragraph } from "../../components";
import AnimateDiv from "../../components/AnimateDiv";
const themeContent = `Create stunning, professional designs effortlessly using our AIdriven
        tools. Let the AI handle the heavy lifting, so you can focus on your
        vision`;
const Theme = () => {
  return (
    <div className="text-center my-10 md:my-20">
      <h1 className="text-4xl animate-bounce  md:text-6xl font-semibold text-slate-900">
        Discover The Power of Ai
      </h1>

      <AnimateDiv>
        <Paragraph
          title={themeContent}
          classes="text-xl font-medium mx-auto text-gray-950 my-5 w-[80%] md:w-[50%]"
        />
      </AnimateDiv>
    </div>
  );
};

export default Theme;
