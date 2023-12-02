import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    background-color:#282c34;
    font-family: 'Inter','Roboto', sans-serif;
    color:#fff;
    &::-webkit-scrollbar{
        width:8px;
    }
    &::-webkit-scrollbar-thumb{
        background-color:#23dafb;
        border-radius: 20px;
    }
    &::-webkit-scrollbar-track{
        background-color: #0b0b28;
    }

}
`;

export default GlobalStyle;
