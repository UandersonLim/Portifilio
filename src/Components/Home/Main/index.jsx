import { Main, Box_text, Route } from "./style";
import { Link } from "react-router-dom";

const MainContent = (props) => {
    return(
        <Main>
            <Box_text>
                <h2>{props.apresentacao}</h2>
                <br></br>
                <p>{props.sobre}</p>
            </Box_text>
            <Route>
                <Link to="/projetos">{props.projetos}</Link>
            </Route>
            <ul className="contatos">
                <li><a href="https://www.linkedin.com/in/uandersondev/" target="_blank"><img src={props.linkedin}/></a></li>
                <li><a href="https://github.com/UandersonLim" target="_blank"><img src={props.github}/></a></li>
                <li><a href="https://wa.me/557591428306" target="_blank"><img src={props.whatApp}/></a></li>
            </ul>
        </Main>
    );
};

export default MainContent;