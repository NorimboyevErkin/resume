import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo/logo.svg";

function Logo() {
  return (
    <Link href="/" style={{display:'flex' , alignItems:'center'}}>
      <a style={{display:'inline-block'}}>
        <Image
          src={logo}
          alt="logo"
          layout="intrinsic"
          width={30}
          height={30}
        />
      </a>
    </Link>
  );
}

export default Logo;
