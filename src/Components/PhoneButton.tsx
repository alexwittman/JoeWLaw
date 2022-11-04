import { Button, Link } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

export default function PhoneButton() {
  return (
    <Button
      display={{ base: "none", md: "flex" }}
      as={Link}
      rounded={"full"}
      fontSize={"sm"}
      fontWeight={600}
      color={"white"}
      bg={"green.400"}
      href={"tel:+17852301063"}
      leftIcon={<PhoneIcon />}
      _hover={{
        bg: "green.500",
      }}
    >
      Call Now: 785-234-3663
    </Button>
  );
}
