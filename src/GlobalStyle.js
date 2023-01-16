import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
            box-sizing: border-box;

        }

        *,::after,::before {
            box-sizing: inherit;
        }

    body {
        max-width: 1216px;
        text-align: center;
        margin: 0 auto;
        font-family: 'Inter', sans-serif;
        color: ${({theme})=> theme.colors.mineShaft};
    }    
    
`;