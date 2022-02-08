import {
  Stack,
  Heading,
  Flex,
  Text,
  Image,
  Button,
  Link,
  chakra,
} from "@chakra-ui/react";
import FAQForm from "../Components/FAQForm";

export default function Covid() {
  return (
    <Stack spacing={10} align={"center"}>
      <Flex
        flexDirection={"column"}
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 6, md: 8 }}
        pt={{ base: 6, md: 12 }}
      >
        <Heading
          mt={5}
          //fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Bankruptcy{" & "}
          <chakra.span display={{ base: "inline", sm: "none" }}>
            <br />
          </chakra.span>
          <Text as={"span"} color={"red.400"}>
            Covid-19
          </Text>
        </Heading>
        <Text
          fontSize={{ base: "md", lg: "lg" }}
          color={"gray.600"}
          maxW={"3xl"}
          mt={6}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt
          at arcu nec faucibus. Nam lobortis, felis ut vehicula sollicitudin,
          diam diam cursus dolor, eu interdum libero dui at mi.
        </Text>
        <Stack spacing={6} direction={"row"} mt={6}>
          <Button
            as={Link}
            href="contact"
            rounded={"full"}
            px={6}
            colorScheme={"red"}
            bg={"red.400"}
            _hover={{ bg: "red.500" }}
          >
            Free Consultation
          </Button>
        </Stack>
      </Flex>
      <Stack direction={{ base: "column", md: "row" }}>
        <Flex px={8} flex={2} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"3xl"}>
            <Heading fontSize={{ base: "4xl", lg: "5xl" }}>
              <Text as={"span"} position={"relative"}>
                Bankruptcy
              </Text>{" "}
              <Text color={"red.400"} as={"span"}>
                Tips{" "}
              </Text>
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              First, stay healthy and respect the distance between people while
              this pandemic is going on.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Second, if you are having problems with paying your debts
              bankruptcy could keep your creditors away and allow you to keep
              your home and your car. Contact us for specifics.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Third, use your STIMULUS payment for the things that you HAVE to
              pay such as groceries, utilities and car insurance.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Fourth, apply for unemployment if you are furloughed or laid off
              during this time. The FEDS are paying an additional $600 per week
              in ADDITION to the state unemployment benefits through end of July
              2020. Additionally, the FEDS are extending the state unemployment
              benefit period by an additional 13 weeks.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Fifth, work with your LANDLORD or MORTGAGE lender on getting your
              monthly payments deferred for 3 or 6 months. BUT know that you may
              have to pay the deferred amount IN FULL at the end of that period
              of time.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Bankruptcy may be able to stall your creditors and allow you to
              survive this difficult period. Please CALL and set up a time we
              can meet or visit by phone or email to see if we can help you.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Finally, when all of this ends (and it will end at some point) you
              may still need financial relief from your creditors. WE are OPEN
              and ready to serve you NOW and in the COMING weeks.
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1} pt={{ base: 4, md: 0 }}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          />
        </Flex>
      </Stack>
      <FAQForm />
    </Stack>
  );
}
