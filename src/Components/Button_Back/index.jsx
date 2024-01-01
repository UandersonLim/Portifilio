import { Box_Voltar } from "./style";
import { Link } from "react-router-dom";

export const Button_Voltar = (props) => {
  return (
    <Box_Voltar>
      <Link to="/">
        <img src={props.go_back} />
        Voltar
      </Link>
    </Box_Voltar>
  );
};
