import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href="/">
        {" "}
        <button>Logo</button>
      </Link>

      <Link href="/search">
        <button>Search</button>
      </Link>
      <Link href="/city">
        <button>City</button>
      </Link>
    </div>
  );
}
