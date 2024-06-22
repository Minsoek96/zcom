'use client';

import { createGlobalStyle } from 'styled-components';

type GlobalProps = {
  $font: number;
};

const GlobalStyle = createGlobalStyle<GlobalProps>`

    @font-face {
    font-family: 'TwitterChirp';
    src: url('/fonts/twitterchirp.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    }

    html {
        box-sizing: border-box;
        font-size: ${(props) => props.$font}%;
    }

    a{
        text-decoration: none;
        color: ${(props) => props.theme.colors.mainFont}
    }


    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        font-size: 1.6rem;
        background-color: ${(props) => props.theme.colors.themeColor};
        color: ${(props) => props.theme.colors.mainFont};
        font-family: 'TwitterChirp';
        overflow: hidden;
    }

    :lang(ko) {
        h1, h2, h3 {
            word-break: keep-all;
    }
}
`;

export default GlobalStyle;
