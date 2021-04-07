import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  
}


  html, body {
  
    overflow-x: hidden;  
}
body {
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  background-color: #f9f9f9;
}
`;

export default GlobalStyle;
