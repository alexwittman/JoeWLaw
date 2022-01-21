import { PhoneIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Grid,
  Textarea,
  GridItem,
  Button,
  Link,
  Stack,
  Center,
} from "@chakra-ui/react";

export default function ContactForm() {
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      gap={6}
      spacingX={6}
      spacingY={6}
      width="full"
      maxW={"3xl"}
      bg="red.400"
      p="10"
      borderRadius={"12px"}
      color="white"
    >
      <GridItem>
        <FormControl>
          <FormLabel htmlFor="name">Full Name</FormLabel>
          <Input
            required
            id="name"
            type="text"
            placeholder="John Doe"
            _placeholder={{ color: "black" }}
            bg="white"
            color="black"
            maxLength={30}
          />
        </FormControl>
      </GridItem>
      <GridItem>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            _placeholder={{ color: "black" }}
            bg="white"
            color="black"
            required
            id="email"
            type="email"
          />
        </FormControl>
      </GridItem>
      <GridItem>
        <FormControl>
          <FormLabel htmlFor="phone">Phone Number</FormLabel>
          <InputGroup>
            <InputLeftAddon children={"+1"} bg="gray.200" color="black" />
            <Input
              _placeholder={{ color: "black" }}
              bg="white"
              color="black"
              required
              id="phone"
              type={"tel"}
              placeholder="(123)-456-7890"
            />
          </InputGroup>{" "}
        </FormControl>
      </GridItem>
      <GridItem>
        <FormControl>
          <FormLabel htmlFor="family">Family Status</FormLabel>
          <InputGroup>
            <Select
              _placeholder={{ color: "black" }}
              bg="white"
              color="black"
              required
              id="family"
              placeholder="Select Status"
            >
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Married with One or More Children">
                Married with One or More Children
              </option>
            </Select>
          </InputGroup>{" "}
        </FormControl>
      </GridItem>
      <GridItem>
        <FormControl>
          <FormLabel htmlFor="income">Income</FormLabel>
          <InputGroup>
            <Select
              _placeholder={{ color: "black" }}
              bg="white"
              color="black"
              required
              id="income"
              placeholder="Select Income"
            >
              <option value="Less than $20,000">Less than $20,000</option>
              <option value="Between $20,000 and $40,000">
                Between $20,000 and $40,000
              </option>
              <option value="Between $40,000 and $60,000">
                Between $40,000 and $60,000{" "}
              </option>
              <option value="Over $60,000">Over $60,000</option>
            </Select>
          </InputGroup>{" "}
        </FormControl>
      </GridItem>
      <GridItem>
        <FormControl>
          <FormLabel htmlFor="mortgage">Do you have a Mortgage?</FormLabel>
          <InputGroup>
            <Select
              _placeholder={{ color: "black" }}
              bg="white"
              color="black"
              required
              id="mortgage"
              placeholder="Select Status"
            >
              <option value="Yes">I have a Mortgage</option>
              <option value="No">I do not have a Mortgage</option>
            </Select>
          </InputGroup>{" "}
        </FormControl>
      </GridItem>
      <GridItem>
        <FormControl>
          <FormLabel htmlFor="car">Do you have a Car Payment?</FormLabel>
          <InputGroup>
            <Select
              _placeholder={{ color: "black" }}
              bg="white"
              color="black"
              required
              id="car"
              placeholder="Select Status"
            >
              <option value="Yes">I have a Car Payment</option>
              <option value="No">I do not have a Car Payment</option>
            </Select>
          </InputGroup>{" "}
        </FormControl>
      </GridItem>
      <GridItem>
        <FormControl>
          <FormLabel htmlFor="garnish">Are you being Garnished?</FormLabel>
          <InputGroup>
            <Select
              _placeholder={{ color: "black" }}
              bg="white"
              color="black"
              required
              id="garnish"
              placeholder="Select Status"
            >
              <option value="Yes">I am being Garnished</option>
              <option value="No">I am not being Garnished</option>
            </Select>
          </InputGroup>{" "}
        </FormControl>
      </GridItem>
      <GridItem colSpan={{ base: 1, md: 2 }}>
        <FormControl>
          <FormLabel htmlFor="message">Other Concerns or Questions</FormLabel>
          <InputGroup>
            <Textarea
              _placeholder={{ color: "black" }}
              bg="white"
              color="black"
              id="message"
              placeholder=""
              resize="none"
            />
          </InputGroup>{" "}
        </FormControl>
      </GridItem>
      <GridItem colSpan={{ base: 1, md: 2 }}>
        <Center flex="1" spacing={6} direction={"row"}>
          <Button
            as={Link}
            href="contact"
            rounded={"full"}
            px={6}
            size="lg"
            colorScheme={"white"}
            color="black"
            bg={"white"}
            _hover={{ bg: "gray.100" }}
          >
            Submit
          </Button>
        </Center>
      </GridItem>
    </Grid>
  );
}
