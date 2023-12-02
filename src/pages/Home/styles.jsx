import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    min-height: 90vh;
    height: 100%;
    margin: 0 auto;
    padding: 0 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#202430;
    @media screen and (max-width: 768px){
        padding: 0 32px;
    }
    @media screen and (max-width: 480px){
        padding: 0 16px;
    }
        will-change: opacity;
        transition: opacity 0.5s ease-in-out;
    `;

export const Content = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
    text-overflow: clip;
    span{
        color: #23dafb;
    }
    img{
        width: 300px;
        height: 300px;
        border-radius: 50%;
        object-fit: cover;
    }
    @media screen and (max-width: 768px){
        flex-direction: column-reverse;
        padding: 0 32px;
    }
    @media screen and (max-width: 480px){
        padding: 0 16px;
    }
    
`;

export const Card = styled.div`
    max-width: 500px;
    min-width: 250px;
    width: 100%;
    height: 100%;
    background-color: #282c34;
    border-radius: 5px;
    padding: 20px;
    gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    box-shadow: 0 1px 3px 1px #00000050;
    span{
        color: #23dafb;
    }
    a{
        text-decoration: none;
        color: #fff;
    }
`;

export const Sociais = styled.div`
    width: 100%;
    gap: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    `;

export const Social = styled.figure`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    figcaption{
        color: #fff;
        text-decoration: none;
        cursor: pointer;
    }
    img{
        width: 30px;
        height: 30px;
    }
    
    transition: all 0.3s ease-in-out;
    &:hover{
        transform: scale(1.2);
        object-fit: cover;
        filter: drop-shadow(0 0 4px #23dafb);
    }
`;