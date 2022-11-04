import {
  Stack,
  Container,
  Heading,
  Flex,
  Text,
  Image,
  Button,
  Link,
  chakra,
} from "@chakra-ui/react";
import BankruptcyFeatures from "../Components/BankruptcyFeatures";
import FAQForm from "../Components/FAQForm";
import BookImage from "../Images/LawBook.jpg";

export default function Chapter7() {
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
          <Text as={"span"} color={"green.400"}>
            Chapter 7
          </Text>
        </Heading>
        <Text
          fontSize={{ base: "md", lg: "lg" }}
          color={"gray.600"}
          maxW={"3xl"}
          mt={6}
        >
          Chapter 7 bankruptcy, also known as a straight or liquidation
          bankruptcy, is a type of bankruptcy that can clear away many types of
          unsecured debts. If you're far behind on your bills and don't have the
          means to afford monthly payments and living expenses, filing Chapter 7
          bankruptcy could be a last resort to help you reset your finances.
        </Text>
        <Stack spacing={6} direction={"row"} mt={6}>
          <Button
            as={Link}
            href="contact"
            rounded={"full"}
            px={6}
            colorScheme={"green"}
            bg={"green.400"}
            _hover={{ bg: "green.500" }}
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
              <Text color={"green.400"} as={"span"}>
                Chapter 7{" "}
              </Text>
              Bankruptcy
              {"?"}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Chapter 7 wipes out most debts including credit cards, utilities,
              pay day loans, medical bills and past due rent bills. Chapter 7
              takes about 4 months from start to finish.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Auto loans and mortgages can be paid just like you are currently
              paying them. If there is an arrearage, then that will need to be
              addressed before you go forward. The discharge in bankruptcy is
              what you are trying to get when you file the case.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Some debts will not be eliminated, such as taxes, student loans,
              child support and criminal fines from some other court. Bankruptcy
              provides for a DISCHARGE of most debt except for taxes, student
              loans and child support. Discharge means the debt is no longer
              owed and can not be collected by the creditor.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              It allows you to STOP creditors before they take your money or
              property, so you can start over with a CLEAN SLATE. You can
              rebuild your credit over a period of years after you file
              bankruptcy to improve your credit, future credit from lenders to
              purchase a car or buy a home.
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1} pt={{ base: 4, md: 0 }}>
          <Image alt={"Login Image"} objectFit={"cover"} src={BookImage} />
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
              <Text color={"green.400"} as={"span"}>
                Chapter 7{" "}
              </Text>
              {"& "}
              <Text color={"green.400"} as={"span"}>
                Chapter 13{" "}
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
                Is Chapter 7{" "}
              </Text>{" "}
              <Text color={"green.400"} as={"span"}>
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
              <Text color={"green.400"} as={"span"}>
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
              <Text color={"green.400"} as={"span"}>
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
                colorScheme={"green"}
                bg={"green.400"}
                _hover={{ bg: "green.500" }}
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
