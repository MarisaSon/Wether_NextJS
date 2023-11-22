import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 390px;
  height: 50px;
  padding: 15px 20px;
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
  color: ${({ theme }) => theme.colors.grayBlue80};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

const Svg = styled.svg`
  position: absolute;
  left: 30px
`;

const RightSvg = styled.svg`
  position: absolute;
  right: 20px;
`;

export default function Search() {
  return (
    <Div>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="30"
        viewBox="0 0 31 30"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.1673 17.0006H18.3773L18.0973 16.7306C19.2973 15.3306 19.9173 13.4206 19.5773 11.3906C19.1073 8.61063 16.7873 6.39063 13.9873 6.05063C9.75731 5.53063 6.19731 9.09063 6.71731 13.3206C7.05731 16.1206 9.27731 18.4406 12.0573 18.9106C14.0873 19.2506 15.9973 18.6306 17.3973 17.4306L17.6673 17.7106V18.5006L21.9173 22.7506C22.3273 23.1606 22.9973 23.1606 23.4073 22.7506C23.8173 22.3406 23.8173 21.6706 23.4073 21.2606L19.1673 17.0006ZM13.1673 17.0006C10.6773 17.0006 8.66731 14.9906 8.66731 12.5006C8.66731 10.0106 10.6773 8.00063 13.1673 8.00063C15.6573 8.00063 17.6673 10.0106 17.6673 12.5006C17.6673 14.9906 15.6573 17.0006 13.1673 17.0006Z"
          fill="#C3CAD9"
        />
      </Svg>

      <Input type="text" placeholder="Search..." />
      <RightSvg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="30"
        viewBox="0 0 31 30"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.9592 9.29376C12.5692 9.68376 12.5692 10.3138 12.9592 10.7038L16.8392 14.5838L12.9592 18.4638C12.5692 18.8538 12.5692 19.4838 12.9592 19.8738C13.3492 20.2638 13.9792 20.2638 14.3692 19.8738L18.9592 15.2838C19.3492 14.8938 19.3492 14.2638 18.9592 13.8738L14.3692 9.28376C13.9892 8.90376 13.3492 8.90376 12.9592 9.29376Z"
          fill="#C3CAD9"
        />
      </RightSvg>
    </Div>
  );
}
