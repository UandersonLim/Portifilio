import { BackgroundDiv } from "./style";
import MainContent from "../Main";
import { useState } from "react";
import { Box_Header, List } from "./style";
import { Theme } from "../../Services";

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
        <h1>{props.nome}</h1>
        <List>
          <li>{props.idioma}</li>
          <li onClick={() => setTrocarTema(Theme(trocarTema))}>{(trocarTema === 'light' ? props.dark : props.light)}</li>
          <li>{props.contato}</li>
        </List>
      </Box_Header>

      <MainContent
        apresentacao="Olá, Eu sou Uanderson Lima"
        sobre="Sou um desenvolvedor frontend e atualmente estudando para ser desenvolvedor fullstack! Gosto MUITO da área de tecnologia, e tenho certeza que posso contribuir em qualquer time com as minhas habilidades. Estou sempre buscando novos desafios em projetos de desenvolvimento e participando de comunidades de programação para buscar feedback de outros desenvolvedores e desenvolvedoras. Além de tentar ajudar essas pessoas com o que eu já aprendi. 😁 Ah, gosto de jogos, filmes, séries, animes e outras nerdices."
        projetos="Veja meus projetos"
        contato="Contatos"
      />
    </BackgroundDiv>
  );
};
