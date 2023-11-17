import styled from "styled-components";

const Input = styled.input`
  border-radius: 15px;
  padding: 7px;
  background-color: white;
  border: none;
`;

export default function Search() {
  return (
    <div>
      <Input type="text" placeholder="Поиск..." />
    </div>
  );
}
