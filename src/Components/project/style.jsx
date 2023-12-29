import styled from "styled-components";


export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-wrap: wrap;
`

export const Card = styled.main`
    background-image: url('../public/assets/Computer.png');
    background-size: cover;
    width: 350px;
    height: 350px;
    border: 1px solid #000;

    figure{
        position: relative;
        width: 87%;
        height: 70%;  
    }
    
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 302px;
        height: 190px;
        position: absolute;
    }
`;

export const Description = styled.div`
    width: 350px;

    h1{
        text-align: center;
    }

    p{
        text-align: center;
    }
`