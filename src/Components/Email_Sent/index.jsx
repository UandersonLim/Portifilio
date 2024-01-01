import { Main } from "./style";
import { Header } from "../../Components/Home";
import Button_blue from "../../../public/assets/button_blank_blue.png";
import button_green from "../../../public/assets/button_blank_green.png";
import Sucesso from "../../../public/assets/icones-linguagens/sucesso.png";
import Contact from "../../../public/assets/fale_comigo.png";
import Image_Profile from "../../../public/assets/perfil.ico";
import Button_Home from "../../../public/assets/icones-linguagens/home-button.png";
import Button_Project from "../../../public/assets/icones-linguagens/projects_dk.png"
import { Link } from "react-router-dom";

export const Sucess_Message = () => {
  return (
    <>
      <Header
        dark={<img src={Button_blue} />}
        light={<img src={button_green} />}
        contato={Contact}
        profile={Image_Profile}
      />
      <Main>
        <div className="box_button">
          <Link to="/" className="button">
            <img src={Button_Home} />
            <p>Home</p>
          </Link>
          <Link to="/projects" className="button">
            <figure>
              <img src={Button_Project} />
            </figure>
            <p>Projetos</p>
          </Link>
        </div>
        <div className="message">
          <img src={Sucesso} />
          <p>E-mail enviado com sucesso.</p>
        </div>
      </Main>
    </>
  );
};
