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
  border-bottom: 1px solid black;
`;

// const Div = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 0px 25px;
// `;

// const InnerDiv = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

export default function Header() {
  return (
    <Nav>
     
        <Logo />
        <Menu />
      
      <Search />
    </Nav>
  );
}
