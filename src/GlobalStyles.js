import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 18px Oswald, sans-serif;
    -webkit-font-smoothig: antialiased;
  }

  input, button, textarea {
    font: 400 18px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  .toast {
    background-color: #78D0d3;
    font-size: 14px;
    color: #ffffff;
    font-weight: bold;
  }

  .toast-erro {
    background-color: red;
    font-size: 14px;
    color: #ffffff;
    font-weight: bold;
  }
`;
