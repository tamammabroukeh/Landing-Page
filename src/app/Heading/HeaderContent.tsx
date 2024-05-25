import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../ui/Button";
const HeaderContent = () => {
  return (
    <div className="my-10 absolute translate-y-20 md:translate-y-32 xl:translate-y-44 w-full">
      <div className="mx-auto px-6 xl:px-24 flex flex-col md:flex-row justify-start items-center xl:gap-40">
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-6xl font-semibold space-y-5 text-gray-600 xl:text-gray-900 text-center">
            <p>The Leader</p>
            <p>In Website</p>
            <p className="text-gray-400">World</p>
          </h2>
        </motion.div>
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
      </div>
    </div>
  );
};

export default HeaderContent;

{
  /* <header className="absolute bg-white w-full">
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
    <div className="flex lg:flex-1">
      <NavbarLink title="journey" to="/" classes="-m-1.5 p-1.5 text-2xl" />
    </div>
    <Popover.Group className="hidden lg:flex lg:gap-x-6">
      <NavbarLinks
        classes={
          "text-lg font-semibold rounded-xl hover:bg-gray-900 hover:text-white px-5 py-3 leading-6 text-gray-900"
        }
        links={ContentLinks}
      />
    </Popover.Group>
    <div className="hidden lg:flex space-x-2 lg:flex-1 lg:justify-end">
      <NavbarLinks
        links={authLinks}
        classes="text-xl hover:bg-slate-100 px-10 rounded-2xl py-3 font-semibold leading-6 text-gray-900"
      />
    </div>
  </nav>
</header>; */
}
