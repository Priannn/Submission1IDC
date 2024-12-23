import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Yuji+Mai&display=swap');
 * {
    margin : 0px;
    padding : 0px;
    box-sizing : border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
}
    
body {
    color:#6c7983;
    font-size:1rem;
}`;
export default GlobalStyle;
