import { Link } from "react-router-dom";
import { Botao_home } from "./style";

export const Botao_Home = (props) => {
  return (
    <Botao_home>
      <Link to="/">
        <img src={props.home} />
        Voltar
      </Link>
    </Botao_home>
  );
};
