'use client';

import Logo from './ui/logo';
import styled from 'styled-components';

const Root = styled.footer``;

const Footer = () => {
  return (
    <Root>
      <Logo size="sm" />
    </Root>
  );
};

export default Footer;
