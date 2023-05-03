import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { BsTwitter, BsLinkedin, BsCode } from 'react-icons/bs';
import { FaFigma, FaReact } from 'react-icons/fa';
import { SiNetlify, SiTailwindcss } from 'react-icons/si';
import projectImage1 from '../assets/project-sluis.png';
import projectImage2 from '../assets/project-todo.png';
import portfolioImage from '../assets/hero-steven.png';
import mapImage from '../assets/map.png';
import techStackImage from '../assets/app.png';
import weightImage from '../assets/weight.png';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="container mx-auto max-w-screen-lg px-8 pb-8 pt-28 grid gap-8 sm:grid-cols-2">
        <div className="flex flex-col justify-center gap-4">
          <h3>Heyooo.</h3>
          <p>
            Software developer met ervaring in Front-End development en UI/UX
            design. Op zoek naar de volgende uitdaging!
          </p>
          <div className="flex gap-6 items-center">
            <Button type="mail">Contact</Button>
            <div className="flex gap-4">
              <a
                className="h-10 w-10 group transition-all duration-300 grid place-items-center rounded-md border border-teal-900 hover:bg-teal-900 hover:shadow-md focus:bg-teal-900 focus:shadow-md"
                href="https://www.linkedin.com/in/zstevenn/"
                target="_blank"
              >
                <BsLinkedin className="text-xl transition-all duration-300 text-teal-900 group-hover:text-neutral-100 group-focus:text-neutral-100" />
              </a>
            </div>
          </div>
        </div>
        <img src={portfolioImage} alt="Steven Li" title="Steven Li" />
      </div>

      {/* Projecten */}
      <div className="container mx-auto max-w-screen-lg p-8">
        <h3 className="pb-4">Projecten</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card
            imgSrc={projectImage1}
            imgTitle="Cafetaria de Sluis"
            cardTitle="Cafetaria de Sluis"
            cardDate="December 2022 - Lopend"
            cardDescription="UI/UX Design, Software development &#38; Lancering van de website."
            cardLink="https://www.cafetariadesluis.nl"
          />
          <Card
            imgSrc={projectImage2}
            imgTitle="Steven’s To-Do"
            cardTitle="Steven’s To-Do"
            cardDate="Januari 2023 - Lopend"
            cardDescription="Tech stack: React.js, Vite, Tailwind CSS, Firebase, Netlify."
            cardLink="https://stevens-todo-app.netlify.com"
          />
          {/* <Card
            imgSrc="https://via.placeholder.com/400x200"
            imgTitle="Improve My Habits"
            cardTitle="Improve My Habits"
            cardDate="Binnenkort"
            cardDescription="UI/UX Design, Software development &#38; Lancering van de website."
          /> */}
        </div>
      </div>

      {/* Laten we in contact blijven */}
      <div className="bg-teal-900">
        <div className="container mx-auto max-w-screen-lg p-8">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:items-center">
            <div className="grid gap-4">
              <h3 className="pb-4 text-neutral-100">
                Laten we in contact blijven!
              </h3>
              <p className="text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
              <div className="flex flex-col gap-4">
                <Button type="mail" variant="secondary">
                  stevenli.inbox@gmail.com
                </Button>
                <Button type="download" variant="secondary">
                  Download CV
                </Button>
              </div>
            </div>
            <img src={mapImage} alt="Map" title="Map" className="max-h-64" />
          </div>
        </div>
      </div>

      {/* Over mij */}
      <div className="container mx-auto max-w-screen-lg p-8">
        <h3 className="pb-4">Over mij</h3>
        <p className="text-neutral-500 pb-4">
          Ten eerste, bedankt voor het bezoeken van mijn portfolio! Mijn naam is
          Steven, een ambitieuze (junior) software developer &#38; UI/UX
          designer, momenteel werkzaam als Stagiair software developer bij
          Sellvation Marketing B.V. Mijn voornamelijke interesses zijn momenteel
          Front end development, waarbij mijn focus voornamelijk ligt bij het
          continu verbeteren van user experience en webdesign in Figma dat ik
          realiseer in React.js/Tailwind CSS projecten.
        </p>
        <h4 className="pb-4">Technologieën</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-neutral-500 pb-4">
              Enkele technologieën waarmee ik gewerkt heb en ervaring in mee heb
              zijn onder andere:
            </p>
            <ul className="text-neutral-500 pb-4">
              <li className="flex items-center py-1">
                <BsCode className="inline text-xl mr-2" /> Basis HTML, CSS,
                JavaScript en PHP
              </li>
              <li className="flex items-center py-1">
                <FaFigma className="inline text-xl mr-2" />
                UI/UX Design in Figma
              </li>
              <li className="flex items-center py-1">
                <FaReact className="inline text-xl mr-2" />
                React.js
              </li>
              <li className="flex items-center py-1">
                <SiTailwindcss className="inline text-xl mr-2" />
                Tailwind CSS
              </li>
              <li className="flex items-center py-1">
                <SiNetlify className="inline text-xl mr-2" />
                Netlify
              </li>
            </ul>
          </div>
          <img
            src={techStackImage}
            alt="Tech stack"
            title="Tech stack"
            className="max-h-64"
          />
        </div>
        <h4 className="pb-4">Opleidingen &#38; Certificaten</h4>
        <div className="grid grid-cols-1 gap-4 pb-4">
          <Card
            imgSrc="https://via.placeholder.com/400x100"
            imgTitle="Diploma Software developer"
            cardTitle="Diploma Software developer"
            cardDate="MBO Utrecht - 2019 t/m 2023 - In progressie"
            cardButton="disabled"
          />
          <Card
            imgSrc="https://via.placeholder.com/400x100"
            imgTitle="Complete Web &#38; Mobile Designer: UI/UX, Figma + More"
            cardTitle="Complete Web &#38; Mobile Designer: UI/UX, Figma + More"
            cardDate="Udemy - 2023 - In progressie"
            cardButton="disabled"
          />
          <Card
            imgSrc="https://via.placeholder.com/400x100"
            imgTitle="Vue - The Complete Guide (incl. Router &#38; Composition API)"
            cardTitle="Vue - The Complete Guide (incl. Router &#38; Composition API)"
            cardDate="Udemy - 2023 - Gepland"
            cardButton="disabled"
          />
        </div>
        <h4 className="pb-4">Persoonlijke doelen</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="text-neutral-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
          <img
            src={weightImage}
            alt="Weight"
            title="Weight"
            className="max-h-64"
          />
        </div>
      </div>
    </>
  );
}
