import { useColorModeValue, Link } from "@chakra-ui/react";

export default function Logo() {
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Link
      p={2}
      href={"/"}
      fontSize={"sm"}
      fontWeight={500}
      color={useColorModeValue("gray.800", "white")}
      _hover={{
        textDecoration: "none",
        color: linkHoverColor,
      }}
      fontFamily={"heading"}
    >
      Wittman Law Logo
    </Link>
  );
}
