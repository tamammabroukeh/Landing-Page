import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { motion } from "framer-motion";
const item = {
  hidden: { opacity: 0.4, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
      duration: 1,
    },
  },
};
const HeaderContent = () => {
  return (
    <div className="my-10 absolute translate-y-20 md:translate-y-32 w-full">
      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        className="mx-auto px-6 xl:px-24 flex flex-col md:flex-row justify-start items-center xl:gap-40"
      >
        <h2 className="text-3xl md:text-6xl font-semibold space-y-5 text-gray-600 xl:text-gray-900 text-center">
          <p>The Leader</p>
          <p>In Website</p>
          <p className="text-gray-400">World</p>
        </h2>
        <div className="border-8 border-white rounded-md hidden xl:block ">
          <nav className="flex  flex-wrap p-3 gap-14 text-gray-900 justify-around items-center bg-white">
            <div className="font-semibold text-lg ">Journey</div>
            <ul className="flex flex-wrap gap-3">
              <li>Services</li>
              <li>Price</li>
              <li>Contact</li>
            </ul>
            <div className="flex flex-row flex-wrap">
              <Link className="px-5 py-2 text-nowrap" to={"/sign-up"}>
                Sign Up
              </Link>
              <Link
                to={"/login"}
                className="px-7 py-2 bg-slate-900 text-slate-200 rounded-lg"
              >
                Login
              </Link>
            </div>
          </nav>
          <div className="flex flex-row justify-between">
            <div className="bg-transparent border-solid border-black"></div>
            <div className="text-center text-3xl p-10 bg-white">
              <h2>Start </h2>
              <h2>Your</h2>
              <h2>next</h2>
              <h2>Journey</h2>
              <Button classes="bg-black hover:text-gray-800 hover:bg-white text-lg px-4 mt-2 py-2 rounded-lg text-slate-200">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default HeaderContent;
