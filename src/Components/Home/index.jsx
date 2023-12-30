import { useState } from "react";
import { Box_Header, List } from "./style";
import { Theme } from "../../Services";
import { TrocaDeTema } from "../Tema/index.jsx";
import { Link } from "react-router-dom";

export const Header = (props) => {
  const [trocarTema, setTrocarTema] = useState("light");

  return (
    <>
      <TrocaDeTema tema={trocarTema} />
      <Box_Header>
        <h1>
          <Link to="/">
            <img src={props.perfil} />
          </Link>
        </h1>
        <List>
          <li>
            <img src={props.ingles} />
          </li>
          <li onClick={() => setTrocarTema(Theme(trocarTema))}>
            {trocarTema === "light" ? props.dark : props.light}
          </li>
          <li>
            <Link to="/Page_Email">
              <img src={props.contato} />
            </Link>
          </li>
        </List>
      </Box_Header>
    </>
  );
};
