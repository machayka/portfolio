import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projekty | Kacper Machaj",
  description:
    "Kacper Machaj to programista full-stack, który uwielbia tworzyć aplikacje internetowe, które mogą coś wnieść do życia innych ludzi.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10"> Nad czym pracowałem</Heading>

      <Products />
    </Container>
  );
}
