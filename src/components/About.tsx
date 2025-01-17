"use client";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/about/BE4AD421-0D26-4383-8812-036298A877A5_1_105_c.jpeg",
    "/images/about/D6E884A4-389B-4861-A969-F07B27BE5057.jpeg",
    "/images/about/1FF411CF-76A1-412F-98C5-3C78463B1F48_1_102_o.jpeg",
    "/images/about/B4747D33-DB06-4F95-B801-1A786F816B37_1_102_o.jpeg",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        {/* 
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Jestem studentem <Highlight>Ekonomii</Highlight>, który z pasją
          zgłębia świat technologii i kryptowalut. Programowanie to dla mnie coś
          więcej niż praca – to hobby, które mnie wciągnęło już w technikum, a
          podczas pandemii wszedłem w nie na całego. Chciałem produktywnie
          wykorzystać czas wolny i tak zaczęła się moja przygoda.
        </Paragraph>
        <Paragraph className=" mt-4">
          Zacząłem od <Highlight>Pythona</Highlight>, bo marzyłem o tworzeniu
          AI, ale szybko przekonałem się, że to nie takie proste. Potem
          spróbowałem zrobić bota do tradingu – znów wyzwanie było ponad moje
          umiejętności. Mimo to każde z tych doświadczeń pchało mnie dalej, aż
          podczas wakacji dostałem swoją <Highlight>pierwszą pracę</Highlight>{" "}
          jako programista. Od tamtej pory uczę się na okrągło i czerpię ogromną
          radość z tego, że ciągle mogę być lepszy.
        </Paragraph>

        <Paragraph className=" mt-4">
          Najbardziej kręci mnie chyba rozwój – patrzę na swój kod sprzed pół
          roku i mam ochotę napisać go od nowa, bo teraz wiem, jak zrobić to
          lepiej. Programowanie nie jest dla mnie obowiązkiem, a frajdą. Gdyby
          nie rachunki, mógłbym robić to za darmo.
        </Paragraph>
        <Paragraph className=" mt-4">
          Poza programowaniem uwielbiam swoje akwarium – 200 litrów automatyki i
          pięknego, naturalnego rozkwitu. To taki mój projekt, który wymaga
          precyzji i zaangażowania, trochę jak kodowanie.
        </Paragraph>
        <Paragraph className=" mt-4">
          W przyszłości widzę siebie w branży kryptowalut – to idealne
          <Highlight>połączenie technologii i ekonomii</Highlight>, które
          idealnie do mnie pasuje. Jestem osobą, która zawsze{" "}
          <Highlight>
            daje z siebie wszystko, i w każdy projekt wkładam pełne
            zaangażowanie.
          </Highlight>{" "}
          Jeśli coś robię, to robię to dobrze.
        </Paragraph>
        <Paragraph className=" mt-4">Dzięki, że tu jesteś.</Paragraph>
      </div>
    </div>
  );
}
