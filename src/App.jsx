import { GlobalStyle } from "./GlobalStyle";
import { Background } from "./Components/Background_Body";
import Button_blue from '../public/assets/button_blank_blue.png';
import button_green from '../public/assets/button_blank_green.png';
import Ingles from '../public/assets/ingles.png';
import fale_comigo from '../public/assets/fale_comigo.png';
import Letra_U from '../public/assets/Letter-U.png';
import Letra_L from '../public/assets/Letter-L.png';
import Image_Perfil from '../public/assets/perfil.ico';


function App() {


  return (
    <>
    <GlobalStyle/>
    <Background
      nome="UL"
      idioma="EN"
      dark={<img src={Button_blue} />}
      light={<img src={button_green}/>}
      contato={fale_comigo}
      ingles={Ingles}
      letraU={Letra_U}
      letraL={Letra_L}
      perfil={Image_Perfil}
    />

    </>
  )
}

export default App;
