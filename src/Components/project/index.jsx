import { Card, Main, Description } from "./style";
import { Header } from "../Home";
import { TrocaDeTema } from "../Tema";

export const Projetos = () => {
  return (
    <Main>
      <div>
        <Card>
          <figure>
            <img src="./public/assets/Restaurantes.gif"/>
          </figure>
        </Card>
        <Description>
          <h1>Luffy</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            commodi, accusamus sunt voluptate soluta veniam facilis architecto
            est necessitatibus nisi vel totam fuga recusandae aut consequuntur
            pariatur minima, hic nesciunt.
          </p>
        </Description>
      </div>
      <div>
        <Card>
          <figure>
            <img src="./public/assets/jogo-da-velha.gif"/>
          </figure>
        </Card>
        <Description>
          <h1>Luffy</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            commodi, accusamus sunt voluptate soluta veniam facilis architecto
            est necessitatibus nisi vel totam fuga recusandae aut consequuntur
            pariatur minima, hic nesciunt.
          </p>
        </Description>
      </div>
      <div>
        <Card>
          <figure>
            <img src="./public/assets/pokedex.gif"/>
          </figure>
        </Card>
        <Description>
          <h1>Luffy</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            commodi, accusamus sunt voluptate soluta veniam facilis architecto
            est necessitatibus nisi vel totam fuga recusandae aut consequuntur
            pariatur minima, hic nesciunt.
          </p>
        </Description>
      </div>
      <div>
        <Card>
          <figure>
            <img src="./public/assets/filmes.gif"/>
          </figure>
        </Card>
        <Description>
          <h1>Luffy</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            commodi, accusamus sunt voluptate soluta veniam facilis architecto
            est necessitatibus nisi vel totam fuga recusandae aut consequuntur
            pariatur minima, hic nesciunt.
          </p>
        </Description>
      </div>
    </Main>
  );
};
