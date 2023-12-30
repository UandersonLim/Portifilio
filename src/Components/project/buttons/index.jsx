import { Main } from "../Main/Main";
import { useState } from "react";
import { Box_Button } from "./style";
import React from "../../../../public/assets/icones-linguagens/react.png";
import Html from "../../../../public/assets/icones-linguagens/html.png";
import Css from "../../../../public/assets/icones-linguagens/css.png";
import JS from "../../../../public/assets/icones-linguagens/JavaScript.png";
import Node from "../../../../public/assets/icones-linguagens/node.png";

export const Buttons = () => {
  const [filtrar, setFiltrar] = useState("React.JS");
  console.log(filtrar);

  return (
    <>
      <Box_Button>
        <a id="htmlCssJs"
          onClick={() => setFiltrar("React.JS")}
          className={filtrar === "React.JS" ? "background_Button" : null}
        >
            <img src={React} />
          React.JS
        </a>
        <a
          id="htmlCssJs"
          onClick={() => setFiltrar("HTML-CSS-JS")}
          className={filtrar === "HTML-CSS-JS" ? "background_Button" : null}
        >
          <figure>
            <img src={Html} />
            <img src={Css} />
            <img src={JS} />
          </figure>
          HTML-CSS-JS
        </a>
        <a id="htmlCssJs"
          onClick={() => setFiltrar("Node.JS")}
          className={filtrar === "Node.JS" ? "background_Button" : null}
        >
            <img src={Node} />
          Node.JS
        </a>
      </Box_Button>
      <Main clickButton={filtrar} />
    </>
  );
};
