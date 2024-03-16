import React from "react";
import logo from "../../public/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-[#DCE9E2] h-[72px]">
      <div className="flex justify-between items-center h-full p-5">
        <img src={logo.src} alt="" className="h-8" />

        <div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20H30"
              stroke="#00856F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 12H30"
              stroke="#00856F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18 28L30 28"
              stroke="#00856F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
