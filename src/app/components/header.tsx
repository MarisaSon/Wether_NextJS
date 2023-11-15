"use client";
import Link from "next/link";
import styled from "styled-components";

const Button = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

const GreenButton = styled(Button)`
  color: green;
  border-color: black;
`;

const PurpleButton = styled(Button)`
  color: purple;
  border-color: black;
`;

export default function Header() {
  return (
    <div>
      <Link href="/">
        {" "}
        <Button>Logo</Button>
      </Link>

      <Link href="/search">
        <GreenButton>Search</GreenButton>
      </Link>
      <Link href="/city">
        <PurpleButton>City</PurpleButton>
      </Link>
    </div>
  );
}
