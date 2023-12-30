import styled from "styled-components";

export const Botao_home = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: center;
    align-items: center;

    a:hover {
    background-color: rgba(220, 220, 220, 0.5);
    border-radius: 10px;
    transition: all 0.3s;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px 15px;
    color: #fff;
    font-family: 'Rubik Doodle Shadow', sans-serif;
  }
`