import { createGlobalStyle } from 'styled-components';
import Essentiarum from './assets/fonts/Essentiarum.ttf';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0
  }
  @font-face {
    font-family: 'Essentiarum';
    src: url(${Essentiarum}) format('truetype');
  }
`;
