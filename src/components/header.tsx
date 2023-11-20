'use client';
import Search from '@/components/search';
import styled from 'styled-components';
import Logo from './logo';
import Menu from './menu';

const Nav = styled.nav`
  display: flex;
  padding: 0px 25px;
  width: 100%;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 25px;
`;

const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Header() {
  return (
    <Nav>
      <Div>
        <Logo />
      </Div>
      <InnerDiv>
        <Menu />
        <Search />
      </InnerDiv>
    </Nav>
  );
}
