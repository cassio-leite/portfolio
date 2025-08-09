import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  html {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  :root {
  --cor-primaria: #07f7f7;
}

  body {
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #313741;
  }

  ::-webkit-scrollbar-thumb {
    background: #00d3ff;
    border-radius: 4px;
    border: 2px solid #313741;
  }
`;