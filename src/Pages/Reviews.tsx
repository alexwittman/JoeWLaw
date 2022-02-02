import {
  AspectRatio,
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import AvvoAllReviews from "../Components/AvvoAllReviews";
import GoogleAllReviews from "../Components/GoogleAllReviews";
import HomeForm from "../Components/HomeForm";
import ReviewCard from "../Components/ReviewCard";
import { TestmonialCard } from "../Components/Testimonials";

export default function Reviews() {
  let i = 0;
  return (
    <Center>
      <Stack
        align={"center"}
        pt={6}
        spacing={8}
        maxW={"6xl"}
        px={{ base: 4, md: 4 }}
      >
        {/* Add title card */}

        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={6}
        >
          {/* Combine these allreviews cards into 1 */}
          <GoogleAllReviews />
          <AvvoAllReviews />
          <GridItem colSpan={{ base: 1, md: 2 }}>
            <AspectRatio width="full" ratio={16 / 9}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dYNrQ5oSM08"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </AspectRatio>
          </GridItem>
          {reviews.map(
            (
              {
                reviewList,
                testimonial,
              }: { reviewList: Review[]; testimonial: Testimonial },
              index
            ) => (
              <React.Fragment key={"frag-" + i}>
                {reviewList.map((cardInfo, jndex) => (
                  <ReviewCard {...cardInfo} key={i++} />
                ))}
                <GridItem colSpan={{ base: 1, md: 2 }} key={i++}>
                  <TestmonialCard {...testimonial} index={i} />
                </GridItem>
              </React.Fragment>
            )
          )}

          {/* add full width quote cards to break up the reviews */}
        </Grid>
        <HomeForm />
      </Stack>
    </Center>
  );
}

type Review = {
  logo: "Google" | "Avvo";
  name: string;
  stars: number;
  review: string;
};

interface Testimonial {
  name: string;
  content: string;
}

const reviews: { reviewList: Review[]; testimonial: Testimonial }[] = [
  {
    reviewList: [
      {
        logo: "Avvo",
        name: "Leslie A.",
        stars: 5,
        review:
          "Joe is a very nice and professional gentleman to work with. He is very reasonably priced. He was very knowledgeable and answered all of my questions. I would highly recommend him to anyone for their attorney needs.",
      },
      {
        logo: "Avvo",
        name: "Leslie B.",
        stars: 5,
        review:
          "Joe is a very nice and professional gentleman to work with. He is very reasonably priced. He was very knowledgeable and answered all of my questions. I would highly recommend him to anyone for their attorney needs.",
      },
      {
        logo: "Avvo",
        name: "Leslie H.",
        stars: 5,
        review:
          "Joe is a very nice and professional gentleman to work with. He is very reasonably priced. He was very knowledgeable and answered all of my questions. I would highly recommend him to anyone for their attorney needs.",
      },
      {
        logo: "Avvo",
        name: "Leslie H.",
        stars: 5,
        review:
          "Joe is a very nice and professional gentleman to work with. He is very reasonably priced. He was very knowledgeable and answered all of my questions. I would highly recommend him to anyone for their attorney needs.",
      },
    ],
    testimonial: {
      name: "Brandi L.",
      content:
        "Joe is extremely knowledgeable. He communicates all of the information and lets you know what to expect every step of the way.  He is also very thorough. I would highly recommend him to anyone needing a good debt relief attorney.",
    },
  },
  {
    reviewList: [
      {
        logo: "Avvo",
        name: "Leslie A.",
        stars: 5,
        review:
          "Joe is a very nice and professional gentleman to work with. He is very reasonably priced. He was very knowledgeable and answered all of my questions. I would highly recommend him to anyone for their attorney needs.",
      },
      {
        logo: "Avvo",
        name: "Leslie B.",
        stars: 5,
        review:
          "Joe is a very nice and professional gentleman to work with. He is very reasonably priced. He was very knowledgeable and answered all of my questions. I would highly recommend him to anyone for their attorney needs.",
      },
      {
        logo: "Avvo",
        name: "Leslie H.",
        stars: 5,
        review:
          "Joe is a very nice and professional gentleman to work with. He is very reasonably priced. He was very knowledgeable and answered all of my questions. I would highly recommend him to anyone for their attorney needs.",
      },
      {
        logo: "Avvo",
        name: "Leslie H.",
        stars: 5,
        review:
          "Joe is a very nice and professional gentleman to work with. He is very reasonably priced. He was very knowledgeable and answered all of my questions. I would highly recommend him to anyone for their attorney needs.",
      },
    ],
    testimonial: {
      name: "Brandi L.",
      content:
        "Joe is extremely knowledgeable. He communicates all of the information and lets you know what to expect every step of the way.  He is also very thorough. I would highly recommend him to anyone needing a good debt relief attorney.",
    },
  },
  {
    reviewList: [
      {
        logo: "Avvo",
        name: "Leslie A.",
        stars: 5,
        review:
          "Joe is a very nice and professional gentleman to work with. He is very reasonably priced. He was very knowledgeable and answered all of my questions. I would highly recommend him to anyone for their attorney needs.",
      },
      {
        logo: "Avvo",
        name: "Leslie B.",
        stars: 5,
        review:
          "Joe is a very nice and professional gentleman to work with. He is very reasonably priced. He was very knowledgeable and answered all of my questions. I would highly recommend him to anyone for their attorney needs.",
      },
      {
        logo: "Avvo",
        name: "Leslie H.",
        stars: 5,
        review:
          "Joe is a very nice and professional gentleman to work with. He is very reasonably priced. He was very knowledgeable and answered all of my questions. I would highly recommend him to anyone for their attorney needs.",
      },
      {
        logo: "Avvo",
        name: "Leslie H.",
        stars: 5,
        review:
          "Joe is a very nice and professional gentleman to work with. He is very reasonably priced. He was very knowledgeable and answered all of my questions. I would highly recommend him to anyone for their attorney needs.",
      },
    ],
    testimonial: {
      name: "Brandi L.",
      content:
        "Joe is extremely knowledgeable. He communicates all of the information and lets you know what to expect every step of the way.  He is also very thorough. I would highly recommend him to anyone needing a good debt relief attorney.",
    },
  },
];
