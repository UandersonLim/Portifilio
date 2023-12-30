import { Header } from "../../Components/Home";
import Button_blue from "../../../public/assets/button_blank_blue.png";
import button_green from "../../../public/assets/button_blank_green.png";
import Ingles from "../../../public/assets/ingles.png";
import fale_comigo from "../../../public/assets/fale_comigo.png";
import Image_Perfil from "../../../public/assets/perfil.ico";
import { Buttons } from "../../Components/project/buttons";
import { Button_Voltar } from "../../Components/Botao_voltar";

export const Projetcs = () => {
  return (
    <>
        <Header
          dark={<img src={Button_blue} />}
          light={<img src={button_green} />}
          contato={fale_comigo}
          ingles={Ingles}
          perfil={Image_Perfil}
          button={<Button_Voltar/>}
        />

        {/* <Main/> */}
        <Buttons/>
    </>
  );
};
