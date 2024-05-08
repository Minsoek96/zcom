'use client';

import { createGlobalStyle } from 'styled-components';

type GlobalProps = {
    $font: number;
}

const GlobalStyle = createGlobalStyle<GlobalProps>`
    html {
        box-sizing: border-box;
        font-size: ${(props) => props.$font}%;
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
