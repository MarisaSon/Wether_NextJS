'use client';
import Link from 'next/link';
import styled from 'styled-components';

const Root = styled.ul`
  display: flex;
  column-gap: 25px;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  display: inline;
  margin-left: 25px;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.grayBlue70};
  list-style-type: none;
`;

const Div = styled.div`
  margin-left: 50px;
`;

export default function Menu() {
  return (
    <Root>
      <ul>
        <Li>
          <Link href="/map">Map</Link>
        </Li>
        <Li>
          <Link href="/settings">Setting</Link>
        </Li>
        <Li>About</Li>
        <Li>News</Li>
        <Li>Contacts</Li>
      </ul>
    </Root>
  );
}
