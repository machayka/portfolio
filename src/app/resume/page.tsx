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
        Nad najmuje.com pracuję od czerwca 2023 - najpierw jako programista w
        TylkoAdvisors, teraz jako CTO w Banner Digital. Ten sam projekt, nowa
        rola.
      </Paragraph>
      <WorkHistory />
      <span className="text-4xl mt-20 block">📚</span>
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
