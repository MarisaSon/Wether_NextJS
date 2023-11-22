import Link from 'next/link';
import styled from 'styled-components';

const Title = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.grayBlue50};
`;

export default function Logo() {
  return (
    
      <Title>
        <span>
        <Link href="/">Weather </Link>
        </span>
      </Title>
  
  );
}
