'use client';
import Link from 'next/link';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
`;

const Li = styled.li`
  padding: 25px;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.grayBlue70};
`;

export default function Menu() {
  return (
    <div>
      <Ul>
        <Link href="/map">
          <Li>Map</Li>
        </Link>
        <Link href="/settings">
          <Li>Setting</Li>
        </Link>
      </Ul>
    </div>
  );
}
