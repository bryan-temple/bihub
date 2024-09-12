import dynamic from 'next/dynamic';
import { generateMetadata, HomePageSchema } from '@/components/Seo'

export const metadata = generateMetadata({
  title: 'Home',
  description: 'Welcome to Bihub Technology',
  canonicalUrl: 'https://www.bihub.tech',
  ogImage: 'https://www.bihub.tech/og-image.jpg',
});

const ClientLayout = dynamic(() => import('../components/ClientLayout'), { ssr: false });
const ClientSideHome = dynamic(() => import('../components/ClientSideHome'), { ssr: false });

export default function Home() {
  return (
    <ClientLayout>
       <HomePageSchema />
      <div className="min-h-screen flex flex-col justify-center">
        <ClientSideHome />
      </div>
    </ClientLayout>
  );
}