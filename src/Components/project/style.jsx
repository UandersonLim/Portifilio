import styled from "styled-components";



export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 550px;
  height: 550px;
  `;

export const Box_imagem = styled.div`
  background-image: url("assets/Computer.png");
  background-size: cover;
  width: 60%;
  height: 60%;
  position: relative;

  /*RESPONSIVE  */
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

  @media(max-width: 620px){
    width: 88%;
    top: 36px;
    left: 15px;
  } 
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Rubik Doodle Shadow', Courier, monospace;
  width: 70%;
  justify-content: center;
  align-items: center;
  
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 20px;
    color: #fff;
    gap: 8px;
    padding: 8px 13px;
  }

  h1 img{
    width: 25px;
  }

  h1:hover{
    border-radius: 10px;
    background-color: rgba(220, 220, 220, 0.5);
  }

  p {
    margin-top: 1rem;
    text-align: center;
    font-family: 'M PLUS Rounded 1c';
    font-size: 15px;
  }
`;
