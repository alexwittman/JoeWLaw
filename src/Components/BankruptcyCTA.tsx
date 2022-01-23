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

export default function BankruptcyCTA() {
  return (
    <Container maxW={"5xl"}>
      <Flex
        flexDirection={"column"}
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 6, md: 8 }}
        pt={{ base: 6, md: 12 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", md: "3xl" }}
          lineHeight={"110%"}
        >
          <Text as={"span"} color={"blue.400"}>
            Joe Wittman{" "}
            <chakra.span display={{ base: "inline", sm: "none" }}>
              <br />
            </chakra.span>
          </Text>
          Topeka Bankruptcy Attorney
        </Heading>
        <Heading
          mt={5}
          //fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Bankruptcy{" "}
          <chakra.span display={{ base: "inline", sm: "none" }}>
            <br />
          </chakra.span>
          <Text as={"span"} color={"blue.400"}>
            Chapter 7 {"&"} 13
          </Text>
        </Heading>
        <Text color={"gray.600"} maxW={"3xl"} mt={6}>
          It doesn’t have to be the end, but the beginning. You don’t have to
          fight this battle alone. If you are finding yourself overwhelmed by
          debt and are struggling to keep your head above water, you should
          consider talking to a Bankruptcy law firm today.
          <Text as="span" fontWeight={700}></Text>
        </Text>
        <Stack spacing={6} direction={"row"} mt={6}>
          <Button
            as={Link}
            href="contact"
            rounded={"full"}
            px={6}
            colorScheme={"blue"}
            bg={"blue.400"}
            _hover={{ bg: "blue.500" }}
          >
            Free Consultation
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
}
