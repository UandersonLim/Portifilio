import styled from "styled-components";

export const Box_Header = styled.ul`
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
  font-family: "Rubik Doodle Shadow", sans-serif;
  font-size: 32px;
  padding: 0 2rem;
  flex-wrap: wrap;

  .Profile_image img {
    border-radius: 50px;
  }

  li a,
  .theme {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  li img {
    width: 25px;
  }

  li figcaption {
    font-size: 14px;
    color: #fff;
  }


/* RESPONSIVE */
  @media (max-width: 980px) {
    justify-content: center;
    font-size: 28px;

    .imagem_perfil {
      display: none;
    }

    li img {
      width: 20px;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 1.5rem;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  @media (max-width: 980px) {
    justify-content: space-evenly;
    width: 100%;
  }
`;
