import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }

    body{
        background-color: #f94144;
        /* ::-webkit-scrollbar{
            background-color: red;
        }

        ::-webkit-scrollbar-corner{
            border-radius: 30px;
        } */
    }

    @media screen and (max-width: 991px) {
        .App{
            display: flex;
            flex-direction: column;
        }
    }
`

export default GlobalStyle