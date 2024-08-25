import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-6">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-3xl font-founder font-bold text-beige hover:text-orange transition-colors">
          Bihub
        </Link>
        <ul className="hidden md:flex space-x-8">
          {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <li key={item}>
              <Link href={`/${item.toLowerCase()}`} className="text-beige hover:text-orange transition-colors text-lg">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;