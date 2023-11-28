import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  width: 390px;
  height: 50px;
`;

const Select = styled.select`
  border-radius: 30px;
  width: 100%;
  background-color: white;
  border: none;
  padding: 15px 45px 15px 60px;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.grayBlue80};
`;

const FooterSelect = () => {
  return (
    <Root>
      <Select>
        <option>English Language</option>
        <option>Russian Language</option>
        <option>France Language</option>
        <option>Italian Language</option>
      </Select>
    </Root>
  );
};

export default FooterSelect;
