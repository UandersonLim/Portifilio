import styled from "styled-components";



export const Box_Button = styled.div`
  position: absolute;
  top: 150px;
  left: 25px;
  z-index: 1;
  animation: arrow-down 0.5s infinite alternate ease-in-out;
  font-family: "Rubik Doodle Shadow", sans-serif;

  @keyframes arrow-down{
    0% {
        -webkit-transform: translateY(0);
    }

    100% {
        -webkit-transform: translatey(0.7em);
    }
}


  a img {
    width: 40px;
  }

  @media(max-width: 440px){
    top: 570px;
    left: 15px;
  }
`;
