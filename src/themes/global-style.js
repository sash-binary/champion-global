import { createGlobalStyle } from 'styled-components'
import Reset from './reset'
import Variables from './variables'
import screen from './screens'

const GlobalStyle = createGlobalStyle`
    ${Reset}
    ${Variables}

    * {
        &, &::before, &::after {
            box-sizing: border-box;
        }
    }
    html {
        font-size: 62.5%; /* 1rem = 10px */
        height: 100%;
    }
    body {
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 1.6rem;
        margin: 0;
        padding: 0;

        @media ${screen.lg} {
            font-size: 1.4rem;
        }
    }
`

export default GlobalStyle
