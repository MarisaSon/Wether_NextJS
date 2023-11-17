import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
   ${normalize}

   body {
    background-color: ${({ theme }) => theme.colors.grayBlue98};
    
   }

   a {
      text-decoration: none;
   }
`;

export default GlobalStyles;
