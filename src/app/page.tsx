import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hej! Jestem Kacper</Heading>
      <Paragraph className="max-w-xl mt-4">
        Jestem programistą full-stack i uwielbiam{" "}
        <Highlight>tworzyć aplikacje</Highlight>, wdrażać je i rozwijać.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Programuje zawodowo od{" "}
        <Highlight>{new Date().getFullYear() - 2021} lat</Highlight> i nie
        zamierzam przestawać.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Nad czym pracowałem
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
