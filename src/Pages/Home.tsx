import { Stack } from "@chakra-ui/react";
import BankruptcyDoes from "../Components/BankruptcyDoes";
import CallToAction from "../Components/CallToAction";
import HomeForm from "../Components/HomeForm";
import Testimonials from "../Components/Testimonials";
import WhyJoe from "../Components/WhyJoe";

export default function Home() {
  return (
    <Stack spacing={10} align={"center"}>
      <CallToAction />
      <WhyJoe />
      <HomeForm />
      <Testimonials />
      <BankruptcyDoes />
    </Stack>
  );
}
