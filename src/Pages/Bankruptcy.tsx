import {
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  Image,
  ListItem,
  ListIcon,
  List,
} from "@chakra-ui/react";
import BankruptcyCTA from "../Components/BankruptcyCTA";
import BankruptcyFeatures from "../Components/BankruptcyFeatures";
import FAQForm from "../Components/FAQForm";
import PhoneButton from "../Components/PhoneButton";
import { AiFillCloseCircle } from "react-icons/ai";
import PapersImage from "../Images/Papers.jpg";
import WalletImage from "../Images/Wallet.jpg";
import CalculatorImage from "../Images/Calculator.jpg";
import LawImage from "../Images/Law.jpg";

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
        {/* <BankruptcyFeatures /> */}
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
              I know first-hand how a weak economy and unexpected difficulties
              can quickly devastate a family. My mission is to demonstrate that
              filing for bankruptcy is not another setback, but a way to regain
              financial stability. I wish to help families rebuild and get off
              to the right start.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              You can fill out the contact form by clicking the button below and
              I will be in contact with you within 2 business days. In addition,
              you can reach out by calling directly or through email or text.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Let's begin your journey to a fresh start.
            </Text>
            <Flex align={"center"} flex={1} flexDirection={"column"}>
              <Stack spacing={6} direction={"row"} mt={0}>
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
                  Contact Me
                </Button>
                <PhoneButton />
              </Stack>
            </Flex>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image alt={"Login Image"} objectFit={"cover"} src={WalletImage} />
        </Flex>
      </Stack>
      <Stack direction={{ base: "column", md: "row" }}>
        <Flex flex={1} display={{ base: "none", md: "flex" }}>
          <Image alt={"Login Image"} objectFit={"cover"} src={PapersImage} />
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
              Bankruptcy is not throwing your hands in the air and admitting
              defeat, but an honest way to regain control of your finances.
              Whether you choose to file for{" "}
              <Link href="chapter7" color={"blue.500"}>
                Chapter 7
              </Link>{" "}
              or{" "}
              <Link href="chapter13" color={"blue.500"}>
                Chapter 13
              </Link>{" "}
              bankruptcy, declaring bankruptcy can erase most of your debt,
              rebuild your credit, and restore financial stability.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Bankruptcy will STOP the creditor from taking your vehicle. If the
              car has been repossessed, you can get the car back. Acting quickly
              is important. If you fail to act timely, the car will be sold and
              you be unable to get it back. . You will need to obtain FULL
              COVERAGE insurance on the vehicle to get it back. LIABILITY ONLY
              insurance will NOT work to get the vehicle back. If there has been
              a repossession, likely a Chapter 13 is the best course to follow
              since you will be able to pay less interest and pay over a greater
              term than originally agreed to. If you want to surrender a vehicle
              because it is a "junker" you can do that as well.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Bankruptcy stops creditors from contacting you by phone, letter or
              in any other fashion. Creditors must deal with your attorney once
              the case is filed. Any attempt by them to contact you is a
              violation of the AUTOMATIC STAY that goes into effect once the
              case is filed with the Court. Good contact information given to
              your attorney can immediately STOP the creditors from any further
              contact, so it is important to give that information to your
              attorney ASAP. If you don't know who your creditors are, get a
              credit report from one of the three credit reporting agencies
              mentioned above.
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1} display={{ base: "flex", md: "none" }}>
          <Image alt={"Login Image"} objectFit={"cover"} src={PapersImage} />
        </Flex>
      </Stack>
      {/* <Stack direction={{ base: "column", md: "row" }}>
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
      </Stack> */}
      <Stack direction={{ base: "column", md: "row" }}>
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
              What may be a better question is what debts CAN NOT be discharged
              in bankruptcy:
              <List px={8}>
                <ListItem>
                  <ListIcon as={AiFillCloseCircle} color="red.500" />
                  Taxes
                </ListItem>
                <ListItem>
                  <ListIcon as={AiFillCloseCircle} color="red.500" />
                  Student Loans
                </ListItem>
                <ListItem>
                  <ListIcon as={AiFillCloseCircle} color="red.500" />
                  Child Support
                </ListItem>
                <ListItem>
                  <ListIcon as={AiFillCloseCircle} color="red.500" />
                  Fines and Penalties from Criminal Cases
                </ListItem>
                <ListItem>
                  <ListIcon as={AiFillCloseCircle} color="red.500" />
                  Debts Created by Fraud of False Statements
                </ListItem>
              </List>
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Usually, these types of debts are straight forward. However, if
              you lied on a financial statement in order to get a loan or a line
              of credit, that debt may not be wiped out in bankruptcy, if the
              creditor can prove their case. In some cases, taxes which are
              older than 3 years can be discharged in bankruptcy. However, taxes
              including the interest survive bankruptcy if less than 3 years
              old.
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={CalculatorImage}
          />
        </Flex>
      </Stack>
      <Stack direction={{ base: "column", md: "row" }}>
        <Flex flex={1}>
          <Image alt={"Login Image"} objectFit={"cover"} src={LawImage} />
        </Flex>
        <Flex px={8} flex={2} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"3xl"}>
            <Heading fontSize={{ base: "4xl", lg: "5xl" }}>
              <Text as={"span"} position={"relative"}>
                Which Chapter Is
              </Text>{" "}
              <Text color={"blue.400"} as={"span"}>
                Right For Me?
              </Text>
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Most people choose Chapter 7. Chapter 7 is the quickest but may
              not provide you with what you want if you have certain types of
              debts or issues.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Chapter 13 gives you certain options which Chapter 7 cannot give
              you. Chapter 7 usually requires the fees and costs be paid UP
              FRONT before the case can be filed. Those costs may be $1,400.00
              to $1,800.00 depending on your financial situation.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
              Remember, that doing NOTHING will normally result in only bad
              things if you wait. Contacting an attorney to see what options are
              is the best medicine out there. It may not work for everyone, but
              will STOP creditors from taking your money and property.
            </Text>
            <Flex align={"center"} flex={1} flexDirection={"column"}>
              <Stack
                spacing={6}
                direction={{ base: "column", md: "row" }}
                mt={0}
              >
                <Button as={Link} href="chapter7" rounded={"full"} px={6}>
                  Learn More About Chapter 7
                </Button>
                <Button
                  as={Link}
                  href="chapter13"
                  rounded={"full"}
                  bg={"blue.400"}
                  px={6}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Learn More About Chapter 13
                </Button>
              </Stack>
            </Flex>
          </Stack>
        </Flex>
      </Stack>
      <FAQForm />
    </Stack>
  );
}
