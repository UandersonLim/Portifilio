import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  height: 40vh;
  font-family: "Rubik Doodle Shadow", sans-serif;
  `;

export const Box_Email = styled.div`
  height: 550px;
  width: 450px;
  display: flex;
  background-color: rgba(220, 220, 220, 0.2);
  flex-direction: column;
  color: #fff;
  border-radius: 10px;

  a{
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
  form button, form label {
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
    height: 8%;
    cursor: pointer;
    transition: 0.2s;
    margin-bottom: 1rem;
  }

  @media(max-width: 475px){
    width: 80%;
    height: 64vh;

      h1{
        font-size: 20px;
        margin-top: 10px;
      }

      form button{
        margin-top: 1rem;
      }

      form {
        gap: 10px;
      }
      
  }
  
`;
