import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #202430;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 20px;
`;

export const Conteudo = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100%;
    display: grid;
    align-items: stretch;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    @media(max-width: 768px){
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    @media(max-width: 425px){
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

`;

export const Card = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: space-between;
    background-color: #282c34;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid #1a1d26;
    box-shadow: 0 0 5px 2px #1a1d26;
    transition: all 0.3s ease-in-out;
    h2{
        color: #fff;
        text-align: center;
    }
    &:hover{
        border: 1px solid #23dafb;
        box-shadow: 2px 2px 5px #23dafb;
        figure img{
            transition: all 0.3s ease-in-out;
            transform: scale(1.1);
        }
    }
    figure{
        width: 100%;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: all 0.3s ease-in-out;
        }
    }
    aside{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 20px;
        h2,p{
            padding: 0 10px;
        }
        
    }
`;

export const Botoes = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 20px 0 0 0;
    a{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #202430;
        padding: 10px;
        margin: 0 8px 8px 8px;
        color: #fff;
        box-shadow: 0 0 5px #23dafb;


        text-decoration: none;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
        &:hover{
            background-color: #fff;
            color: #000;
            img{
                filter: invert(1);
            }
        }
        img{
            width: 20px;
            margin-right: 5px;
        }
    }
`;