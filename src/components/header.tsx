'use client';

import Search from '@/components/search';
import styled from 'styled-components';
import Logo from './ui/logo';
import Menu from './menu';

const Root = styled.header`
  display: flex;
  column-gap: 50px;
  align-items: center;
  padding: 25px;
  border-bottom: 2px solid #f5f6f7;
`;

const Header = () => {
  return (
    <Root>
      <Logo href="/" />
      <Search />
      <Menu />
    </Root>
  );
};

export default Header;
