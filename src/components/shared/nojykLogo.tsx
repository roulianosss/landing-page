import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NojykLogoProps {
  size: number;
}

const NojykLogo: React.FC<NojykLogoProps> = ({ size }) => {
  return (
    <Link href="#header">
      <Image
        src="./assets/logos/nojyk.svg"
        width={size}
        height={size / 3.25}
        alt="logo nojyk"
      />
    </Link>
  );
};

export default NojykLogo;
