'use client';

import Select from './select';
import Logo from './ui/logo';
import styled from 'styled-components';

const Root = styled.footer`
  background-color: #0e0d0d;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  column-gap: 50px;
  align-items: center;
  flex-shrink: 0;
`;

const Footer = () => {
  return (
    <Root>
      <Logo size="sm" color="lightTheme" />
      <Select />
    </Root>
  );
};

export default Footer;
