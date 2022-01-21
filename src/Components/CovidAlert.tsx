import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  Link,
} from "@chakra-ui/react";

export default function CovidAlert() {
  return (
    <Alert
      status="error"
      variant="top-accent"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <AlertIcon />
      <AlertTitle mr={2}>Has COVID-19 affected you?</AlertTitle>
      <AlertDescription>
        <Button
          as={Link}
          rounded={"full"}
          color={"white"}
          bg={"red.500"}
          size="sm"
          href="covid"
        >
          Learn More
        </Button>
      </AlertDescription>
    </Alert>
  );
}
