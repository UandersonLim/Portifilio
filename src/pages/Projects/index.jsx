import { Header } from "../../Components/Home";
import Button_blue from "../../../public/assets/button_blank_blue.png";
import button_green from "../../../public/assets/button_blank_green.png";
import Home from "../../../public/assets/icones-linguagens/home-button.png";
import fale_comigo from "../../../public/assets/fale_comigo.png";
import Image_Perfil from "../../../public/assets/perfil.ico";
import { Buttons } from "../../Components/project/buttons";

export const Projetcs = () => {
  return (
    <>
        <Header
          dark={<img src={Button_blue} />}
          light={<img src={button_green} />}
          img={Home}
          profile={Image_Perfil}
          text="Home"
          route="/"
          imgButtonEnd={fale_comigo}
          textButtonEnd="Contato"
          routeButtonEnd="/Page_Email"
        />

        <Buttons/>
    </>
  );
};
