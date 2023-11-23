'use client';
import Search from '@/components/search';
import styled from 'styled-components';
import Logo from './logo';
import Menu from './menu';

const Nav = styled.nav`
  display: flex;
  column-gap: 50px;
  align-items: center;
  padding: 25px;
  border-bottom: 2px solid #f5f6f7;
`;

export default function Header() {
  return (
    <Nav>
      <Logo />
      <Search />
      <Menu />
    </Nav>
  );
}
