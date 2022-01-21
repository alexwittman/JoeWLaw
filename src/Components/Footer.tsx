import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Center pt={6}>
        <Stack
          direction={{ base: "column", sm: "row" }}
          align={"center"}
          spacing={4}
        >
          <Link href={"about"}>About</Link>
          <Link href={"contact"}>Contact</Link>
          <Link href={"bankruptcy"}>Bankruptcy</Link>
          <Link href={"reviews"}>Reviews</Link>
          <Link href={"faq"}>FAQ</Link>
          <Link href={"blog"}>Blog</Link>
          <Link href={"covid"}>COVID</Link>
        </Stack>
      </Center>
      <Box pt={4}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Text py={6} fontSize={"sm"} textAlign={"center"}>
          I am a federal authorized DEBT RELIEF AGENCY and I help people file
          bankruptcy. Information contained in this website is not legal advice
          and no attorney client relationship is created by you accessing
          information in this website. This is informational only and unless you
          sign a written contact with Joseph I. Wittman Attorney at Law, I do
          not represent you in any way. You can retain me as your attorney by
          contacting us at the number set forth in this website and signing a
          contract to employ to our firm to help you.
        </Text>
      </Box>
    </Box>
  );
}
