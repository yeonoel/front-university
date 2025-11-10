import { createGlobalStyle } from "styled-components";
import { useTheme } from "../hooks";

const StyleGlobalstyle = createGlobalStyle`
  * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
      box-sizing: border-box;
    }

    body {
    background-color: ${({isDarkMode}) =>
        isDarkMode ? '#28272dff' : '#e2e3e9'};
    color: ${({isDarkMode}) =>
        isDarkMode ? '#fff' : '#28272dff'};
    margin: 0;
    }
`


    function GlobalStyle() {
        const {theme} = useTheme();

      return <StyleGlobalstyle isDarkMode={theme === 'dark' } />;
    }


    export default GlobalStyle;

