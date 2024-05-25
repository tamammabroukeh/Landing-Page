import { Dialog } from "@headlessui/react";
import NavbarLinks from "./NavbarLinks";
import { Links, authLinks } from "../data/data";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { IMenuState } from "../interfaces/Interfaces";

const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }: IMenuState) => {
  return (
    <Dialog
      className="lg:hidden absolute"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <p></p>
          <button
            type="button"
            className="rounded-md transition ease-out delay-150 duration-300 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root animate-pulse">
          <div className="-my-6 divide-y flex justify-between items-center bg-gray-800 divide-gray-900/10">
            <div className="py-3">
              <NavbarLinks
                classes=" block mx-3  rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-gray-800"
                links={Links}
              />
            </div>
            <div className="">
              <NavbarLinks
                classes="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white mx-3 hover:bg-gray-50 hover:text-gray-800"
                links={authLinks}
              />
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default MobileMenu;
