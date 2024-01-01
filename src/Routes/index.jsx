import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Projetcs } from "../pages/Projects";
import { Home } from "../pages/Home";
import { Page_Email } from "../pages/Email";
import { Email_Sent } from "../pages/Menssage_Success";


export const Connection_Routes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projetcs/>}/>
                <Route path="/Page_Email" element={<Page_Email/>}/>
                <Route path="/Email_Enviado" element={<Email_Sent/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}