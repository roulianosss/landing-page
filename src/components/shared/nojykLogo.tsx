import React from "react";
import Image from "next/image";

interface NojykLogoProps {
  size: number;
}

const NojykLogo: React.FC<NojykLogoProps> = ({ size }) => {
  return (
    <Image
      src="./assets/logos/nojyk.svg"
      width={size}
      height={size / 3.25}
      alt="logo nojyk"
    />
  );
};

export default NojykLogo;
