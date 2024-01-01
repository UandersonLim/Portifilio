import { Main } from "../Main/Main";
import { useState } from "react";
import { Box_Button } from "./style";
import React from "../../../../public/assets/icones-linguagens/react.png";
import Html from "../../../../public/assets/icones-linguagens/html.png";
import Css from "../../../../public/assets/icones-linguagens/css.png";
import JS from "../../../../public/assets/icones-linguagens/JavaScript.png";
import Node from "../../../../public/assets/icones-linguagens/node.png";
import Button_Go_Back from "../../../../public/assets/icones-linguagens/Button.png";
import { Button_Voltar } from "../../Button_Back";

export const Buttons = () => {
  const [filter, setFilter] = useState("React.JS");

  return (
    <>
      <Box_Button>
        <a
          id="htmlCssJs"
          onClick={() => setFilter("React.JS")}
          className={filter === "React.JS" ? "background_Button" : null}
        >
          <img src={React} />
          React.JS
        </a>
        <a
          id="htmlCssJs"
          onClick={() => setFilter("HTML-CSS-JS")}
          className={filter === "HTML-CSS-JS" ? "background_Button" : null}
        >
          <figure>
            <img src={Html} />
            <img src={Css} />
            <img src={JS} />
          </figure>
          HTML-CSS-JS
        </a>
        <a
          id="htmlCssJs"
          onClick={() => setFilter("Node.JS")}
          className={filter === "Node.JS" ? "background_Button" : null}
        >
          <img src={Node} />
          Node.JS
        </a>
        <Button_Voltar go_back={Button_Go_Back} />
      </Box_Button>
      <Main clickButton={filter} />
    </>
  );
};
