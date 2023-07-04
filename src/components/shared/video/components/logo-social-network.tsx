import Link from "next/link";
import Image from "next/image";


type LogoSocialNetworkProps = {
    url: string;
    srcImg: string;
    altImg: string;
    size: number;
};

const LogoSocialNetwork = ({
    url, srcImg, altImg, size
} : LogoSocialNetworkProps) => {
    return (
      <Link href={url}>
        <Image
          src={srcImg}
          width={size}
          height={size}
          alt={altImg}
        />
      </Link>
    );
  }
  

export default LogoSocialNetwork;