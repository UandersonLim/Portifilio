import Imagem_Carregando from "../../public/assets/icones-linguagens/refresh.png";

export const Theme = (theme) => {
  return theme === "light" ? "Dark" : "light";
};

export const filterRespondeSendButton = (inputUm, inputDois, inputTrês) => {
  const Image = <img className="animationButton" src={Imagem_Carregando} />;
  if (inputUm !== "" && inputDois !== "" && inputTrês !== "") {
    return Image;
  } else {
    return "Enviar";
  }
};
