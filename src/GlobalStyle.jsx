import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

   

   .Dark{
    background-image: url('assets/Galaxia.jpg');
    color: #fff;
    position: fixed;
    font-weight: 700;
    
  }

  .light{
    background-image: url('assets/fundo-vermelho.jpg');
    background-size: cover;
    color: #fff;
    font-weight: 700;
    position: fixed;
  }

    
`;
