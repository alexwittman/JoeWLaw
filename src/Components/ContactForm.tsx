import {
  FormControl,
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
  Center,
  FormErrorMessage,
  chakra,
  Text,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";

type FormInfo = {
  name?: string;
  email?: string;
  phone?: string;
  family?: string;
  income?: string;
  mortgage?: string;
  car?: string;
  garnish?: string;
  message?: string;
};

type SendState = "None" | "Sending" | "Sent";

export default function ContactForm() {
  const [sendState, setSendState] = useState<SendState>("None");
  const [formInfo, setFormInfo] = useState<FormInfo>({});
  const setState = (newState: FormInfo) =>
    setFormInfo({ ...formInfo, ...newState });

  return sendState === "None" || sendState === "Sending" ? (
    <chakra.form onSubmit={SubmitForm} width="full" maxW={"3xl"} px="5">
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={6}
        width="full"
        maxW={"3xl"}
        bg="red.400"
        p="10"
        borderRadius={"12px"}
        color="white"
      >
        <GridItem>
          <FormControl isRequired>
            <FormLabel htmlFor="name">Full Name</FormLabel>
            <Input
              id="name"
              type="text"
              placeholder="e.g. John Doe"
              _placeholder={{ color: "gray.400" }}
              bg="white"
              color="black"
              maxLength={30}
              onChange={(e) => setState({ name: e.target.value })}
            />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              _placeholder={{ color: "gray.400" }}
              bg="white"
              color="black"
              id="email"
              type="email"
              onChange={(e) => setState({ email: e.target.value })}
            />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl isRequired>
            <FormLabel htmlFor="phone">Phone Number</FormLabel>
            <InputGroup>
              <InputLeftAddon children={"+1"} bg="gray.200" color="black" />
              <Input
                _placeholder={{ color: "gray.400" }}
                bg="white"
                color="black"
                id="phone"
                type={"tel"}
                placeholder="(123)-456-7890"
                onChange={(e) => setState({ phone: e.target.value })}
              />
            </InputGroup>{" "}
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl isRequired>
            <FormLabel htmlFor="family">Family Status</FormLabel>
            <InputGroup>
              <Select
                _placeholder={{ color: "gray.400" }}
                bg="white"
                color="black"
                id="family"
                placeholder="Select Status"
                onChange={(e) => setState({ family: e.target.value })}
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
          <FormControl isRequired>
            <FormLabel htmlFor="income">Income</FormLabel>
            <InputGroup>
              <Select
                _placeholder={{ color: "gray.400" }}
                bg="white"
                color="black"
                id="income"
                placeholder="Select Income"
                onChange={(e) => setState({ income: e.target.value })}
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
          <FormControl isRequired>
            <FormLabel htmlFor="mortgage">Do you have a Mortgage?</FormLabel>
            <InputGroup>
              <Select
                _placeholder={{ color: "gray.400" }}
                bg="white"
                color="black"
                id="mortgage"
                placeholder="Select Status"
                onChange={(e) => setState({ mortgage: e.target.value })}
              >
                <option value="Yes">I have a Mortgage</option>
                <option value="No">I do not have a Mortgage</option>
              </Select>
            </InputGroup>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl isRequired>
            <FormLabel htmlFor="car">Do you have a Car Payment?</FormLabel>
            <InputGroup>
              <Select
                _placeholder={{ color: "gray.400" }}
                bg="white"
                color="black"
                id="car"
                placeholder="Select Status"
                onChange={(e) => setState({ car: e.target.value })}
              >
                <option value="Yes">I have a Car Payment</option>
                <option value="No">I do not have a Car Payment</option>
              </Select>
            </InputGroup>{" "}
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl isRequired>
            <FormLabel htmlFor="garnish">Are you being Garnished?</FormLabel>
            <InputGroup>
              <Select
                _placeholder={{ color: "gray.400" }}
                bg="white"
                color="black"
                id="garnish"
                placeholder="Select Status"
                onChange={(e) => setState({ garnish: e.target.value })}
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
                _placeholder={{ color: "gray.400" }}
                bg="white"
                color="black"
                id="message"
                placeholder=""
                resize="none"
                onChange={(e) => setState({ message: e.target.value })}
              />
            </InputGroup>{" "}
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <Center flex="1" spacing={6} direction={"row"}>
            <Button
              rounded={"full"}
              px={6}
              size="lg"
              colorScheme={"white"}
              color="black"
              bg={"white"}
              _hover={{ bg: "gray.100" }}
              type="submit"
              isLoading={sendState === "Sending"}
            >
              Submit
            </Button>
          </Center>
        </GridItem>
      </Grid>
    </chakra.form>
  ) : (
    <Box
      width="full"
      maxW={"3xl"}
      bg="red.400"
      p="10"
      borderRadius={"12px"}
      color="white"
      textAlign={"center"}
    >
      <Text fontSize={"4xl"} fontWeight="700">
        Thank You!
      </Text>
      <Text fontSize={"4xl"} fontWeight="600">
        I will be in contact with you within 2 business days.
      </Text>
    </Box>
  );

  function SubmitForm(event: React.FormEvent) {
    event.preventDefault();
    setSendState("Sending");
    window.Email.send({
      Host: "smtp.gmail.com",
      Username: process.env.REACT_APP_FORM_EMAIL_FROM,
      Password: process.env.REACT_APP_FORM_EMAIL_PASSWORD,
      To: process.env.REACT_APP_FORM_EMAIL_TO,
      From: process.env.REACT_APP_FORM_EMAIL_FROM,
      Subject: "Website Form Submission: " + formInfo.name,
      Body:
        "Name: " +
        formInfo.name +
        "<br>Email: " +
        formInfo.email +
        "\n<br>Phone: " +
        formInfo.phone +
        "\n<br>Family Status: " +
        formInfo.family +
        "\n<br>Income: " +
        formInfo.income +
        "\n<br>Has Mortgage: " +
        formInfo.mortgage +
        "\n<br>Has Car Payment: " +
        formInfo.car +
        "\n<br>Being Garnished: " +
        formInfo.garnish +
        "\n<br>Message: " +
        formInfo.message,
    }).then((message: string) => {
      // TODO: handle email sending errors
      setSendState("Sent");
    });
  }
}
