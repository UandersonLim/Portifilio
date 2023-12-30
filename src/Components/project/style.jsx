import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: #fff;
  font-weight: 900;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 550px;
  height: 550px;
  
  /* @media(max-width: 550px){
    width: 100%;
    height: 550px;
  } */
  `;

export const Box_imagem = styled.div`
  background-image: url("assets/Computer.png");
  background-size: cover;
  width: 60%;
  height: 60%;
  position: relative;

  @media(max-width: 620px){
    width: 250px;
    height: 250px;
  }
`;

export const Figure = styled.figure`
  position: absolute;
  width: 89%;
  height: 55%;
  top: 47px;
  left: 20px;

  img {
    width: 100%;
    height: 100%;
  }

  @media(max-width: 550px){
    width: 88%;
    top: 36px;
    left: 15px;
  } 
`;

export const Description = styled.div`
  font-family: 'Rubik Doodle Shadow', Courier, monospace;
  width: 70%;
  
  h1 {
    text-align: center;
    font-size: 20px;
  }

  p {
    margin-top: 1rem;
    text-align: center;
    font-family: 'M PLUS Rounded 1c';
    font-size: 15px;
  }
`;
