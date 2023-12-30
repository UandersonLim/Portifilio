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
            nome={projeto.nome}
            linguagem={projeto.linguagem}
            descricao={projeto.descricao}
            imagem={projeto.imagem}
          />
        ) : null
      )}
    </BoxMain>
  );
};
