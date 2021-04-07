import { createGlobalStyle } from "styled-components";

import HelveticaRoman from "./components/fonts/HelveticaNeueLTStd-Roman.otf";

export default createGlobalStyle`
    @font-face {
        font-family: 'HelveticaRoman';
        src: local('HelveticaRoman') format('otf');
        url(${HelveticaRoman}); 
    }
`;
