import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Link,
  chakra,
} from "@chakra-ui/react";

export default function CallToAction() {
  return (
    <Container maxW={"5xl"}>
      <Flex
        flexDirection={"column"}
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 6, md: 8 }}
        py={{ base: 12, md: 20 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
          lineHeight={"110%"}
        >
          <Text as={"span"} color={"green.400"}>
            Joe Wittman{" "}
            <chakra.span display={{ base: "inline", sm: "none" }}>
              <br />
            </chakra.span>
          </Text>
          Topeka Bankruptcy Attorney
        </Heading>
        <Heading
          mt={5}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Bankruptcy{" "}
          <chakra.span display={{ base: "inline", sm: "none" }}>
            <br />
          </chakra.span>
          <Text as={"span"} color={"green.400"}>
            Chapter 7 {"&"} 13
          </Text>
        </Heading>
        <Text color={"gray.600"} maxW={"3xl"} mt={6}>
          I have represented over 12,000 bankruptcy clients in Kansas over the
          past 40+ years. When credit counseling offers no{" "}
          <Text as="span" fontWeight={700}>
            debt relief
          </Text>
          , it may be time to consider Bankruptcy and get a fresh start.
        </Text>
        <Stack spacing={6} direction={"row"} mt={6}>
          <Button as={Link} rounded={"full"} px={6} href="bankruptcy">
            Learn More
          </Button>
          <Button
            as={Link}
            href="contact"
            rounded={"full"}
            px={6}
            colorScheme={"green"}
            bg={"green.400"}
            _hover={{ bg: "green.500" }}
          >
            Free Consultation
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
}
