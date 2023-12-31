import { Main } from "./style";
import { Header } from "../../Components/Home";
import Button_blue from "../../../public/assets/button_blank_blue.png";
import button_green from "../../../public/assets/button_blank_green.png";
import Ingles from "../../../public/assets/ingles.png";
import Sucesso from "../../../public/assets/icones-linguagens/sucesso.png";
import fale_comigo from "../../../public/assets/fale_comigo.png";
import Image_Perfil from "../../../public/assets/perfil.ico";
import Button_Home from "../../../public/assets/icones-linguagens/home-button.png";
import Button_Project from "../../../public/assets/icones-linguagens/projects_dk.png"
import { Link } from "react-router-dom";

export const Menssagem_Sucesso = () => {
  return (
    <>
      <Header
        dark={<img src={Button_blue} />}
        light={<img src={button_green} />}
        contato={fale_comigo}
        ingles={Ingles}
        perfil={Image_Perfil}
      />
      <Main>
        <div className="box_botoes">
          <Link to="/" className="botoes">
            <img src={Button_Home} />
            <p>Home</p>
          </Link>
          <Link to="/projetos" className="botoes">
            <figure>
              <img src={Button_Project} />
            </figure>
            <p>Projetos</p>
          </Link>
        </div>
        <div className="menssagem">
          <img src={Sucesso} />
          <p>E-mail enviado com sucesso.</p>
        </div>
      </Main>
    </>
  );
};
