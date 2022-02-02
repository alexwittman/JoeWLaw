import { StarIcon } from "@chakra-ui/icons";
import { Box, Badge, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import { AvvoIcon, GoogleIcon } from "./Icons";

type Props = {
  logo: "Google" | "Avvo";
  name: string;
  stars: number;
  review: string;
};

export default function ReviewCard({ logo, name, stars, review }: Props) {
  return (
    <Box
      display="flex"
      width={"full"}
      boxShadow={"sm"}
      borderWidth="1px"
      borderRadius="lg"
      bg={useColorModeValue("white", "gray.800")}
    >
      <Box p="4">
        <Flex>
          <Box flex={1}>
            <Box color="gray.900" fontWeight="600" fontSize="xl">
              {name}
            </Box>
            <Box display="flex" mt="2" alignItems="center">
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
          <Box>{logo === "Google" ? <GoogleIcon /> : <AvvoIcon />}</Box>
        </Flex>
        <Box fontSize={"lg"} pt={2} color={"gray.800"}>
          {review}
        </Box>
      </Box>
    </Box>
  );
}
