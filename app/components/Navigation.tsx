import Link from "next/link";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link href="/cabins">Cabins</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/account">Your Account</Link>
      </li>
    </ul>
  );
};

export default Navigation;