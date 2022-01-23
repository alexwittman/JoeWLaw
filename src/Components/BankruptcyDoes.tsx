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
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function BankruptcyDoes() {
  return (
    <Box>
      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}>
          What Bankruptcy Can{" "}
          <Text as={"span"} color={"green.400"}>
            Do For You
          </Text>
        </Heading>
      </Stack>

      <Container maxW={"7xl"} mt={10}>
        <Accordion allowMultiple allowToggle>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacingY={2}
            spacingX={6}
          >
            {features.map((feature, index) => (
              <AccordionItem key={index}>
                <AccordionButton>
                  <HStack flex={1} textAlign="left">
                    <Box color={"green.400"} px={2}>
                      <Icon as={CheckIcon} />
                    </Box>
                    <Text fontWeight={600} fontSize={{ base: "lg", md: "lg" }}>
                      {feature.title}
                    </Text>
                    <Flex flex={1} />
                    <AccordionIcon />
                  </HStack>
                </AccordionButton>
                <AccordionPanel>
                  <Text color={"gray.600"}>{feature.text}</Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </SimpleGrid>
        </Accordion>
      </Container>
    </Box>
  );
}

const features = [
  {
    title: "Bankruptcy allows you to get a fresh start",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  },
  {
    title: "Bankruptcy stops garnishments and lawsuits",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  },
  {
    title: "Bankruptcy stops repossessions",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  },
  {
    title: "Bankruptcy stops harassing contacts from creditors",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  },
  {
    title: "Bankruptcy allows you to catch up on your car payments",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  },
  {
    title: "Bankruptcy allows you to pay less than what you owe on your car",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  },
  {
    title:
      "Bankruptcy allows you to keep your house and catch up back payments",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  },
  {
    title: "Bankruptcy allows you to extend loans on your house and vehicles",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  },
  {
    title:
      "Bankruptcy allows you to get a discharge of your debts without having to pay them",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  },
  {
    title: "Bankruptcy allows you to pay the IRS on tax obligations",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  },
  {
    title: "Bankruptcy allows you to discharge tax obligations",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  },
];
