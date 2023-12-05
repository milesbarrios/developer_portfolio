import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #212121;
        font-family: 'Inter', sans-serif;
        min-height: 100vh;
    }

    h1{
        color: white;
        font-size: large;
    }
`;

export default GlobalStyle;
