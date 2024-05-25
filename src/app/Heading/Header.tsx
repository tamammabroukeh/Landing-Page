import React, { useState } from "react";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Links, authLinks } from "../../data/data";
import { CustomLink, NavbarLinks, MobileMenu, Image } from "../../components";
import HeaderImage from "../../assets/landing page.jpg";
import HeaderContent from "./HeaderContent";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <React.Fragment>
      <Image
        classes="relative h-screen"
        ImageURL={HeaderImage}
        altText="Header img"
      />
      <header className="absolute w-full">
        {/* big screens */}
        <nav className="mx-auto p-6 lg:px-8 flex max-w-7xl items-center justify-between">
          <div className="flex lg:flex-1">
            <CustomLink title="Logo" to="/" classes="-m-1.5 p-1.5 text-2xl" />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              {!mobileMenuOpen && (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          {/* links */}
          <Popover.Group className="hidden lg:flex lg:gap-x-6">
            <NavbarLinks
              classes={
                "text-lg font-semibold rounded-xl hover:bg-gray-900 hover:text-white px-5 py-3 leading-6 text-gray-900"
              }
              links={Links}
            />
          </Popover.Group>
          {/* auth links */}
          <div className="hidden lg:flex space-x-2 lg:flex-1 lg:justify-end">
            <NavbarLinks
              links={authLinks}
              classes="text-xl hover:bg-slate-100 px-10 rounded-2xl py-3 font-semibold leading-6 text-gray-900"
            />
          </div>
        </nav>
        {/* small screens */}
        <MobileMenu
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </header>
      <HeaderContent />
    </React.Fragment>
  );
}
