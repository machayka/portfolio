import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";

function yearsAt(startYear: number, startMonth: number) {
  const now = new Date();
  let years = now.getFullYear() - startYear;
  if (now.getMonth() + 1 < startMonth) years--;
  return years;
}

export default function Home() {
  const najmujeLata = yearsAt(2023, 5);
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hej! Jestem Kacper</Heading>
      <Paragraph className="max-w-xl mt-4">
        Buduję produkty od pomysłu po wdrożenie. Nie myślę tylko jako
        programista - myślę jako ktoś, kto chce, żeby{" "}
        <Highlight>produkt działał i zarabiał</Highlight>.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Ciągle startuję z nowymi pomysłami - od 17. roku życia. Raczej nic nie
        wypala. Nie szkodzi. Od <Highlight>{najmujeLata} lat</Highlight> pracuję w{" "}
        <a
          href="https://najmuje.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          najmuje.com
        </a>
        .
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Moje projekty
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
