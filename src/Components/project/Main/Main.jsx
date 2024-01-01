import { BoxMain } from "./style";
import { Projetos } from "..";
import { Dados } from "../../../data";


export const Main = (props) => {
  return (
    <BoxMain>
      {Dados.map((projeto) =>
        projeto.linguagem === props.clickButton ? (
          <Projetos
            key={projeto.id}
            name={projeto.nome}
            language={projeto.linguagem}
            description={projeto.descricao}
            image={projeto.imagem}
            link={projeto.link}
          />
        ) : null
      )}
    </BoxMain>
  );
};
