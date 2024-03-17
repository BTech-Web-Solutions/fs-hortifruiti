import React, { useEffect, useState } from "react";
import logo from "../../public/assets/logo.png";
import { Facebook, Instagram, X, Youtube } from "lucide-react";

const AsideMenu = ({ isOpen, onClose }) => {
  const [menuOpen, setMenuOpen] = useState(isOpen);

  // Atualiza o estado quando a prop isOpen mudar
  useEffect(() => {
    setMenuOpen(isOpen);
  }, [isOpen]);

  // Função para fechar o menu
  const handleClose = () => {
    setMenuOpen(false);
    onClose();
  };

  return (
    <div className={`menu-container ${menuOpen ? "menu-open" : "menu-closed"}`}>
      <div
        className="absolute top-0 w-full h-full z-40"
        onClick={handleClose}
      />
      <div className="absolute bg-[#00856F] w-full md:w-[40%] h-full z-50 p-5 flex flex-col items-start">
        <div className="flex justify-between w-full items-center">
          <img src={logo.src} alt="" className="h-8" />
          <X className="h-7 w-7" onClick={handleClose} />
        </div>

        <div className="text-xl mt-16 w-full">
          <ul className="flex flex-col gap-10 justify-center items-center">
            <li className="hover:text-zinc-400 font-semibold">Início</li>
            <li className="hover:text-zinc-400 font-semibold">Sobre</li>
            <li className="hover:text-zinc-400 font-semibold">Serviços</li>
            <li className="hover:text-zinc-400 font-semibold">Depoimentos</li>
          </ul>
        </div>

        <div className="w-full flex justify-center mt-8">
          <button className="bg-white w-40 h-14 rounded-full mt-8 flex items-center justify-center gap-2 hover:bg-zinc-200">
            <h1 className="font-bold tracking-wider text-sm text-[#00856F]">
              FAZER PEDIDO!
            </h1>
          </button>
        </div>

        <div className="w-full flex gap-5 items-center justify-center mt-14">
          <Instagram />
          <Facebook />
          <Youtube />
        </div>
      </div>
    </div>
  );
};

export default AsideMenu;
