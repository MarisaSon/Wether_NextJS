'use client';

import Select from './select';
import Logo from './ui/logo';
import styled from 'styled-components';

const Root = styled.footer`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Div = styled.div`
  margin-top: auto;
  background-color: #0e0d0d;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  column-gap: 50px;
  align-items: center;
`;

const Footer = () => {
  return (
    <Root>
      <Div>
        <Logo size="sm" color="lightTheme" />
        <Select />
      </Div>
    </Root>
  );
};

export default Footer;
