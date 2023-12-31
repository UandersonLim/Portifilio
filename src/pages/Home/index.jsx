import { Header } from "../../Components/Home";
import Button_blue from "../../../public/assets/button_blank_blue.png";
import button_green from "../../../public/assets/button_blank_green.png";
import Projects from "../../../public/assets/icones-linguagens/projects_dk.png";
import fale_comigo from "../../../public/assets/fale_comigo.png";
import Image_Perfil from "../../../public/assets/perfil.ico";
import GitHub from "../../../public/assets/github_roxo.png";
import WhatsApp from "../../../public/assets/whatsap.png";
import Linkedin from "../../../public/assets/linkedin.png";
import MainContent from "../../Components/Home/Main";

export const Home = () => {
  return (
    <>
      <Header
        dark={<img src={Button_blue} />}
        light={<img src={button_green} />}
        contato={fale_comigo}
        projects={Projects}
        perfil={Image_Perfil}
        text="Projetos"
        rota="/projetos"
      />

      <MainContent
        apresentacao="Olá, Eu sou Uanderson Lima"
        sobre="Sou um desenvolvedor frontend e atualmente estudando para ser desenvolvedor fullstack! Gosto MUITO da área de tecnologia, e tenho certeza que posso contribuir em qualquer time com as minhas habilidades. Estou sempre buscando novos desafios em projetos de desenvolvimento e participando de comunidades de programação para buscar feedback de outros desenvolvedores e desenvolvedoras. Além de tentar ajudar essas pessoas com o que eu já aprendi. 😁 Ah, gosto de jogos, filmes, séries, animes e outras nerdices."
        projetos="Veja meus projetos"
        contato="Contatos"
        whatApp={WhatsApp}
        linkedin={Linkedin}
        github={GitHub}
      />
    </>
  );
};
