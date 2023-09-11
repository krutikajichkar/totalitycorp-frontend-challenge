import React, { useState } from "react";
import { SHOPPING_LOGO, USER_AVATAR } from "../utils/constants";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <div className="flex justify-between items-center fixed top-0 bg-blue-50 p-8 h-20 w-full">
      <div className="flex items-center">
        <img
          className="rounded-full w-12 h-10 sm:w-16 sm:h-14 "
          src={SHOPPING_LOGO}
          alt="shopping_logo"
        />
        <span className=" text-2xl sm:text-3xl italic font-bold">Shopsy</span>
      </div>

       <div className="fixed top-36 sm:top-0 sm:static"  >
        <ul className="flex text-left flex-col  gap-6 text-xl cursor-pointer sm:flex-row ">
          <li>Home</li>
          <li>Cart</li>
          <li>About</li>
        </ul>
      </div>

      <div className="fixed top-24 sm:top-0 sm:static " >
        <div className="inline-flex  gap-8 items-center">
          <span className="text-xl" >Hello, XYZ</span>
          <img
            className="w-16 rounded-full hidden sm:block"
            src={USER_AVATAR}
            alt="user_avatar"
          />
        </div>
      </div>
      <div className=" cursor-pointer sm:hidden flex items-center">
        {isMenuOpen && (
          <div onClick={() => setIsMenuOpen(false)}>
            <MenuIcon sx={{ fontSize: "35px" }} />
          </div>
        )}
        {!isMenuOpen && (
          <div onClick={() => setIsMenuOpen(true)}>
            <CloseIcon sx={{ fontSize: "35px" }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
