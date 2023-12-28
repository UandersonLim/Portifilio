import { Main, Box_text, Route } from "./style";



const MainContent = (props) => {
    return(
        <Main>
            <Box_text>
                <h2>{props.apresentacao}</h2>
                <br></br>
                <p>{props.sobre}</p>
            </Box_text>
            <Route>
                <a>{props.projetos}</a>
                <a>{props.contato}</a>
            </Route>
            <ul className="contatos">
                <li><a><img src={props.linkedin}/></a></li>
                <li><a><img src={props.github}/></a></li>
                <li><a><img src={props.whatApp}/></a></li>
            </ul>
        </Main>
    );
};

export default MainContent;