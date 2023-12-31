import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* height: 80vh; */
  font-family: "Rubik Doodle Shadow", sans-serif;
  margin-top: 3rem;

  .menssagem {
    display: flex;
    height: 250px;
    width: 450px;
    background-color: rgba(255, 255, 255, 0.2);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    border-radius: 10px;
    margin-top: 2rem;
  }

  p {
    color: aquamarine;
    font-weight: 900;
  }

  div a {
    color: aquamarine;
    font-weight: 900;
  }

  .box_botoes {
    display: flex;
    gap: 3rem;
  }

  .botoes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    border-radius: 10px;
    cursor: pointer;
  }

  .botoes:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 480px) {
    .menssagem {
      height: 450px;
      width: 350px;
    }
  }
`;
