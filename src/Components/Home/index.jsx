import { useState } from "react";
import { Box_Header, List } from "./style";
import { Theme } from "../../Services";
import { TrocaDeTema } from "../Tema/index.jsx";

export const Header = (props) => {
  const [trocarTema, setTrocarTema] = useState("light");

  return (
    <>
    
    <TrocaDeTema tema={trocarTema}/> 
      <Box_Header>
        <h1>
          <img src={props.perfil} />
        </h1>
        <List>
          <li>
            <img src={props.ingles} />
          </li>
          <li onClick={() => setTrocarTema(Theme(trocarTema))}>
            {trocarTema === "light" ? props.dark : props.light}
          </li>
          <li>
            <img src={props.contato} />
          </li>
        </List>
      </Box_Header>

    
    </>
  );
};
