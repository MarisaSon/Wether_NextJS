import Link from 'next/link';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.grayBlue50};
`;

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <Title>Weather</Title>
      </Link>
    </div>
  );
}
