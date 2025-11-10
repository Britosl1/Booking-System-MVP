import Link from 'next/link';

export default function Navigation() {
  const navItems = [
    { label: 'Luxury Beauty Spa', href: '/luxury-beauty-spa' },
    { label: 'Radiant Glow Studio', href: '/radiant-glow-studio' },
    { label: 'Serenity Wellness Center', href: '/serenity-wellness-center' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-[#171717] backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-white hover:opacity-80 transition-opacity">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-[#F39AB3] to-[#e09148]">
            <span className="text-sm font-bold text-white">BS</span>
          </div>
          <span className="hidden sm:inline">Booking System</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-6 bg-white rounded"></span>
          <span className="h-0.5 w-6 bg-white rounded"></span>
          <span className="h-0.5 w-6 bg-white rounded"></span>
        </button>
      </nav>
    </header>
  );
}
