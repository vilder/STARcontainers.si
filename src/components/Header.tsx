import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';

export default function Header() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDark(isDark);

    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !dark;
    setDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { href: '/#o-nas', label: 'O nas' },
    { href: '/#kontejnerji', label: 'Kontejnerji' },
    { href: '/#prednosti', label: 'Prednosti' },
    { href: '/#mnenja', label: 'Mnenja' },
    { href: '/#kontakt', label: 'Kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/98 dark:bg-navy-800/98 backdrop-blur-md shadow-lg shadow-black/10'
          : 'bg-navy-800/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          <a href="/" className="flex items-center gap-2.5 group">
            <img src="/logo_starcontainers.png" alt="STAR Containers" className="h-16 w-auto" />
            <span className={`hidden sm:block font-black text-xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
              STAR <span className="text-orange-500">CONTAINERS</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold hover:text-orange-500 transition-colors relative group ${scrolled ? 'text-gray-700 dark:text-white/90' : 'text-white/90'}`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all hover:text-orange-500 ${scrolled ? 'text-gray-600 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/10' : 'text-white/80 hover:bg-white/10'}`}
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>

            <a
              href="/#kontakt"
              className="hidden lg:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
            >
              Povpraševanje
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              className={`lg:hidden w-9 h-9 flex items-center justify-center transition-colors ${scrolled ? 'text-gray-700 dark:text-white' : 'text-white'}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-navy-700 border-t border-navy-600 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 px-4 text-sm font-semibold text-white/80 hover:text-orange-400 hover:bg-white/10 rounded-lg transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#kontakt"
            onClick={() => setMenuOpen(false)}
            className="block mt-2 bg-orange-500 text-white text-sm font-semibold px-4 py-3 rounded-lg text-center hover:bg-orange-600 transition-colors"
          >
            Povpraševanje
          </a>
        </div>
      </div>
    </header>
  );
}
