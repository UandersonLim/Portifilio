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
        <li className="imagem_perfil">
          <Link to="/">
            <img src={props.perfil} />
          </Link>
        </li>
        <List>
          <li>
            <Link to={props.rota}>
            <img src={props.img} />
            <figcaption className="legendaicone">{props.text}</figcaption>
            </Link>
          </li>

          <li  className="tema" onClick={() => setTrocarTema(Theme(trocarTema))}>
            {trocarTema === "light" ? props.dark : props.light}
            <figcaption>Tema</figcaption>
          </li>
          <li>
            <Link to="/Page_Email">
              <img src={props.contato} />
              <figcaption>Contato</figcaption>
            </Link>
          </li>
        </List>
      </Box_Header>
    </>
  );
};
