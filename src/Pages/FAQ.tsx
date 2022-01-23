import {
  Flex,
  Container,
  Heading,
  Text,
  chakra,
  Stack,
} from "@chakra-ui/react";
import FAQForm from "../Components/FAQForm";
import FAQList from "../Components/FAQList";

export default function FAQ() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        flexDirection={"column"}
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 6, md: 10 }}
      >
        <Heading
          mt={5}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Frequently Asked{" "}
          <chakra.span display={{ base: "inline", sm: "none" }}>
            <br />
          </chakra.span>
          <Text as={"span"} color={"blue.400"}>
            Questions
          </Text>
        </Heading>
        <FAQList />
        <FAQForm />
      </Stack>
    </Container>
  );
}
