import Link from 'next/link';
import styled from 'styled-components';
import { FC } from 'react';

const Text = styled.span<{ $size?: 'sm' | 'md' | 'lg' }>`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.grayBlue50};
`;

/**
 * Свойства компонента
 */
type Props = {
  /**
   * Url страницы на которую ведет ссылка
   */
  href?: string;
  size?: 'sm' | 'md' | 'lg';
};

const Logo: FC<Props> = ({ href = '/', size = 'md' }) => {
  return (
    <Link href={href}>
      <Text $size={size}>Weather</Text>
    </Link>
  );
};

export default Logo;
