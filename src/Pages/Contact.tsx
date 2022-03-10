import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import ContactForm from "../Components/ContactForm";
import HomeForm from "../Components/HomeForm";
import Map from "../Components/Map";

export default function Contact() {
  return (
    <Stack
      spacing={6}
      as={Container}
      maxW={"7xl"}
      textAlign={"center"}
      align="center"
      px={{ base: 8, md: 0 }}
      mt={{ base: 4, md: 10 }}
    >
      <Heading fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}>
        Contact{" "}
        <Text as={"span"} color={"red.400"}>
          Us
        </Text>
      </Heading>
      <Text color={"gray.600"} fontSize={"xl"}>
        I would like to hear from you. Fill out this form and I will be in
        contact with you within 2 business days.
      </Text>
      <ContactForm />
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing="6"
        pt="4"
        px="8"
        width={"full"}
        maxWidth={"5xl"}
      >
        <VStack as={Flex} flex={1} textAlign="left" align={"left"} spacing={0}>
          <Text fontWeight={600} fontSize="2xl">
            Contact Information
          </Text>
          <Text fontSize={"lg"}>
            Phone:{" "}
            <Link color="teal.400" href="tel:+17852343663">
              (785)-234-3663
            </Link>
          </Text>
          <Text fontSize={"lg"}>
            Fax:{" "}
            <Link color="teal.400" href="tel:+17852343663">
              (785)-???-????
            </Link>
          </Text>
          <Text fontSize={"lg"}>
            Email:{" "}
            <Link color="teal.400" href="mailto:wittmanlaw@gmail.com">
              wittmanlaw@gmail.com
            </Link>
          </Text>
        </VStack>
        <Flex flex={2} flexDir={{ base: "column", md: "row" }}>
          <VStack textAlign="left" align={"left"} spacing={0} mr={10}>
            <Text fontWeight={600} fontSize="2xl">
              Location
            </Text>
            <Text fontSize={"lg"}>
              112 SW 6th Ave, Suite 508
              <br />
              Topeka, KS 66603
              <br />
              <Link
                color="teal.400"
                href="https://goo.gl/maps/v4bNdqXZb3hFmdoT9"
              >
                Get Directions
              </Link>
            </Text>
          </VStack>
          <Box minW="sm" pt={{ base: 6, md: 0 }}>
            <Map />
          </Box>
        </Flex>
      </Stack>
    </Stack>
  );
}
