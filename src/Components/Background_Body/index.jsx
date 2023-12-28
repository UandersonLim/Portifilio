import { BackgroundDiv } from "./style";
import MainContent from "../Main";
import { useState } from "react";
import { Box_Header, List } from "./style";
import { Theme } from "../../Services";
import GitHub from "../../../public/assets/github_roxo.png";
import WhatsApp from "../../../public/assets/whatsap.png";
import Linkedin from "../../../public/assets/linkedin.png";

export const Background = (props) => {
  const [trocarTema, setTrocarTema] = useState("light");

  return (
    <BackgroundDiv className={trocarTema}>
      <div className={trocarTema === 'light' ? 'square_light' : 'square'}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <Box_Header>
        <h1><img src={props.perfil}/>
        </h1>
        <List>
          <li><img src={props.ingles}/></li>
          <li onClick={() => setTrocarTema(Theme(trocarTema))}>{(trocarTema === 'light' ? props.dark : props.light)}</li>
          <li><img src={props.contato}/></li>
        </List>
      </Box_Header>

      <MainContent
        apresentacao="Olá, Eu sou Uanderson Lima"
        sobre="Sou um desenvolvedor frontend e atualmente estudando para ser desenvolvedor fullstack! Gosto MUITO da área de tecnologia, e tenho certeza que posso contribuir em qualquer time com as minhas habilidades. Estou sempre buscando novos desafios em projetos de desenvolvimento e participando de comunidades de programação para buscar feedback de outros desenvolvedores e desenvolvedoras. Além de tentar ajudar essas pessoas com o que eu já aprendi. 😁 Ah, gosto de jogos, filmes, séries, animes e outras nerdices."
        projetos="Veja meus projetos"
        contato="Contatos"

        whatApp={WhatsApp}
        linkedin={Linkedin}
        github={GitHub}
      />
    </BackgroundDiv>
  );
};
