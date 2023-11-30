import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
   ${normalize}

   @font-face {
   font-family: 'Roboto';
   src: url('/fonts/Roboto') format('ttf')
   }

   html, body {
   height: 100%; 
   }

   
   body {
    background-color: ${({ theme }) => theme.colors.grayBlue98};
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
   }

   a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.grayBlue70};
   }
`;

export default GlobalStyles;
