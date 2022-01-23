import {
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import BankruptcyCTA from "../Components/BankruptcyCTA";
import BankruptcyFeatures from "../Components/BankruptcyFeatures";

export default function Bankruptcy() {
  function Bold({ text, space }: { text: string; space?: boolean }) {
    space = space === undefined || space;
    return (
      <Text as="span" fontWeight={700} fontSize={"2xl"}>
        {text}
        {space ? " " : ""}
      </Text>
    );
  }

  return (
    <Stack spacing={10} align={"center"}>
      <BankruptcyCTA />
      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}>
          Bankruptcy{" "}
          <Text as={"span"} color={"blue.400"}>
            101
          </Text>
        </Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Bankruptcy forgives debts and allows you a <Bold text="fresh start" />
          while allowing you to keep most if not all of your property and{" "}
          <Bold text="stops creditors" />
          from contacting and harassing you. A <Bold text="fresh start" />
          allows you to begin again and keep the property that is needed by you
          and your family.
        </Text>
        <BankruptcyFeatures />
      </Stack>{" "}
      <Stack direction={{ base: "column", md: "row" }}>
        <Flex px={8} flex={2} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"3xl"}>
            <Heading fontSize={{ base: "4xl", lg: "5xl" }}>
              <Text as={"span"} position={"relative"}>
                How I Can
              </Text>{" "}
              <Text color={"blue.400"} as={"span"}>
                Help
              </Text>
              {"?"}
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
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Aliquam ut mauris ante. Suspendisse in sollicitudin leo, ut
              aliquet lacus. Sed odio dolor, tincidunt vel tempus a, cursus ac
              arcu. Fusce mattis purus eu orci sodales viverra. Mauris dui
              risus, rutrum eget commodo a, pulvinar sed arcu. Duis eros sapien,
              commodo eu nisl sit amet, rutrum posuere nulla. Phasellus varius
              quis dui vel cursus. Vivamus lobortis, sem sed ultrices lacinia,
              lorem enim consequat arcu, tincidunt congue mauris orci
              condimentum enim. Integer egestas nisl ac interdum elementum. Nam
              dictum turpis a sagittis consequat.
            </Text>
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
                What Is
              </Text>{" "}
              <Text color={"blue.400"} as={"span"}>
                Bankruptcy
              </Text>
              {"?"}
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
        <Flex flex={1} display={{ base: "flex", md: "none" }}>
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
                Cost To
              </Text>{" "}
              <Text color={"blue.400"} as={"span"}>
                File Bankruptcy
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
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Aliquam ut mauris ante. Suspendisse in sollicitudin leo, ut
              aliquet lacus. Sed odio dolor, tincidunt vel tempus a, cursus ac
              arcu. Fusce mattis purus eu orci sodales viverra. Mauris dui
              risus, rutrum eget commodo a, pulvinar sed arcu. Duis eros sapien,
              commodo eu nisl sit amet, rutrum posuere nulla. Phasellus varius
              quis dui vel cursus. Vivamus lobortis, sem sed ultrices lacinia,
              lorem enim consequat arcu, tincidunt congue mauris orci
              condimentum enim. Integer egestas nisl ac interdum elementum. Nam
              dictum turpis a sagittis consequat.
            </Text>
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
      <Stack direction={{ base: "column", md: "row" }}>
        <Flex flex={1}>
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
              <Text color={"blue.400"} as={"span"}>
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
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Aliquam ut mauris ante. Suspendisse in sollicitudin leo, ut
              aliquet lacus. Sed odio dolor, tincidunt vel tempus a, cursus ac
              arcu. Fusce mattis purus eu orci sodales viverra. Mauris dui
              risus, rutrum eget commodo a, pulvinar sed arcu. Duis eros sapien,
              commodo eu nisl sit amet, rutrum posuere nulla. Phasellus varius
              quis dui vel cursus. Vivamus lobortis, sem sed ultrices lacinia,
              lorem enim consequat arcu, tincidunt congue mauris orci
              condimentum enim. Integer egestas nisl ac interdum elementum. Nam
              dictum turpis a sagittis consequat.
            </Text>
          </Stack>
        </Flex>
      </Stack>
      <Stack direction={{ base: "column", md: "row" }}>
        <Flex px={8} flex={2} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"3xl"}>
            <Heading fontSize={{ base: "4xl", lg: "5xl" }}>
              <Text as={"span"} position={"relative"}>
                What Bankruptcy
              </Text>{" "}
              <Text color={"blue.400"} as={"span"}>
                Does Not Do
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
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Aliquam ut mauris ante. Suspendisse in sollicitudin leo, ut
              aliquet lacus. Sed odio dolor, tincidunt vel tempus a, cursus ac
              arcu. Fusce mattis purus eu orci sodales viverra. Mauris dui
              risus, rutrum eget commodo a, pulvinar sed arcu. Duis eros sapien,
              commodo eu nisl sit amet, rutrum posuere nulla. Phasellus varius
              quis dui vel cursus. Vivamus lobortis, sem sed ultrices lacinia,
              lorem enim consequat arcu, tincidunt congue mauris orci
              condimentum enim. Integer egestas nisl ac interdum elementum. Nam
              dictum turpis a sagittis consequat.
            </Text>
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
    </Stack>
  );
}
