import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";

import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Kacper Machaj",
  description:
    "Kacper Machaj to programista full-stack, który uwielbia tworzyć aplikacje internetowe, które mogą coś wnieść do życia innych ludzi.",
};

export default function AboutPage() {
  const images = [
    "/images/about/BE4AD421-0D26-4383-8812-036298A877A5_1_105_c.jpeg",
    "/images/about/D6E884A4-389B-4861-A969-F07B27BE5057.jpeg",
    "/images/about/1FF411CF-76A1-412F-98C5-3C78463B1F48_1_102_o.jpeg",
    "/images/about/B4747D33-DB06-4F95-B801-1A786F816B37_1_102_o.jpeg",
  ];
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">O mnie</Heading>
      <About />
    </Container>
  );
}
