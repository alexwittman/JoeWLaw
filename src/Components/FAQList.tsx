import { CheckIcon } from "@chakra-ui/icons";
import {
  Accordion,
  Stack,
  AccordionItem,
  AccordionButton,
  HStack,
  Box,
  Icon,
  Flex,
  AccordionIcon,
  AccordionPanel,
  Text,
} from "@chakra-ui/react";

type Props = {
  n?: number;
};

export default function FAQList({ n }: Props) {
  return (
    <Accordion
      allowMultiple
      allowToggle
      width={"full"}
      maxW={{ base: "full", md: "3xl" }}
      mt={6}
    >
      <Stack spacing={4}>
        {GetFAQs(n).map((faq, index) => (
          <AccordionItem
            key={index}
            width="full"
            border="none"
            bg="gray.100"
            borderRadius={"10px"}
          >
            <AccordionButton
              borderRadius={"10px"}
              bg="gray.100"
              _hover={{ bg: "gray.200" }}
            >
              <HStack flex={1} textAlign="left">
                <Text fontWeight={600} fontSize={{ base: "xl", md: "2xl" }}>
                  {faq.question}
                </Text>
                <Flex flex={1} />
                <AccordionIcon />
              </HStack>
            </AccordionButton>
            <AccordionPanel textAlign={"left"}>
              <Text color={"gray.600"} fontSize="lg">
                {faq.answer}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Stack>
    </Accordion>
  );
}

function GetFAQs(n: number | undefined): faq[] {
  if (n === undefined) return faqs;
  return faqs.slice(0, n);
}

type faq = {
  question: string;
  answer: string;
};

const faqs: faq[] = [
  {
    question: "Do you offer a FREE consultation?",
    answer:
      "The law office of Joe Wittman offers a FREE CONSULTATION.  We ask when you schedule an appointment that you bring with you all the materials we have asked for so we can make the time meaningful to you and to us.  If you decide to hire us, then you will sign a contract with us and we begin WORKING FOR YOU at that time to get your case on file.  If you decide to pursue other options, you are out only the time for the first appointment. Choice is yours.",
  },
  {
    question: "How much does bankruptcy cost?",
    answer: `The cost depends on the chapter you file.  The filing fee is $338.00 for a Chapter 7 and $313.00 for a chapter 13.  That goes to the Court.

              Attorney fees for a Chapter 7 run from $1,400.00 and higher and $3,100.00 or more for a Chapter 13.  Fees for Chapter 7 must be filed before the filing of the bankruptcy or from property the debtor turns over or sells to pay his/her attorney.  Chapter 13 attorney fees can be paid through the Chapter 13 plan.

              Arrangements and exceptions can be made depending upon the facts and circumstances of any case.`,
  },
  {
    question: "Why should I choose Wittman Law as my attorney?",
    answer: `Joe Wittman is an experienced bankruptcy attorney who has handled over 12,000 bankruptcies in the past 40+ years.

              He has served as a Chapter 7 trustee for over 22 years which distinguishes him from any other attorney serving debtors in the Topeka area.

              Joe Wittman gives individual attention to all his clients and returns all emails and phone calls within 24 hours of the time of receipt from clients and prospective clients.

              Joe Wittman gives you the care and concern to YOUR CASE which I needed to resolve any and all issues you have.`,
  },
  {
    question: "Will I get to keep my tax refund if I file bankruptcy?",
    answer: `Answer depends on various factors including the chapter filed and what the tax refund comes from.  In a Chapter 7, the only tax refund which is an issue is the refund in the year in which you file the bankruptcy.  If the refund is from Earned Income Credit (EIC), it is exempt to you in Kansas.  If it is from w/holding and/or Child Tax Credit (CTC), then you could loose that portion.  The trustee will prorate the refund based upon when you filed the case.  If you filed July 1, you would loose 50% of the NON EXEMPT tax refunds.

              In Chapter 13, the trustee is usually more lenient.  The EIC is still exempt and you get it.  The trustee may claim a portion of the refund based on the other factors but likely does not claim the CTC.  The trustee will make this determination on each year the case is pending.  If the tax refund is NOT TURNED OVER, he may seek dismissal of your caae.`,
  },
  {
    question: "Does bankruptcy STOP garnishments on my wages?",
    answer: `YES, a bankruptcy still STOP a creditor from taking 25% of your wages.  The garnishment will not STOP until you actually file your wages.  If you are currently being garnished then you need to get with an attorney ASAP to STOP the garnishment.  If you delay two weeks in getting the case filed, then the garnishment will continue until the case is filed.`,
  },
  {
    question:
      "I see all kinds of attorneys who claim to be the BEST attorney to file with?",
    answer:
      "Attorneys who are listed as the BEST attorneys have usually paid a fee for that designation or selection.  That designation is worth only what was paid for it.  Whether they show up first, second or fifth, makes no difference.  Call the attorney or schedule a time to make your own determination of who is best for you.",
  },
  {
    question:
      "I am embarrassed to file bankruptcy and feel I have failed, have I failed?",
    answer:
      "These are uncertain times, with unemployment, loss of income due to loss of work and other issues from medical to divorce and other types of issues which people have to deal with.  Bankruptcy is NOT A STIGMA that many once thought it was.  It is a realistic tool to deal with the problems we all encounter in one way or another.  Bankruptcy can SOLVE those issues and allow you to emerge with a NEW START and a FRESH START, by closing out chapters you would rather forget but are still part of you.  Hopefully bankruptcy gives you that ability to leave things behind and START ANEW.",
  },
  {
    question: "Am I eligible to file a Chapter 7?",
    answer: `If you meet the means test based upon family size and income limitations and have not filed and rec’d a discharge in a prior Chapter 7 within 8 years, you can file Chapter 7.  If you make too much income to file Chapter 7, then your only option may be Chapter 13.  Certain circumstances may affect this ability which need to be discussed with your attorney.

              If you can not file a Chapter 7, you can file a Chapter 13 bankruptcy.  You can even file a Chapter 13, if you have rec’d a discharge in a previously filed Chapter 13 bankruptcy within certain time periods before filing the new case.  There are some limitations which will need to be considered in this case.`,
  },
  {
    question:
      "Am I eligible to file bankruptcy in Kansas, if I recently moved here from another state?",
    answer: `If you moved to Kansas within the last 90 days, you must have lived here at least 91 days before filing to file in Kansas.  Otherwise, you will need to file in the state you moved from or you will need to wait enough time to comply with the law.`,
  },
  {
    question: "Can I keep my car in a bankruptcy?",
    answer: `If you owe nothing on the vehicle you can keep one car  per filing debtor.  If there is a lien on the car, you will need to make  the payments you agreed to pay.  If you bought the car more than 910 days ago, Chapter 13 may provide you a way to cure an delinquency and even pay less for it at a lower interest rate.`,
  },
  {
    question: "Can I keep my home in a bankruptcy?",
    answer: `If you are a homeowner and the home is paid for, you can keep the home.  If you own rental houses or land, that may not be true.  If you are behind on your payments, in Chapter 7 you will have to catch the payments up to keep the home.  Chapter 13 can be used to keep your home while catching up the delinquency over the length of the plan.`,
  },
  {
    question:
      "Can I keep a credit card which I owe nothing as of time of filing?",
    answer: `This will depend on the credit card company.  If you owe nothing, the company may let you keep the card and charge in the future.  They may not.  Even if you owe nothing, you have filed bankruptcy and they consider that against you.  Check with your credit card company.`,
  },
  {
    question: "What about my student loans?",
    answer: `Student loans are not dischargeable in bankruptcy unless you can show a “hardship discharge”.  That is hard to prove and usually requires you to be almost completely unable to pay anything back to the creditor.  There are provisions with the DOE (Department of Education) where you can work out payment plans over a number of years which could eventually allow forgiveness of the student loans if you make all the payments under those plans.  Use of resources at Housing and Credit Counseling, (HCCI), could be valuable in evaluating this question.`,
  },

  {
    question: "Are there alternatives other than Chapter 7 and 13?",
    answer: `Doing nothing is usually the course most have chosen before they consider 7 or 13.  That usually results in lawsuits and/or garnishments of wages which cost you hundreds of dollars before you decide to file.  You can try to work out payment arrangements with creditors but usually they don’t’ work and simply buy you some time.  It really comes down to an issue of “cash flow” which means is there enough cash each month to pay your living expenses and your monthly debts that you have.  If not, then bankruptcy is your only choice which makes sense.`,
  },
  {
    question: "What if I don’t have the money to pay the fees for a Chapter 7?",
    answer: `Take money out of retirement funds, sell something, cut back on expenses, get relatives or fiends to assist you.  If you don’t have the money to pay an attorney and you can tell your creditors to “take a hike” and maybe they would leave you alone.  Probably not, but in some instances if there is no income or resources to pay an attorney, you may have no other choice.`,
  },
  {
    question: "Can I keep my guns?",
    answer: `Guns are NOT EXEMPT in Kansas.  If you own them when the case is filed, you will have to turn them over to the trustee or buy them back from the trustee.  If you don’t disclose them, and the trustee finds out that you owned property that you did not disclose the trustee will file an action against you to deny your discharge.  If the discharge has already been granted., the trustee can move to set it aside.  You will have accomplished nothing.`,
  },
  {
    question: "Can I keep a second car for my high school student?",
    answer: `A vehicle seems to be needed for anyone in high school or older.  If the vehicle has a lien on it and you can afford to keep it and make the payments, you can keep it.  If the vehicle has no lien on it, the trustee may ask that it be turned over for sale or you can buy it back from the trustee.  If the child bought the vehicle with their own funds or from fund given to them by relatives or others they may be able to keep the vehicle. `,
  },
  {
    question:
      "What about a boat or recreational vehicle like a ATV or RV of some type?",
    answer: `Again if there is a lien on it and you can afford to pay for it and there is no equity, then you can likely keep it.  If there is no lien on it, the trustee will require turnover of it or you can buy it back from the trustee.`,
  },
  {
    question: "What about coin collections or collectibles?",
    answer: `These items, under most circumstances, are NOT EXEMPT and the trustee will ask for their turnover.  If the value of the items is minimal (let’s say $500 or less) the trustee may not care but each case will turn on its own facts.`,
  },
];
