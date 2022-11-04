import React from "react";
import {
  chakra,
  useColorModeValue,
  Flex,
  Grid,
  Image,
  Text,
  GridItem,
} from "@chakra-ui/react";
import ContactForm from "./ContactForm";
import ConsultationImage from "../Images/Consultation.jpg";

export default function HomeForm() {
  return (
    <Grid
      templateRows={{ base: "repeat(5, 1fr)", md: "repeat(1, 1fr)" }}
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      width="full"
      gap="4"
    >
      <GridItem display={{ base: "none", md: "block" }}>
        <Image
          src={ConsultationImage}
          alt="3 women looking at a laptop"
          fit="cover"
          h={{ base: 64, md: "full" }}
          w={"full"}
          bg="gray.100"
          loading="lazy"
        />
      </GridItem>
      <GridItem
        colSpan={{ base: 1, md: 2 }}
        rowSpan={{ base: 4, md: 1 }}
        py={{ md: 6 }}
      >
        <Flex
          direction="column"
          alignItems="start"
          justifyContent="center"
          px={{ base: 4, lg: 20 }}
        >
          <chakra.h1
            mb={6}
            fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            color={useColorModeValue("brand.600", "gray.300")}
            lineHeight="shorter"
            textAlign={{ base: "center", md: "left" }}
          >
            Schedule A{" "}
            <Text as="span" color={"red.400"}>
              Free Consultation
            </Text>{" "}
            Today!
          </chakra.h1>
          <ContactForm />
        </Flex>
      </GridItem>
      <GridItem display={{ base: "block", md: "none" }}>
        <Image
          src={ConsultationImage}
          alt="3 women looking at a laptop"
          fit="cover"
          h={{ base: 64, md: "full" }}
          w={"full"}
          bg="gray.100"
          loading="lazy"
        />
      </GridItem>
    </Grid>
  );
}
