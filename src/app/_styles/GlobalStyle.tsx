'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    a{
        text-decoration: none;
        color: black;
    }


    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        font-size: 1.6rem;
        background-color: white;
    }

    :lang(ko) {
        h1, h2, h3 {
            word-break: keep-all;
    }
}
`;

export default GlobalStyle;
