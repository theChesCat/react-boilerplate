import { createGlobalStyle } from 'styled-components'

/**
 * Contains the default style for all the app
 */

const GlobalStyle = createGlobalStyle`
    :root {
    }

    body {
        font-family: 'Raleway', sans-serif;
        -webkit-font-feature-settings: 'lnum';
        -moz-font-feature-settings: 'lnum';
        font-feature-settings: 'lnum';
        padding: 0;
        margin: 0;
        font-size: 12px;

        h1, h2, h3, h4, h5, p {
            padding: 0;
            margin: 0;
        }
        h1 {
            font-size: 24px;
            font-weight: 700;
        }
        h2 {
            font-size: 16px;
            font-weight: 700;
        }
        h3 {
            font-size: 12px;
            font-weight: 700;
            line-height: 1.4em;
        }
        p {
            font-size: 12px;
            line-height: 1.4em;
        }
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }
    }
`
export default GlobalStyle
