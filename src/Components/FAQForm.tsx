import React from "react";
import {
  chakra,
  useColorModeValue,
  Flex,
  Image,
  Text,
  Stack,
  Container,
  Heading,
} from "@chakra-ui/react";
import ContactForm from "./ContactForm";

export default function FAQForm() {
  return (
    <Stack>
      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}>
          Still Have{" "}
          <Text as={"span"} color={"red.400"}>
            Questions?
          </Text>
        </Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Fill out this form and I will be in touch with you within 2 business
          days.
        </Text>
        <ContactForm />
      </Stack>
    </Stack>
  );
}
