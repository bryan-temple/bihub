import dynamic from 'next/dynamic';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Us | Bihub Technology ",
  description: "Learn about Bihub Technology's mission, values, and team",
}

const ClientAbout = dynamic(() => import('../../components/ClientAbout'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <ClientAbout />
    </div>
  );
};

export default About;