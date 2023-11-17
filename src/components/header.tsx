'use client';
import Search from '@/components/search';
import styled from 'styled-components';
import Logo from './logo';
import Menu from './menu';

const Div = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0px 10px;
`;

const InnerDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export default function Header() {
  return (
    <nav>
      <Div>
        <Logo />
        <InnerDiv>
          <Menu />
          <Search />
        </InnerDiv>
      </Div>
    </nav>
  );
}
