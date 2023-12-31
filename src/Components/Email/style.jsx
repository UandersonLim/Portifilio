import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  height: 75vh;
  font-family: "Rubik Doodle Shadow", sans-serif;
  margin-top: 1rem;
  /* background-color: #000; */
`;

export const Box_Email = styled.div`
  height: 550px;
  width: 450px;
  display: flex;
  background-color: rgba(220, 220, 220, 0.2);
  flex-direction: column;
  color: #fff;
  border-radius: 10px;

  a {
    color: #fff;
  }

  form div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  form input,
  form textarea,
  form button,
  form label {
    border-radius: 10px;
    padding-left: 1rem;
    width: 80%;
  }

  h1 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 10px;

    input:focus,
    textarea:focus {
      outline: 0;
    }
  }

  form input {
    height: 40px;
    border: none;
  }

  .Box_textArea {
    height: 200px;
    width: 100%;
  }

  form .Box_textArea textarea {
    border: none;
    padding-top: 1rem;
    resize: none;
    height: 100%;
  }

  form label {
    text-align: justify;
    padding-left: 5px;
    padding-bottom: 5px;
  }
  form button {
    cursor: pointer;
    transition: 0.2s;
    margin-bottom: 1rem;
    height: 45px;
  }
  
  .animationButton{
    position: relative;
    border-top: 0.2em solid rgba(255, 255, 255, 0.2);
    border-right: 0.2em solid rgba(255, 255, 255, 0.2);
    border-bottom: 0.2em solid rgba(255, 255, 255, 0.2);
    border-left: 0.2em solid #ffffff;
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
    border: none;
    text-align: center;
    width: 20px;

  }

  @-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}

@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}

  @media (max-width: 475px) {
    width: 80%;
    height: 64vh;
    position: fixed;

    h1 {
      font-size: 20px;
      margin-top: 10px;
    }

    /* form button {
      margin-top: 1;
    } */

    form {
      gap: 10px;
    }
  }
`;
