import { Hero } from './components/hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'React Marquee',
  description: 'A Beautiful Marquee component for Reactjs ✨',
  openGraph: {
    title: 'React Marquee',
    description: 'A Beautiful Marquee component for Reactjs ✨',
    url: 'https://react-marques.vercel.app/',
    siteName: 'React Marquee',
    locale: 'en-US',
    type: 'website',
  },
  themeColor: '#000000',
};

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
