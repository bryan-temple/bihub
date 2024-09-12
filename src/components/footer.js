import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-navy/80 backdrop-blur-sm py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-orange mb-4">Bihub Technology</h2>
            <p>Innovative and accessible web solutions for forward-thinking businesses.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-orange mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="hover:text-orange transition duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-orange mb-4">Contact Us</h3>
            <p>Email: info@bihub.tech</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Tech Street, Innovation City, IN 12345</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-beige/20 text-center">
          <p>&copy; {new Date().getFullYear()} Bihub Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;