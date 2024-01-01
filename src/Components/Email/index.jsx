import { Main, Box_Email } from "./style";
import { Header } from "../Home";
import Button_blue from "../../../public/assets/button_blank_blue.png";
import button_green from "../../../public/assets/button_blank_green.png";
import Home from "../../../public/assets/icones-linguagens/home-button.png";
import Image_Profile from "../../../public/assets/perfil.ico";
import Projects from "../../../public/assets/icones-linguagens/projects_dk.png";
import { useState } from "react";
import { filterRespondeSendButton } from "../../Services";

export const Email = (props) => {
  const [text, setText] = useState("Enviar");
  const [input, setInput] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [inputThree, setInputThree] = useState("");

  const buttonClick = () => {
    setText(filterRespondeSendButton(input, inputTwo, inputThree));
  };

  return (
    <>
      <Header
        dark={<img src={Button_blue} />}
        light={<img src={button_green} />}
        profile={Image_Profile}
        route="/"
        text="Home"
        img={Home}
        imgButtonEnd={Projects}
        textButtonEnd="Projetos"
        routeButtonEnd="/projects"
      />
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
              <input
                onChange={(event) => setInputTwo(event.target.value)}
                value={inputTwo}
                type="email"
                name="email"
                required
              />
            </div>
            <div className="Box_textArea">
              <label>{props.mensagem}</label>
              <textarea
                onChange={(event) => setInputThree(event.target.value)}
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
            <button onClick={buttonClick} type="submit">
              {text}
            </button>
          </form>
        </Box_Email>
      </Main>
    </>
  );
};
