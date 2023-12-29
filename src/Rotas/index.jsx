import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Projetcs } from "../pages/Projects";
import { Home } from "../pages/Home";


export const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projetos" element={<Projetcs/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}