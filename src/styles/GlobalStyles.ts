import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
   ${normalize}

   @font-face {
   font-family: 'Roboto';
   src: url('/fonts/Roboto') format('ttf')
   }

   body {
    background-color: ${({ theme }) => theme.colors.grayBlue98};
    font-family: 'Roboto', sans-serif;
   }

   a {
      text-decoration: none;
   }
`;

export default GlobalStyles;
