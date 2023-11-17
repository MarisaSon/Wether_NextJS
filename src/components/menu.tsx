'use client';
import Link from 'next/link';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
`;

const Li = styled.li`
  padding: 45px;
`;

export default function Menu() {
  return (
    <div>
      <Ul>
        <Link href="/map">
          <Li>Карта</Li>
        </Link>
        <Link href="/settings">
          <Li>Настройки</Li>
        </Link>
      </Ul>
    </div>
  );
}
