import { useColorModeValue, Link } from "@chakra-ui/react";

export default function Logo() {
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Link
      p={2}
      href={"/"}
      fontSize={{ lg: "xl", md: "md" }}
      fontWeight={700}
      color={useColorModeValue("gray.800", "white")}
      _hover={{
        textDecoration: "none",
        color: linkHoverColor,
      }}
      display="block"
    >
      Joe Wittman Law
    </Link>
  );
}
