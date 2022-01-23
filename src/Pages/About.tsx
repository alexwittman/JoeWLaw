import React from "react";
import {
  chakra,
  useColorModeValue,
  Flex,
  Grid,
  Image,
  Text,
  GridItem,
  Center,
  Stack,
  VStack,
  StackDivider,
  SimpleGrid,
  Link,
  Box,
} from "@chakra-ui/react";
import AvvoProfile from "../Components/AvvoProfile";
import AvvoRating from "../Components/AvvoRating";

export default function About() {
  return (
    <Center mt={{ base: 4, md: 10 }}>
      <Grid
        templateRows={{ base: "repeat(3, 1fr)", md: "repeat(1, 1fr)" }}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        maxW={{ base: "full", md: "6xl" }}
        mx={{ base: 6, md: 10 }}
        gap={{ base: 4, md: 10 }}
      >
        <GridItem>
          <Box>
            <Image
              src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
              alt="3 women looking at a laptop"
              fit="cover"
              h={{ base: "full", md: "64" }}
              w={"full"}
              bg="gray.100"
              loading="lazy"
            />
            <Center>
              <Stack direction="row" align="center">
                <AvvoProfile />
                <AvvoRating />
              </Stack>
            </Center>
          </Box>
        </GridItem>
        <GridItem
          colSpan={{ base: 1, md: 2 }}
          rowSpan={{ base: 2, md: 1 }}
          py={{ md: 6 }}
        >
          <Stack divider={<StackDivider />} spacing={4}>
            <chakra.h1
              fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              color={useColorModeValue("brand.600", "gray.300")}
              lineHeight="shorter"
            >
              Joe Wittman{" "}
            </chakra.h1>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              I have practiced bankruptcy for{" "}
              <Text
                as="span"
                fontWeight={700}
                fontSize={{ base: "lg", lg: "xl" }}
              >
                over 40 years
              </Text>{" "}
              . I have handled{" "}
              <Text
                as="span"
                fontWeight={700}
                fontSize={{ base: "lg", lg: "xl" }}
              >
                over 12,000 bankruptcies
              </Text>{" "}
              as debtor's attorney or as a trustee. I have helped draft
              bankruptcy laws both locally and nationally. Bankruptcy is all
              that I do. I have handled both simple and complex cases over the
              years. My clients obtain a discharge from their debts in{" "}
              <Text
                as="span"
                fontWeight={700}
                fontSize={{ base: "lg", lg: "xl" }}
              >
                over 90%
              </Text>{" "}
              of their cases so they can start their lives over and begin again.
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }}>
              <VStack textAlign="left" align={"left"}>
                <Text fontSize={"lg"} fontWeight={600}>
                  Additional Links
                </Text>
                <Link color={"teal.500"} href={""}>
                  US Bankruptcy Court, District of Kansas
                </Link>
                <Link color={"teal.500"} href={""}>
                  IRS
                </Link>
              </VStack>
              <VStack align={"left"}>
                <Text fontSize={"lg"} fontWeight={600}>
                  Education
                </Text>

                <Text>
                  <Link color={"teal.500"} href={""}>
                    University of Kansas, School of Law
                  </Link>
                </Text>

                <Text fontSize={"lg"} fontWeight={600}>
                  Associations
                </Text>
                <Text>
                  <Link color={"teal.500"} href={""}>
                    Kansas Bar Assotiation
                  </Link>
                </Text>
              </VStack>
            </SimpleGrid>
          </Stack>
        </GridItem>
      </Grid>
    </Center>
  );
}
