import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between py-5 px-20 shadow-lg">
      <Link href="/" className="font-semibold text-lg">
        Room Rover
      </Link>
      <div>DropDown</div>
    </header>
  );
};

export default Header;
