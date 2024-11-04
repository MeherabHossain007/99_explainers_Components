"use client";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      {/* Hamburger Menu Icon */}
      <div className="fixed top-[40px] right-[100px] text-[40px] cursor-pointer">
        <GiHamburgerMenu />
      </div>
      {/* Main Menu */}
      {/* Heading and Some Text */}
      <div className="flex items-center h-screen m-auto max-w-[70ch]">
        <div>
          <h1 className="text-[45px] mb-[20px] tracking-[1px] font-bold">
            Hamburger Menu
          </h1>
          <span className="font-semibold ">
            <p className="mb-[15px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
              numquam odit fuga nulla dicta quasi!
            </p>
            <p className="mb-[15px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
              numquam odit fuga nulla dicta quasi!
            </p>
            <p className="mb-[15px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
              numquam odit fuga nulla dicta quasi!
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
