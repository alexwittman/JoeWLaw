import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Badge,
  Flex,
  Image,
  chakra,
  Button,
  Link,
  Stack,
} from "@chakra-ui/react";
import { AvvoIcon, GoogleIcon } from "./Icons";

export default function GoogleAllReviews() {
  const stars = 4.9;
  const reviews = 46;
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      boxShadow={"sm"}
      background={"gray.100"}
    >
      <Box p="4">
        <Flex>
          <Box flex={1}>
            <Box
              as={Link}
              href="http://www.JoeWLaw.com"
              color="gray.900"
              fontWeight="600"
              fontSize="xl"
            >
              Joe Wittman Law
            </Box>
            <Box
              display="flex"
              alignItems="center"
              fontWeight={"700"}
              color="yellow.500"
              fontSize={"xl"}
            >
              {stars}
              <Box ml={2} />
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < stars ? "yellow.500" : "gray.300"}
                  />
                ))}
            </Box>
          </Box>
          <Box>
            <GoogleIcon />
          </Box>
        </Flex>
        <Box as={chakra.div} fontSize={"lg"} pt={2} color={"gray.800"}>
          Based on {reviews} reviews
        </Box>
        <Stack spacing={4} direction={"row"} mt={2}>
          <Button
            as={Link}
            href=""
            rounded={"full"}
            px={6}
            colorScheme={"blue"}
            bg={"blue.400"}
            _hover={{ bg: "blue.500" }}
          >
            View All Reviews
          </Button>
          <Button
            as={Link}
            href=""
            rounded={"full"}
            px={6}
            colorScheme={"green"}
            bg={"green.400"}
            _hover={{ bg: "green.500" }}
          >
            Write A Review
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
