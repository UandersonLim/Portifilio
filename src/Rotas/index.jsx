import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Projetcs } from "../pages/Projects";
import { Home } from "../pages/Home";
import { Page_Email } from "../pages/Email";
import { Email_Enviado } from "../pages/Menssagem_Sucesso_Email";


export const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projetos" element={<Projetcs/>}/>
                <Route path="/Page_Email" element={<Page_Email/>}/>
                <Route path="/Email_Enviado" element={<Email_Enviado/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}