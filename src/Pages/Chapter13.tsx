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
import GavelImage from "../Images/Gavel.jpg";

export default function Chapter13() {
  return (
    <Stack spacing={10} align={"center"}>
      <Flex
        flexDirection={"column"}
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 6, md: 8 }}
        pt={{ base: 6, md: 12 }}
        px={8}
      >
        <Heading
          mt={5}
          //fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Bankruptcy{" "}
          <chakra.span display={{ base: "inline", sm: "none" }}>
            <br />
          </chakra.span>
          <Text as={"span"} color={"red.400"}>
            Chapter 13
          </Text>
        </Heading>
        <Text
          fontSize={{ base: "md", lg: "lg" }}
          color={"gray.600"}
          maxW={"3xl"}
          mt={6}
        >
          This chapter of the Bankruptcy Code provides for adjustment of debts
          of an individual with regular income. Chapter 13 allows a debtor to
          keep property and pay debts over time, usually three to five years.
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
                What Is
              </Text>{" "}
              <Text color={"red.400"} as={"span"}>
                Chapter 13{" "}
              </Text>
              Bankruptcy
              {"?"}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Chapter 13 differs from a Chapter 7 in that you make payments to a
              trustee for 3 to 5 years. The amount you pay depends on your
              income and what you are trying to pay through your plan.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              You don’t have to pay unsecured debts in a Chapter 13, but in some
              cases you may have to pay something to the unsecured creditors.
              Unsecured creditors are those such as credit cards, medical bills,
              utilities, pay day loans.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Chapter 13, like Chapter 7, does not discharge or eliminate taxes,
              student loans, child support or criminal fines. It has a broader
              discharge than what Chapter 7 gives to you.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              There is more flexibility in Chapter 13 to deal with car payments,
              arrearage on mortgages and other types of debts. It provides a
              structure which may be helpful in getting certain debts paid
              rather than in Chapter 7.
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1} pt={{ base: 4, md: 0 }}>
          <Image alt={"Login Image"} objectFit={"cover"} src={GavelImage} />
        </Flex>
      </Stack>
      {/* <Stack direction={{ base: "column", md: "row" }}>
        <Flex flex={1} display={{ base: "none", md: "flex" }}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          />
        </Flex>
        <Flex px={8} flex={2} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"3xl"}>
            <Heading fontSize={{ base: "4xl", lg: "5xl" }}>
              <Text as={"span"} position={"relative"}>
                The Difference Between
              </Text>{" "}
              <Text color={"red.400"} as={"span"}>
                Chapter 13{" "}
              </Text>
              {"& "}
              <Text color={"red.400"} as={"span"}>
                Chapter 7{" "}
              </Text>
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              tincidunt at arcu nec faucibus. Nam lobortis, felis ut vehicula
              sollicitudin, diam diam cursus dolor, eu interdum libero dui at
              mi. Donec ullamcorper quam non diam interdum dignissim. Phasellus
              vehicula tortor vel ex pulvinar, in commodo ex interdum. Nulla
              ultricies finibus mauris, non pulvinar sapien ultrices in.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              In venenatis fringilla eros at dignissim. Aenean ex nulla,
              efficitur eu risus facilisis, aliquam rutrum nisi. In quis aliquam
              est, quis tincidunt nisl. Donec feugiat elementum metus dignissim
              auctor. Aenean sagittis, felis a ultrices aliquam, libero sapien
              posuere nisl, vel blandit neque odio et neque. In sed dui quis
              elit venenatis accumsan vel a risus. Nam lacinia euismod mauris,
              dictum maximus lacus dapibus nec. Suspendisse ornare, sapien
              aliquam viverra laoreet, urna nisl congue leo, sit amet egestas
              metus odio sed magna.
            </Text>
          </Stack>
        </Flex>
        <Flex
          flex={1}
          display={{ base: "flex", md: "none" }}
          pt={{ base: 4, md: 0 }}
        >
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          />
        </Flex>
      </Stack>
      <Stack direction={{ base: "column", md: "row" }}>
        <Flex px={8} flex={2} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"3xl"}>
            <Heading fontSize={{ base: "4xl", lg: "5xl" }}>
              <Text as={"span"} position={"relative"}>
                Is Chapter 13{" "}
              </Text>{" "}
              <Text color={"red.400"} as={"span"}>
                Right For You
              </Text>
              ?
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              tincidunt at arcu nec faucibus. Nam lobortis, felis ut vehicula
              sollicitudin, diam diam cursus dolor, eu interdum libero dui at
              mi. Donec ullamcorper quam non diam interdum dignissim. Phasellus
              vehicula tortor vel ex pulvinar, in commodo ex interdum. Nulla
              ultricies finibus mauris, non pulvinar sapien ultrices in.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              In venenatis fringilla eros at dignissim. Aenean ex nulla,
              efficitur eu risus facilisis, aliquam rutrum nisi. In quis aliquam
              est, quis tincidunt nisl. Donec feugiat elementum metus dignissim
              auctor. Aenean sagittis, felis a ultrices aliquam, libero sapien
              posuere nisl, vel blandit neque odio et neque. In sed dui quis
              elit venenatis accumsan vel a risus. Nam lacinia euismod mauris,
              dictum maximus lacus dapibus nec. Suspendisse ornare, sapien
              aliquam viverra laoreet, urna nisl congue leo, sit amet egestas
              metus odio sed magna.
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
      <Stack direction={{ base: "column", md: "row" }}>
        <Flex flex={1} display={{ base: "none", md: "flex" }}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          />
        </Flex>
        <Flex px={8} flex={2} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"3xl"}>
            <Heading fontSize={{ base: "4xl", lg: "5xl" }}>
              <Text as={"span"} position={"relative"}>
                What Debts Can Be
              </Text>{" "}
              <Text color={"red.400"} as={"span"}>
                Eliminated?
              </Text>
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              tincidunt at arcu nec faucibus. Nam lobortis, felis ut vehicula
              sollicitudin, diam diam cursus dolor, eu interdum libero dui at
              mi. Donec ullamcorper quam non diam interdum dignissim. Phasellus
              vehicula tortor vel ex pulvinar, in commodo ex interdum. Nulla
              ultricies finibus mauris, non pulvinar sapien ultrices in.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              In venenatis fringilla eros at dignissim. Aenean ex nulla,
              efficitur eu risus facilisis, aliquam rutrum nisi. In quis aliquam
              est, quis tincidunt nisl. Donec feugiat elementum metus dignissim
              auctor. Aenean sagittis, felis a ultrices aliquam, libero sapien
              posuere nisl, vel blandit neque odio et neque. In sed dui quis
              elit venenatis accumsan vel a risus. Nam lacinia euismod mauris,
              dictum maximus lacus dapibus nec. Suspendisse ornare, sapien
              aliquam viverra laoreet, urna nisl congue leo, sit amet egestas
              metus odio sed magna.
            </Text>
          </Stack>
        </Flex>
        <Flex
          flex={1}
          display={{ base: "flex", md: "none" }}
          pt={{ base: 4, md: 0 }}
        >
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          />
        </Flex>
      </Stack>
      <Stack direction={{ base: "column", md: "row" }}>
        <Flex px={8} flex={2} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"3xl"}>
            <Heading fontSize={{ base: "4xl", lg: "5xl" }}>
              <Text as={"span"} position={"relative"}>
                How I Can{" "}
              </Text>{" "}
              <Text color={"red.400"} as={"span"}>
                Help
              </Text>
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              tincidunt at arcu nec faucibus. Nam lobortis, felis ut vehicula
              sollicitudin, diam diam cursus dolor, eu interdum libero dui at
              mi. Donec ullamcorper quam non diam interdum dignissim. Phasellus
              vehicula tortor vel ex pulvinar, in commodo ex interdum. Nulla
              ultricies finibus mauris, non pulvinar sapien ultrices in.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              In venenatis fringilla eros at dignissim. Aenean ex nulla,
              efficitur eu risus facilisis, aliquam rutrum nisi. In quis aliquam
              est, quis tincidunt nisl. Donec feugiat elementum metus dignissim
              auctor. Aenean sagittis, felis a ultrices aliquam, libero sapien
              posuere nisl, vel blandit neque odio et neque. In sed dui quis
              elit venenatis accumsan vel a risus. Nam lacinia euismod mauris,
              dictum maximus lacus dapibus nec. Suspendisse ornare, sapien
              aliquam viverra laoreet, urna nisl congue leo, sit amet egestas
              metus odio sed magna.
            </Text>
            <Stack spacing={6} direction={"column"} mt={6} alignItems="center">
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
      </Stack> */}
      <FAQForm />
    </Stack>
  );
}
