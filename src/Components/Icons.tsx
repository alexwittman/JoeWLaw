import { Image } from "@chakra-ui/react";
import GooglePng from "../Images/GoogleLogo.png";
import AvvoPng from "../Images/AvvoLogo.png";

export function GoogleIcon() {
  return <Image src={GooglePng} height="32px" />;
}

export function AvvoIcon() {
  return <Image src={AvvoPng} height="32px" />;
}
