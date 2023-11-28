import Link from 'next/link';
import styled from 'styled-components';
import { FC } from 'react';
import { useTheme } from 'styled-components';
import theme from '@/styles/theme';

const Text = styled.span<{ $size?: 'sm' | 'md' | 'lg' | undefined }>`
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  color: ${({ color }) => handleColor(color)};
  font-size: ${({ $size }) => handleSize($size)};
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
  color?: 'grayBlue' | 'lightTheme' | string;
};

const handleSize = (size: 'sm' | 'md' | 'lg' | undefined) => {
  switch (size) {
    case 'sm':
      return '14px';
    case 'md':
      return '18px';
    case 'lg':
      return '22px';
    default:
      return '18px';
  }
};

const handleColor = (color: 'grayBlue' | 'lightTheme' | string | undefined) => {
  switch (color) {
    case 'grayBlue':
      return theme.colors.grayBlue50;
    case 'lightTheme':
      return theme.colors.lightTheme;
    default:
      return theme.colors.grayBlue50;
  }
};

const Logo: FC<Props> = ({ href = '/', size, color }) => {
  const theme = useTheme()
  return (
    <Link href={href}>
      <Text $size={size} color={color} theme={theme}>Weather</Text>
    </Link>
  );
};

export default Logo;
