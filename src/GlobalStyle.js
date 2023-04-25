import { createGlobalStyle } from 'styled-components';
import "@fontsource/akaya-telivigala";
import "@fontsource/sora";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
}
body{
    font-family: 'Sora', sans-serif;
    overflow-x: hidden;
}
a{
    text-decoration: none;
    color: inherit;
}
`;

export default GlobalStyle;