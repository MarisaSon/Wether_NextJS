'use client';
import Link from 'next/link';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  margin-left: 25px;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.grayBlue70};
`;

const Div = styled.div`
  margin-left: 50px;
`;

export default function Menu() {
  return (
    <Div>
      <Ul>
        <Link href="/map">
          <Li>Map</Li>
        </Link>
        <Link href="/settings">
          <Li>Setting</Li>
        </Link>
        <Li>About</Li>
        <Li>News</Li>
        <Li>Contacts</Li>
      </Ul>
    </Div>
  );
}
