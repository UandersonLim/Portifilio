import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

   

   .Dark{
    background-image: url('public/assets/Galaxia.jpg');
    color: #fff;
  }

  .light{
    background-image: url('public/assets/Tarde.jpg');
    background-size: cover;
    color: #000000;
    font-weight: 700;
  }

    
`;
