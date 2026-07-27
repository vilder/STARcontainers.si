import { Phone, Mail, MapPin } from 'lucide-react';
import { cities, keywords } from '../seoData';

export default function Footer() {
  const navLinks = [
    { href: '/#o-nas', label: 'O nas' },
    { href: '/#kontejnerji', label: 'Kontejnerji' },
    { href: '/#prednosti', label: 'Prednosti' },
    { href: '/#mnenja', label: 'Mnenja' },
    { href: '/#kontakt', label: 'Kontakt' },
  ];

  return (
    <footer className="bg-navy-900 text-gray-400 py-12 border-t border-navy-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <img src="/logo_starcontainers.png" alt="STAR Containers" className="h-10 w-auto" />
              <span className="font-black text-white transition-colors duration-300">
                STAR <span className="text-orange-500">CONTAINERS</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-gray-500">
              Direktno iz Hongkonga. Vodilni prodajalec ladijskih kontejnerjev v Sloveniji. Kakovost, zanesljivost in hitrost.
            </p>
            <a href="https://skladiscko.si/" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors">
              Obiščite skladiscko.si →
            </a>
          </div>
          <div>
            <div className="font-bold text-white text-sm mb-4">Navigacija</div>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm hover:text-orange-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href="/sitemap" className="block text-sm hover:text-orange-400 transition-colors">
                Zemljevid strani
              </a>
            </div>
          </div>
          <div>
            <div className="font-bold text-white text-sm mb-4">Kontejnerji po mestih</div>
            <div className="space-y-2">
              {cities.slice(0, 8).map((city) => (
                <a
                  key={city.slug}
                  href={`/kontejner/${city.slug}`}
                  className="block text-sm hover:text-orange-400 transition-colors"
                >
                  Kontejner {city.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="font-bold text-white text-sm mb-4">O kontejnerjih</div>
            <div className="space-y-2">
              {keywords.map((kw) => (
                <a
                  key={kw.slug}
                  href={`/${kw.slug}`}
                  className="block text-sm hover:text-orange-400 transition-colors"
                >
                  {kw.h1.split(' – ')[0]}
                </a>
              ))}
              <a href="/skladiscni-kontejner" className="block text-sm hover:text-orange-400 transition-colors">
                Skladiščni kontejner
              </a>
            </div>
            <div className="font-bold text-white text-sm mb-4 mt-6">Kontakt</div>
            <div className="space-y-3 text-sm">
              <a href="tel:+38630555001" className="flex items-center gap-2.5 hover:text-orange-400 transition-colors">
                <Phone className="w-4 h-4 text-orange-500" />
                030 555 001
              </a>
              <a href="mailto:info@starcontainers.si" className="flex items-center gap-2.5 hover:text-orange-400 transition-colors">
                <Mail className="w-4 h-4 text-orange-500" />
                info@starcontainers.si
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                Puhova ulica 12a, 2250 Ptuj, SI
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>© 2026 Star Containers d.o.o. Vse pravice pridržane.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-400 transition-colors">Politika zasebnosti</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Pogoji poslovanja</a>
            <a href="/sitemap" className="hover:text-orange-400 transition-colors">Zemljevid strani</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
