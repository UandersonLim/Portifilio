import { Box_imagem, Figure, Description, Card } from "./style";

export const Projetos = (props) => {
  return (
    <Card>
      
      <Box_imagem>
        <Figure>
          <img src={props.imagem} />
        </Figure>
      </Box_imagem>
        <Description className="Box_descricoes">
          <h1>{props.nome}</h1>
          <p>{props.descricao}</p>
        </Description>
    </Card>
  );
};
