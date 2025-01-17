import Kelnerhood2 from "public/images/Kelnerhood2.png";
import Kelnerhood3 from "public/images/Kelnerhood3.png";
import Kelnerhood4 from "public/images/Kelnerhood4.png";
import AgreemBid1 from "public/images/agreembid1.png";
import AgreemBid2 from "public/images/agreembid2.png";
import AgreemBid3 from "public/images/agreembid3.png";
import EduRewolucja1 from "public/images/edu-rewolucja.png";
import EduRewolucja2 from "public/images/edu-rewolucja2.png";
import Simulator from "public/images/simulator.png";

export const products = [
  {
    href: "https://agreem.bid",
    title: "Agreem Bid",
    description:
      "Automatyzacja procesu podpisywania umów i ofert przez tworzenie smartkontraktów escrow.",
    thumbnail: AgreemBid1,
    images: [AgreemBid1, AgreemBid2, AgreemBid3],
    stack: ["Nextjs", "React", "Tailwindcss", "Figma"],
    slug: "agreem-bid",
    content: (
      <div>
        <p>
          Pracując nad tym projektem, nauczyłem się wiele nowych rzeczy, które
          poszerzyły moje umiejętności jako developera. Przede wszystkim:
        </p>
        <ul>
          <li>
            <strong>Prototypowanie i projektowanie UX/UI:</strong> Korzystałem z
            Figmy, aby stworzyć intuicyjne i atrakcyjne wizualnie interfejsy
            użytkownika. Możesz zobaczyć jeden z{" "}
            <a
              href="https://www.figma.com/design/DpmWga34DqfWdJEdfVFiWX/shadcn-%2F-ui-components---Updated-July-24'-(Community)?node-id=0-1&t=HTtEYrG69V54nJJs-1"
              target="_blank"
            >
              prototypów w Figmie
            </a>
            .
          </li>
          <li>
            <strong>Podstawy Solidity i kryptografii:</strong> Pracowałem nad
            smart kontraktami, co pozwoliło mi lepiej zrozumieć, jak działa
            blockchain i jakie daje możliwości.
          </li>
          <li>
            <strong>Bezpieczeństwo danych:</strong> Nauczyłem się implementować
            mechanizmy, takie jak hashowanie dokumentów i weryfikacja
            autentyczności czy podpisywanie poprzez klucz prywatny i publiczny.
          </li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://kelnerhood.com",
    title: "Kelnerhood",
    description:
      "Zwiększ sprzedaż w swojej restauracji z Kelnerhood, systemem do zarządzania zamówieniami.",
    thumbnail: Kelnerhood4,
    images: [Kelnerhood2, Kelnerhood3, Kelnerhood4],
    stack: ["Firebase", "React", "Tailwindcss", "i18next"],
    slug: "kelnerhood",
    content: (
      <div>
        <p>
          Kelnerhood to platforma, którą stworzyliśmy, aby ułatwić życie zarówno
          restauratorom, jak i ich klientom. Dzięki kodom QR klienci mogą
          zamawiać jedzenie bezpośrednio ze swoich smartfonów, co przyspiesza
          obsługę i poprawia komfort korzystania z restauracji. System pozwala
          na szybkie realizowanie zamówień, zwiększa satysfakcję klientów i
          wprowadza nowoczesne rozwiązania do codziennej obsługi.{" "}
        </p>
        <p>
          Pracując nad tym projektem, nauczyłem się wielu rzeczy. Przede
          wszystkim zarządzania zespołem – koordynowałem prace innych
          programistów i dbałem, aby wszystko działało zgodnie z planem.
          Współpracowaliśmy intensywnie na GitHubie i Jirze, co pozwoliło mi
          lepiej opanować pracę zespołową i kontrolę wersji.{" "}
        </p>
        <p>
          Stworzyliśmy funkcje takie jak personalizacja menu, obsługa wielu
          języków czy personalizowane motywy restauracji. To wszystko sprawiło,
          że praca nad Kelnerhood była dla mnie świetną okazją do rozwoju
          zarówno technicznego, jak i organizacyjnego.{" "}
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/GrandeWaver/edu-rewolucja/blob/main/Projekt%20“edu-rewolucja”%20(1).pdf",
    title: "Edu-rewolucja",
    description:
      "Aplikacja umożliwiająca korepetycje online oferująca narzędzia takie jak harmonogramy, nagrody za aktywność czy śledzenie postępów.",
    thumbnail: EduRewolucja2,
    images: [EduRewolucja2, EduRewolucja1],
    stack: ["Vue", "FastAPI", "nginx", "PostgreSQL"],
    slug: "edu-rewolucja",
    content: (
      <div>
        <p>Pracując nad tym projektem, zdobyłem wiele cennych umiejętności:</p>
        <ul>
          <li>
            <strong>Prototypowanie:</strong> Korzystałem z narzędzi takich jak
            Figma do tworzenia koncepcji i projektów interfejsów.
          </li>
          <li>
            <strong>Backend:</strong> Opanowałem technologie, takie jak FastAPI,
            PostgreSQL oraz Nginx. Tworzyłem API, zarządzałem bazą danych i
            serwerem.
          </li>
          <li>
            <strong>Frontend:</strong> Rozwijałem swoje umiejętności w Vue.js,
            implementując funkcjonalności takie jak kalendarze oraz autoryzacja
            OAuth2 (Google i Zoom).
          </li>
          <li>
            <strong>DevOps:</strong> Zarządzałem serwerami na DigitalOcean oraz
            AWS, konfigurowałem środowiska i wdrażałem zmienne środowiskowe, a
            także implementowałem certyfikaty SSL.
          </li>
        </ul>{" "}
      </div>
    ),
  },
  {
    href: "https://grandewaver-saving-calculator-sp500-xbmrbw.streamlit.app",
    title: "Symulator prostego algorytmu inwestycyjnego",
    description:
      "Aplikacja webowa, która pozwala na symulację inwestycji w S&P 500.",
    thumbnail: Simulator,
    images: [Simulator],
    stack: ["Python"],
    slug: "sp500-simulator",
    content: (
      <div>
        <p>
          Kalkulator oszczędzania to narzędzie, które stworzyłem, aby pomóc w
          planowaniu strategii inwestycyjnych na przykładzie indeksu S&P 500.
          Aplikacja umożliwia użytkownikowi symulację regularnych inwestycji,
          obliczając potencjalne zyski na podstawie wybranych parametrów, takich
          jak częstotliwość zakupu, kwota oraz dodatkowe algorytmy analizy cen.
        </p>
        <p>
          Podstawowe założenie opiera się na prostym, lecz skutecznym modelu: co
          określoną liczbę dni inwestujemy zadaną kwotę w indeks S&P 500.
          Wbudowany algorytm analizuje średnią cenę z ostatnich dni i
          rekomenduje zakup, gdy obecna cena jest niższa od tej średniej. Model
          zakłada długoterminowe inwestowanie z minimalnym nakładem czasu,
          pozwalając użytkownikowi wykorzystać lokalne dołki na rynku.
        </p>

        <p>
          Pracując nad tym projektem, nauczyłem się analizowania danych
          finansowych oraz implementacji algorytmów wspomagających inwestowanie.
          Dzięki temu mogłem połączyć wiedzę technologiczną z praktycznym
          zastosowaniem w dziedzinie finansów.
        </p>
      </div>
    ),
  },
];
