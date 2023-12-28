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
        </Main>
    );
};

export default MainContent;