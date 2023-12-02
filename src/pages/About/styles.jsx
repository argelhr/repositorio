import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100%;
    background-color:#202430;
    padding: 0 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    @media screen and (max-width: 768px) {
        padding: 0 32px;
    }
    @media screen and (max-width: 480px) {
        padding: 0 16px;
    }
`;

export const Content = styled.section`
    max-width: 1366px;
    width: 100%;
    height: 100%;
    gap: 20px;
    padding: 20px 0;
    display: grid;
    grid-template-areas: 'sobre sobre sobre sobre educacao educacao'
                        'backend backend backend frontend frontend frontend';
    p{
        font-size: 1.2rem;
        text-align: justify;
    }
    aside{
        width: 100%;
        
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-radius: 10px;
        background-color: #282c34;
        box-shadow: 0 1px 3px 1px #00000050;
        vertical-align: text-bottom;
        overflow: auto;
        padding: 40px;
        p img{
            margin-right: 10px;
        }
        h2{
            font-size: 1.5rem;
        }
    }
    @media screen and (max-width: 768px) {
        padding: 20px 32px;
        grid-template-areas: 'sobre '
                        'educacao '
                        'backend'
                        'frontend ';
    }
    @media screen and (max-width: 480px) {
        padding: 20px 16px;
    }
`;

export const Sobre = styled.aside`
    grid-area: sobre;
    img{
        filter: drop-shadow(0 0 5px #cccccc50);
    }
    align-items: stretch;
    justify-content: stretch;
`;

export const Backend = styled.aside`
    grid-area: backend;
    
`;

export const Frontend = styled.aside`
    grid-area: frontend;
`;

export const Educacao = styled.aside`
    grid-area: educacao;
    figure{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        box-shadow: 0 0 5px 1px #00000030;
        border-radius: 10px;
        padding: 10px;
        transition: 0.3s;
        img{
            width: 80px;
            filter: drop-shadow(0 0 5px #cccccc50);
        }
        figcaption{
            font-size: 1rem;
            overflow: hidden;
        }
        &:hover{
            box-shadow: 0 0 5px 1px #23dafb75;
        }
    }

    @media screen and (max-width: 992px) {
        figure{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: start;
            gap: 10px;
            box-shadow: 0 0 5px 1px #00000030;
            border-radius: 10px;
            padding: 20px;
            figcaption{
                font-size: 1rem;
            }
            &:hover img{
                transition: 0.3s;
                filter: drop-shadow(0 0 5px #23dafb);
                transform: scale(1.1);
            }
        }
    }

    @media screen and (max-width: 768px) {
        padding: 20px 32px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 20px;
        figure{
            display: flex;
            flex-direction: row;
        }
    }
    @media screen and (max-width: 480px) {
        padding: 20px 16px;
        figure{
            flex-direction: column;
        }
    }
`;

export const Tecnologias = styled.section`
    display: grid;
    width: 100%;
    height: max-content;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 20px;
    align-items: stretch;
    text-align: center;
    justify-content: center;
    img{
        max-width: 50px;
        max-height: 50px;
        margin: 0 auto;
    }
    figure{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        box-shadow: 0 0 5px 1px #00000030;
        border-radius: 10px;
        padding: 10px;
        figcaption{
            font-size: 1rem;
        }
        &:hover img{
            transition: 0.3s;
            filter: drop-shadow(0 0 5px #23dafb);
            transform: scale(1.1);
        }
    }
    figure:hover{
        transition: 0.3s;
        box-shadow: 0 0 5px 1px #23dafb75;
    }
    a{
        text-decoration: none;
        color: #fff;
        font-size: 1.2rem;
        transition: 0.2s;
    }
    a:hover{
        color: #23dafb;
    }
`;