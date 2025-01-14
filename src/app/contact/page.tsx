import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Kacper Machaj",
  description:
    "Kacper Machaj to programista full-stack, który uwielbia tworzyć aplikacje internetowe, które mogą coś wnieść do życia innych ludzi.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Napisz do mnie</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Skontaktuj się ze mną mailowo lub wypełnij formularz kontaktowy.
        Odpowiem najszybciej, jak to możliwe.
      </Paragraph>
      <Contact />
    </Container>
  );
}
