import dynamic from 'next/dynamic';
import Link from 'next/link';

const RotatingRing = dynamic(() => import('../components/RotatingRing'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-navy via-navy to-green/30">
      <div className="container mx-auto px-4 py-8">
      

        <section className="flex flex-col lg:flex-row items-center justify-between py-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-beige mb-6 leading-tight">
              Innovative Web Solutions
            </h2>
            <p className="text-xl text-beige mb-8 max-w-lg">
              Experience the future of digital technology with our accessible and cutting-edge solutions.
            </p>
            <Link href="/contact" className="btn btn-primary text-lg">
              Start Your Journey
            </Link>
          </div>
          <div className="lg:w-1/2 aspect-square relative">
            <div className="absolute inset-0 bg-gradient-radial from-green/30 to-transparent rounded-full"></div>
            <RotatingRing />
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-beige mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Web Design', 'Digital Marketing', 'Accessibility Audits'].map((service) => (
              <div key={service} className="bg-navy/50 p-6 rounded-lg backdrop-blur-sm hover:bg-navy/70 transition-colors">
                <h3 className="text-xl font-bold text-orange mb-4">{service}</h3>
                <p className="text-beige">
                  Elevate your digital presence with our expert {service.toLowerCase()} services, tailored to meet your unique needs.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}