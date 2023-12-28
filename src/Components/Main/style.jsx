import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  font-family: "Rubik Doodle Shadow", sans-serif;
  text-align: center;
  gap: 1rem;
  font-size: 25px;

  
`;
export const Box_text = styled.div`
  width: 50%;

  p {
    font-family: "M PLUS Rounded 1c";
    font-size: 18px;
  }
`;

export const Route = styled.div`
    display: flex;
    gap: 5rem;
    font-size: 2rem;
    cursor: pointer;

    a:hover{
        border-bottom: 1px solid #fff;
    }
`