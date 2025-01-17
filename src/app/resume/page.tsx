import { Container } from "@/components/Container";
import { EducationHistory } from "@/components/EducationHisotry";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Historia pracy</Heading>
      <Paragraph className="max-w-xl mt-4">
        Najbardziej lubię pracować nad <Highlight>produktem,</Highlight> tworzyć
        rozwiązania i je wdrażać.
      </Paragraph>
      <WorkHistory />
      <span className="text-4xl">📚</span>
      <Heading className="font-black">Edukacja</Heading>
      <Paragraph className="max-w-xl mt-4">
        Choć praca może być bardziej opłacalna niż studiowanie, uniwersytet
        oferuje nieocenioną wartość –{" "}
        <Highlight>
          możliwość spotkania niezwykłych osób i zrozumienia pasji
        </Highlight>
        , które są dalekie od naszych własnych.
      </Paragraph>
      <EducationHistory />
    </Container>
  );
}
