import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function WhyJoe() {
  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "4xl", lg: "5xl" }}>
            <Text as={"span"} position={"relative"}>
              Why Choose
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              Joe Wittman
            </Text>
            {"?"}
          </Heading>
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
            as debtor's attorney or as a trustee. I have helped draft bankruptcy
            laws both locally and nationally. Bankruptcy is all that I do. I
            have handled both simple and complex cases over the years. My
            clients obtain a discharge from their debts in{" "}
            <Text
              as="span"
              fontWeight={700}
              fontSize={{ base: "lg", lg: "xl" }}
            >
              over 90%
            </Text>{" "}
            of their cases so they can start their lives over and begin again.
          </Text>
          <Flex align={"center"} flex={1} flexDirection={"column"}>
            <Stack spacing={6} direction={"row"} mt={0}>
              <Button as={Link} rounded={"full"} px={6} href="bankruptcy">
                Learn More
              </Button>
              <Button
                as={Link}
                href="contact"
                rounded={"full"}
                bg={"blue.400"}
                px={6}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Free Consultation
              </Button>
            </Stack>
          </Flex>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
