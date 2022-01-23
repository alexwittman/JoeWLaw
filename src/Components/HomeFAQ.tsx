import { CheckIcon } from "@chakra-ui/icons";
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Link,
  chakra,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Icon,
  Accordion,
} from "@chakra-ui/react";
import FAQList from "./FAQList";

export default function HomeFAQ() {
  return (
    <Container maxW={"5xl"}>
      <Flex
        flexDirection={"column"}
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 6, md: 8 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", md: "3xl" }}
          lineHeight={"110%"}
        >
          FAQs
        </Heading>
        <Heading
          mt={5}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Have Questions?{" "}
          <chakra.span display={{ base: "inline", sm: "none" }}>
            <br />
          </chakra.span>
          <Text as={"span"} color={"blue.400"}>
            We Have Answers
          </Text>
        </Heading>
        <FAQList n={5} />
        <Stack spacing={6} direction={"row"} mt={6}>
          <Button as={Link} rounded={"full"} px={6} href="faq">
            View More
          </Button>
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
