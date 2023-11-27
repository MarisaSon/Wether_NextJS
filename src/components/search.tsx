import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  width: 390px;
  height: 50px;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  border-radius: 30px;
  width: 100%;
  background-color: white;
  border: none;
  padding: 15px 45px 15px 60px;
  box-shadow: 0px 2px 5px 0px rgba(38, 51, 77, 0.03);
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grayBlue80};
  }
`;

const Svg = styled.svg`
  position: absolute;
  left: 20px;
  pointer-events: none;
`;

const RightSvg = styled.svg`
  position: absolute;
  right: 20px;
  pointer-events: none;
`;

export default function Search() {
  return (
    <Root>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="30"
        fill="none"
        viewBox="0 0 31 30"
      >
        <path
          fill="#C3CAD9"
          fillRule="evenodd"
          d="M19.167 17h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L19.167 17zm-6 0c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"
          clipRule="evenodd"
        ></path>
      </Svg>
      <Input type="text" placeholder="Search..." />
      <RightSvg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="30"
        fill="none"
        viewBox="0 0 31 30"
      >
        <path
          fill="#C3CAD9"
          fillRule="evenodd"
          d="M12.96 9.294a.996.996 0 000 1.41l3.88 3.88-3.88 3.88a.996.996 0 101.41 1.41l4.59-4.59a.996.996 0 000-1.41l-4.59-4.59c-.38-.38-1.02-.38-1.41.01z"
          clipRule="evenodd"
        ></path>
      </RightSvg>
    </Root>
  );
}
