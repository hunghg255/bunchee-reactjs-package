'use client';

import { ReactMarques } from 'react-marques';

import { GithubIcon } from './GithubIcon';
import { TestimonialCard, TestimonialProps } from './TestimonialCard';
import { codeToHtml } from 'shiki';
import { useEffect, useState } from 'react';

const testimonials: TestimonialProps[] = [
  {
    name: 'Emily Johnson',
    title: 'Senior Frontend Developer',
    avatar: 'https://i.pravatar.cc/150?img=21',
    content:
      "Marquee Library has been a game-changer for our TypeScript projects. Its seamless integration and robust features have significantly improved our UI's dynamic capabilities.",
  },
  {
    name: 'Raj Patel',
    title: 'Tech Lead',
    avatar: 'https://i.pravatar.cc/150?img=18',
    content:
      "I'm thoroughly impressed with Marquee's performance and ease of use. It made implementing complex scrolling texts a breeze, and the support for TypeScript is top-notch.",
  },
  {
    name: 'Sofia Garcia',
    title: 'UI/UX Designer',
    avatar: 'https://i.pravatar.cc/150?img=45',
    content:
      'As a designer, I appreciate how Marquee enhances the visual appeal of our applications. The flexibility it offers in styling and animation is fantastic.',
  },
  {
    name: 'John Mack',
    title: 'Full Stack Developer',
    avatar: 'https://i.pravatar.cc/150?img=60',
    content:
      'Integrating Marquee into our full-stack TypeScript projects has been incredibly efficient. Its compatibility and ease of customization are ideal for our diverse project needs.',
  },
  {
    name: 'Isabella Smith',
    title: 'Project Manager',
    avatar: 'https://i.pravatar.cc/150?img=32',
    content:
      "Marquee Library has consistently delivered beyond our expectations. It's not just a tool; it's an asset that enhances productivity and creativity in our TypeScript applications.",
  },
];

function Logo({ src }: { src: string }) {
  return <img src={src} className="h-16 inline-block" />;
}

function Code({ children, lang = 'javascript' }: { children: string; lang?: string }) {
  const [code, setcode] = useState('');

  useEffect(() => {
    const fetchCode = async () => {
      const html = await codeToHtml(children, {
        lang: lang,
        theme: 'vitesse-light',
      });
      setcode(html);
    };
    fetchCode();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: code }}></div>;
}

const codeImport = `
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css"; // if you copy ala shadcn, no need import css.
`.trim();

const codeExample1 = `
// Use fade props
<ReactMarques fade={true}>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</ReactMarques>
`.trim();

const codeExample2 = `
// Use reverse props
<ReactMarques fade={true} reverse={true}>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</ReactMarques>
`.trim();

const codeExample3 = `
// Use pauseOnHover props
<ReactMarques fade={true} pauseOnHover={true}>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</ReactMarques>
`.trim();

const codeExample4 = `
// Use direction props
<ReactMarques fade={true} direction="up">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</ReactMarques>
`.trim();

const codeExample5 = `
// Use css vars for gap and duration
// Default is 1 rem and 40s
<ReactMarques className="gap-[3rem] [--duration:5s]" innerClassName="gap-[3rem] [--gap:3rem]" fade={true}>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</ReactMarques>
`.trim();

const codeExample6 = `
// Respect user accessibility settings
<ReactMarques className="motion-reduce:overflow-auto" innerClassName="motion-reduce:animate-none motion-reduce:first:hidden">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</ReactMarques>
`.trim();

export function Hero() {
  return (
    <div className="bg-stone-50 w-screen min-h-screen">
      <div className="max-w-screen-lg mx-auto py-6 px-4 space-y-4">
        <div className="flex items-start sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h1 className="text-2xl font-semibold">react-marques</h1>
            <div className="text-stone-600">A beautiful marquee component for React.</div>
          </div>
          <div className="flex items-center gap-1">
            <a
              href="https://github.com/hunghg255/react-marques"
              target="_blank"
              className="bg-black text-xs font-semibold text-white px-2.5 py-1 rounded-md inline-flex items-center hover:bg-black/80 transition-colors"
            >
              <GithubIcon className="size-4 mr-1" />
              Github
            </a>
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">Installation</h2>
          <Code lang="bash">npm install react-marques</Code>
        </div>
        <div className="py-4">
          <ReactMarques className="py-2" fade={true}>
            {testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={i}
                name={testimonial.name}
                title={testimonial.title}
                avatar={testimonial.avatar}
                content={testimonial.content}
              />
            ))}
          </ReactMarques>
          <ReactMarques className="py-2" reverse={true} fade={true}>
            {testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={i}
                name={testimonial.name}
                title={testimonial.title}
                avatar={testimonial.avatar}
                content={testimonial.content}
              />
            ))}
          </ReactMarques>
        </div>

        <hr className="border-stone-200" />
        <div className="space-y-1">
          <h3 className="font-semibold">Fade</h3>
          <ReactMarques className="py-4" fade={true}>
            {testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={i}
                name={testimonial.name}
                title={testimonial.title}
                avatar={testimonial.avatar}
                content={testimonial.content}
              />
            ))}
          </ReactMarques>
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold">Code</h3>
          <Code>{codeExample1}</Code>
        </div>
        <hr className="border-stone-200" />
        <div className="space-y-1">
          <h3 className="font-semibold">Reverse direction</h3>
          <ReactMarques className="py-4" reverse={true} fade={true}>
            {testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={i}
                name={testimonial.name}
                title={testimonial.title}
                avatar={testimonial.avatar}
                content={testimonial.content}
              />
            ))}
          </ReactMarques>
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold">Code</h3>
          <Code>{codeExample2}</Code>
        </div>
        <hr className="border-stone-200" />
        <div>
          <h3 className="font-semibold">Pause on hover</h3>
          <ReactMarques pauseOnHover={true} fade={true}>
            <Logo src="https://www.vectorlogo.zone/logos/google/google-ar21.svg" />
            <Logo src="https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg" />
            <Logo src="https://www.vectorlogo.zone/logos/apple/apple-ar21.svg" />
            <Logo src="https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg" />
            <Logo src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" />
          </ReactMarques>
        </div>
        <div>
          <h3 className="font-semibold">Code</h3>
          <Code>{codeExample3}</Code>
        </div>
        <hr className="border-stone-200" />
        <div className="space-y-1">
          <h3 className="font-semibold">Vertical</h3>
          <div className="flex justify-center">
            <ReactMarques className="h-[400px]" direction="up" fade={true}>
              {testimonials.map((testimonial, i) => (
                <TestimonialCard
                  key={i}
                  name={testimonial.name}
                  title={testimonial.title}
                  avatar={testimonial.avatar}
                  content={testimonial.content}
                />
              ))}
            </ReactMarques>
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold">Code</h3>
          <Code>{codeExample4}</Code>
        </div>
        <hr className="border-stone-200" />
        <div className="space-y-1">
          <h3 className="font-semibold">Custom gap and speed</h3>
          <ReactMarques className="gap-[3rem] [--duration:5s]" innerClassName="gap-[3rem] [--gap:3rem]" fade={true}>
            <Logo src="https://www.vectorlogo.zone/logos/google/google-ar21.svg" />
            <Logo src="https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg" />
            <Logo src="https://www.vectorlogo.zone/logos/apple/apple-ar21.svg" />
            <Logo src="https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg" />
            <Logo src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" />
          </ReactMarques>
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold">Code</h3>
          <Code>{codeExample5}</Code>
        </div>
        <hr className="border-stone-200" />
        <div className="space-y-1">
          <h3 className="font-semibold">Reduced motion</h3>
          <div>Disable animation when user device prefers reduced motion.</div>
          <ReactMarques
            className="py-4 motion-reduce:overflow-auto"
            innerClassName="motion-reduce:animate-none motion-reduce:first:hidden"
          >
            {testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={i}
                name={testimonial.name}
                title={testimonial.title}
                avatar={testimonial.avatar}
                content={testimonial.content}
              />
            ))}
          </ReactMarques>
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold">Code</h3>
          <Code>{codeExample6}</Code>
        </div>
      </div>
    </div>
  );
}
