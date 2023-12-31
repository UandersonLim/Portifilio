import { Main, Box_Email } from "./style";
import { Header } from "../Home";
import Button_blue from "../../../public/assets/button_blank_blue.png";
import button_green from "../../../public/assets/button_blank_green.png";
import Ingles from "../../../public/assets/ingles.png";
import fale_comigo from "../../../public/assets/fale_comigo.png";
import Image_Perfil from "../../../public/assets/perfil.ico";
import { Botao_Home } from "../Botao_Home";
import Button_Home from "../../../public/assets/icones-linguagens/home-button.png";
import Imagem_Carregando from "../../../public/assets/icones-linguagens/refresh.png";
import { useState } from "react";
import { Validator } from "react";

export const Email = (props) => {
  const [text, setText] = useState("Enviar");
  const [input, setInput] = useState("");
  const [inputtwo, setInputtwo] = useState("");
  const [inputthree, setInputthree] = useState("");
  
  const Image = <img className="animationButton" src={Imagem_Carregando} />

  const botaoClicado = () => {
      if(input !== "" && inputtwo !== "" && inputthree !== ""){
        setText(Image)
      }else{
        setText("Enviar")
      }
  };

  

  return (
    <>
      <Header
        dark={<img src={Button_blue} />}
        light={<img src={button_green} />}
        contato={fale_comigo}
        ingles={Ingles}
        perfil={Image_Perfil}
      />
      <Botao_Home home={Button_Home} />
      <Main>
        <Box_Email>
          <form
            action="https://formsubmit.co/programadoruandersondev@gmail.com"
            method="POST"
          >
            <h1>{props.titulo}</h1>
            <div>
              <label>{props.nome}</label>

              <input
                onChange={(event) => setInput(event.target.value)}
                type="text"
                name="name"
                required
              />
            </div>
            <div>
              <label>{props.email}</label>

              <input onChange={(event) => setInputtwo(event.target.value)} value={inputtwo}  type="email" name="email" required />
            </div>
            <div className="Box_textArea">
              <label>{props.menssagem}</label>

              <textarea onChange={(event) => setInputthree(event.target.value)}
                name="message"
                placeholder="Escreva aqui"
                required
              ></textarea>
            </div>
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://portifilio-ten.vercel.app//Email_Enviado"
            />
            <button onClick={botaoClicado} type="submit">
              {text}
            </button>
          </form>
        </Box_Email>
      </Main>
    </>
  );
};
