import Image from "next/image";
import { ILogo } from "../types/home";

export default function Logo({ footer }: ILogo) {
  return (
    <Image
      src={footer ? "/footer-logo.png" : "/logo.png"}
      alt="logo"
      width={150}
      height={70}
    />
  );
}
