import { Box_imagem, Figure, Description, Card } from "./style";
import Icone from "../../../public/assets/icones-linguagens/link_icon.png"

export const Projetos = (props) => {
  return (
    <Card>
      <Box_imagem>
        <Figure>
          <img src={props.image} />
        </Figure>
      </Box_imagem>
      <Description className="Box_descricoes">
        <a href={props.link} target="_blank">
          <h1><img src={Icone}/>{props.name}</h1>
        </a>
        <p>{props.description}</p>
      </Description>
    </Card>
  );
};
