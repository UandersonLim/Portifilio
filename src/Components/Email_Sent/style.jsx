import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Rubik Doodle Shadow", sans-serif;
  margin-top: 3rem;
  
  .message {
    
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

  .box_button {
    display: flex;
    gap: 3rem;
  }

  .button {
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

  /* RESPONSIVE */
  @media (max-width: 480px) {
    .message {
      height: 420px;
      width: 350px;
    }
  }
`;
