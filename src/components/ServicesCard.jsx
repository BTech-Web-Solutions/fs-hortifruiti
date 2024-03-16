import React from "react";
import correctSymbol from "../../public/assets/correctSymbol.png";

const ServicesCard = ({ title, desc }) => {
  return (
    <div className="bg-white mx-6 px-6 py-11">
      <img src={correctSymbol.src} alt="" className="h-8 mb-4" />
      <h1 className="text-[#212529] text-[24px] font-bold">{title}</h1>
      <p className="text-[#495057]">{desc}</p>
    </div>
  );
};

export default ServicesCard;
