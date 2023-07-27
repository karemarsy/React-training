import React from "react";
import HeaderImage from "../public/assets/img/hero.svg";

function Header() {
  return (
    <div className="flex justify-center items-center py-6">
      <HeaderImage className=" w-8/12 h-8/12"/>
    </div>
  );
}

export default Header;
