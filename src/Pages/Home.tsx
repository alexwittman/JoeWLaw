import { Stack } from "@chakra-ui/react";
import Bankruptcy101 from "../Components/Bankruptcy101";
import BankruptcyDoes from "../Components/BankruptcyDoes";
import CallToAction from "../Components/CallToAction";
import HomeFAQ from "../Components/HomeFAQ";
import HomeForm from "../Components/HomeForm";
import Testimonials from "../Components/Testimonials";
import WhyJoe from "../Components/WhyJoe";

export default function Home() {
  return (
    <Stack spacing={10} align={"center"}>
      <CallToAction />
      <WhyJoe />
      <HomeForm />
      <Bankruptcy101 />
      <BankruptcyDoes />
      <Testimonials />
      <HomeFAQ />
    </Stack>
  );
}
