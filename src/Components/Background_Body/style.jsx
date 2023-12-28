import styled, { keyframes } from 'styled-components';

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const BackgroundDiv = styled.div`
  height: 100vh;
  width: 100%;
  


  .square span{
    width: 50px;
    height: 50px;
    position: fixed;
    border: 1px solid #000;
    z-index: 1;
    bottom: -180px;
    background-color: #18191f;
    box-shadow: 0 0 50px #FFDADE,
    0 0 100px #FFDADE,
    0 0 150px #FFDADE,
    0 0 200px #FFDADE;
    animation: animate 10s linear infinite;          
  }

  .square_light span{
    width: 50px;
    height: 50px;
    position: fixed;
    border: 1px solid #000;
    z-index: 1;
    bottom: -180px;
    background-color: #18191f;
    box-shadow: 0 0 50px #ADFF2F,
    0 0 100px #ADFF2F,
    0 0 150px #ADFF2F,
    0 0 200px #ADFF2F;
    animation: animate 10s linear infinite;          
  }

  .square_light span:nth-child(1), .square span:nth-child(1){
      left: 60px;
      animation-delay:0.6s;
  }
  .square_light span:nth-child(2), .square span:nth-child(2){
      left: 10%;
      animation-delay: 3s;
  }
  .square_light span:nth-child(3), .square span:nth-child(3){
      left: 20%;
      animation-delay: 2s;
  }
  .square_light span:nth-child(4), .square span:nth-child(4){
      left: 30%;
      animation-delay: 5s;
      width: 80px;
      height: 80px;
  }
  .square_light span:nth-child(5), .square span:nth-child(5){
      left: 40%;
      animation-delay: 1s;
  }
  .square_light span:nth-child(6), .square span:nth-child(6){
      left: 50%;
      animation-delay: 7s;
  }
  .square_light span:nth-child(7), .square span:nth-child(7){
      left: 60%;
      animation-delay: 6s;
      width: 100px;
      height: 100px;
  }
  .square_light span:nth-child(8), .square span:nth-child(8){
      left: 70%;
      animation-delay: 8s;
  }
  .square_light span:nth-child(9), .square span:nth-child(9){
      left: 80%;
      animation-delay: 6s;
      width: 90px;
      height: 90px;
  }
  .square_light span:nth-child(10), .quadrados span:nth-child(10){
      left: 90%;
      animation-delay: 4s;

  }

  @keyframes animate {
    0%{
      transform: translateY(0);
    }
    80%{
      opacity: .7;
    }

  100%{
    transform: translateY(-800px) rotate(360deg);
    opacity: 0;
  }
  }

  .contatos{
    display: flex;
    gap: 5rem;
    margin-top: 1rem;
  }
`;

export const Box_Header = styled.header`
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
    font-family: "Rubik Doodle Shadow", sans-serif;
    font-size: 32px;
    padding: 0 2rem;
    flex-wrap: wrap;

    h1 img{
        border-radius: 50px;
    }

    li img{
        width: 25px;
    }

    @media(max-width: 980px){
        justify-content: center;
        font-size: 28px;

      h1{
        display: none;
      }

      li img{
        width: 20px;
      }
    }
    
`

export const List = styled.ul`
    display: flex;
    gap: 1.5rem;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    
`