import React from "react";
import logo from "../../public/assets/logo.png";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#00856F] px-6 pt-8">
      <img src={logo.src} alt="" className="h-8 mb-14" />

      <p className="text-xl">©2024 FS HORTIFRUTI.</p>
      <p className="text-xl mt-3">Todos os direitos reservados.</p>

      <div className="flex gap-5 items-center mt-8 pb-16">
        <Instagram />
        <Facebook />
        <Youtube />
      </div>
    </footer>
  );
};

export default Footer;
