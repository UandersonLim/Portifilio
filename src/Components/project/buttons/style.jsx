import styled from "styled-components";

export const Box_Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    font-family: 'Rubik Doodle Shadow', sans-serif;
    cursor: pointer;
    margin-bottom: 2rem;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    
    @media(max-width: 550px){
        flex-wrap: wrap;
    }
    
    a{
        border-radius: 10px;
        padding: 10px 15px;
    }

    #htmlCssJs{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
    }

    .background_Button{
        background-color: rgba(220,220,220, 0.5);

    }
`