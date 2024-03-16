import whatsapp from "../../public/assets/whatsapp.png";
import pessoa1 from "../../public/assets/pessoa1.png";
import fruits from "../../public/assets/fruits.png";
import ServicesCard from "@/components/ServicesCard";
import { Mail, MapPin } from "lucide-react";

export default function Home() {
  return (
    <>
      <div
        className="bg-[#DCE9E2] py-11 px-4"
        style={{
          height: "calc(100vh + 280px)",
        }}
      >
        <h1 className="text-[#00856F] w-full flex justify-center text-sm font-semibold tracking-wide">
          BOAS-VINDAS A FS HORTIFRUTI 👋
        </h1>

        <h3 className="text-[#212529] text-3xl font-bold text-center mt-4">
          Seu pedido entregue em seu comércio!
        </h3>

        <p className="text-[#495057] text-xl leading-7 mt-16 text-center">
          Com a FS é fácil, em poucos cliques você faz seu pedido sem dor de
          cabeça. Clique no botão abaixo e confira nossas ofertas!
        </p>

        <div className="w-full flex justify-center">
          <button className="bg-[#00856F] w-52 h-14 rounded-full mt-8 flex items-center justify-center gap-2">
            <img src={whatsapp.src} alt="" />
            <h1 className="font-bold tracking-wider text-sm">FAZER PEDIDO!</h1>
          </button>
        </div>

        <div className="mt-7 flex justify-center items-center w-full">
          <img src={pessoa1.src} alt="" />
        </div>

        <div className="bg-[#FFFAF1] py-10 px-20 rounded-[6px] z-10 relative">
          <div className="flex flex-col justify-center items-center w-full">
            <h1 className="text-[#212529] font-bold text-5xl mb-1">+3.500</h1>
            <p className="text-[#00856F] text-lg tracking-tight mb-16">
              Pedidos entregues
            </p>
          </div>

          <div className="flex flex-col justify-center items-center w-full">
            <h1 className="text-[#212529] font-bold text-5xl mb-1">+15</h1>
            <p className="text-[#00856F] text-lg tracking-tight mb-16">
              Comércios
            </p>
          </div>

          <div className="flex flex-col justify-center items-center w-full">
            <h1 className="text-[#212529] font-bold text-5xl mb-1">+10</h1>
            <p className="text-[#00856F] text-lg tracking-tight">
              Anos de mercado
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F9F9]">
        <div className="pt-[300px] w-fuill text-center">
          <p className="text-[#00856F] font-semibold">SERVIÇOS</p>
          <h1 className="text-[#212529] font-bold text-4xl mb-1 text-center px-8">{`Algumas vantagens :)`}</h1>
        </div>

        <div className="flex flex-col gap-10 mt-6 pb-10">
          <ServicesCard
            title="Compre hoje e receba amanhã"
            desc="Sabemos o quão um comercio precisa que suas mercadorias estejam em estoque para começar a produção, pensando nisso a nossa logistica garante que você vai receber no dia seguinte após seu pedido!"
          />

          <ServicesCard
            title="Atendimento 24hrs"
            desc="Para garantir que não haja dúvidas em nosso serviço, oferecemos atendimento via Whatsapp 24 horas."
          />

          <ServicesCard
            title="Produtos de qualidade!"
            desc="Selecionamos a mão seu produto, garantimos que irá receber a melhor qualidade possível. Além disso os Legumes, Frutas e Verduras vem direto do CEAGESP. "
          />
        </div>
      </div>

      <div className="bg-[#FFFAF1] px-6">
        <h1 className="text-[#00856F] font-semibold tracking-wide pt-28">
          SOBRE NÓS
        </h1>

        <h1 className="text-[#212529] font-bold text-3xl pr-2 mt-8">
          Entenda quem somos e por que existimos
        </h1>

        <p className="text-[#495057] mt-6 font-normal">
          A FS HORTIFRUTI tras uma forma do seu comercio receber as mercadorias
          com facilidade, sem transito, estresse e perca de tempo. Em poucos
          cliques é realizado o pedido e pronto, no outro dia de manhã sua
          mercadoria está no local desejado!
        </p>

        <img src={fruits.src} alt="" className="mt-6 pb-20" />
      </div>

      <div className="bg-white px-6 pt-28 pb-24">
        <h1 className="text-[#212529] font-bold text-3xl pr-5">
          Entre em contato com a gente!
        </h1>

        <div className="flex gap-2 items-center mt-8">
          <MapPin className="text-[#00856F] h-14" />
          <p className="text-[#495057] font-normal">
            Parque dom pedro II, 190 - SP
          </p>
        </div>

        <div className="flex gap-2 items-center -mt-4">
          <Mail className="text-[#00856F] h-14" />
          <p className="text-[#495057] font-normal">fs.hortifruti@gmail.com</p>
        </div>

        <div className="w-full flex justify-start">
          <button className="bg-[#00856F] w-52 h-14 rounded-full mt-8 flex items-center justify-center gap-2">
            <img src={whatsapp.src} alt="" />
            <h1 className="font-bold tracking-wider text-sm">FAZER PEDIDO!</h1>
          </button>
        </div>
      </div>
    </>
  );
}
