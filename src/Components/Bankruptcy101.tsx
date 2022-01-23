import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Flex,
  Button,
  Link,
  Center,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function Bankruptcy101() {
  return (
    <Box>
      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}>
          Bankruptcy{" "}
          <Text as={"span"} color={"green.400"}>
            101
          </Text>
        </Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Bankruptcy forgives debts and allows you a{" "}
          <Text as="span" fontWeight={700} fontSize={"2xl"}>
            fresh start
          </Text>{" "}
          while allowing you to keep most if not all of your property and{" "}
          <Text as="span" fontWeight={700} fontSize={"2xl"}>
            stops creditors
          </Text>{" "}
          from contacting and harassing you. A{" "}
          <Text as="span" fontWeight={700} fontSize={"2xl"}>
            fresh start
          </Text>{" "}
          allows you to begin again and keep the property that is needed by you
          and your family.
        </Text>
        <Center>
          <Stack spacing={6} direction={"row"} mt={0}>
            <Button as={Link} rounded={"full"} px={6} href="bankruptcy">
              Learn More
            </Button>
            <Button
              as={Link}
              href="contact"
              rounded={"full"}
              bg={"green.400"}
              px={6}
              color={"white"}
              _hover={{
                bg: "green.500",
              }}
            >
              Free Consultation
            </Button>
          </Stack>
        </Center>
      </Stack>
    </Box>
  );
}
