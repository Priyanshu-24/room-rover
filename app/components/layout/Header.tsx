import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-5 px-20 shadow-lg">
      <Link href="/" className="font-semibold text-lg flex items-center gap-1">
        <Image
          src="/images/logo.png"
          width={30}
          height={50}
          alt="room-rover-logo"
          quality={100}
        />
        Room Rover
      </Link>
      <div>DropDown</div>
    </header>
  );
};

export default Header;
