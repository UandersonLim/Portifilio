import { GlobalStyle } from "./GlobalStyle";
import { Background } from "./Components/Background_Body";
import Lua from '../public/assets/lua.png';
import Estrela from '../public/assets/sol.png';

function App() {


  return (
    <>
    <GlobalStyle/>
    <Background
      nome="UL"
      idioma="EN"
      dark={<img src={Lua} />}
      light={<img src={Estrela}/>}
      contato="Contatos"
    />

    </>
  )
}

export default App;
