'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Root = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  column-gap: 25px;
`;

const Li = styled.li`
  display: inline;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.grayBlue70};
  list-style-type: none;
`;

export default function Menu() {
  return (
    <Root>
      <Li>
        <Link href="/map">Map</Link>
      </Li>
      <Li>
        <Link href="/settings">Setting</Link>
      </Li>
      <Li>About</Li>
      <Li>News</Li>
      <Li>Contacts</Li>
    </Root>
  );
}
