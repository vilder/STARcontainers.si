import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { cities, keywords } from './seoData';
import { ChevronRight } from 'lucide-react';

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Helmet>
        <title>Zemljevid strani – Sitemap | STAR Containers</title>
        <meta name="description" content="Zemljevid strani STAR Containers. Vse strani o ladijskih kontejnerjih, cenah, mestih in tipih." />
      </Helmet>

      <header className="bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/logo_starcontainers.png" alt="STAR Containers" className="h-8 w-auto" />
              <span className="hidden sm:block font-black text-lg transition-colors duration-300 text-gray-900 dark:text-white">
                STAR <span className="text-orange-500">CONTAINERS</span>
              </span>
            </Link>
            <Link to="/" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">
              Nazaj na domačo stran
            </Link>
          </div>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-black mb-10">Zemljevid strani</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Main pages */}
            <div>
              <h2 className="text-lg font-bold mb-4 text-orange-500">Glavne strani</h2>
              <div className="space-y-2">
                <Link to="/" className="flex items-center gap-2 text-sm hover:text-orange-500 transition-colors">
                  <ChevronRight className="w-3 h-3 text-orange-500" /> Domov
                </Link>
                <a href="/#kontejnerji" className="flex items-center gap-2 text-sm hover:text-orange-500 transition-colors">
                  <ChevronRight className="w-3 h-3 text-orange-500" /> Kontejnerji
                </a>
                <a href="/#prednosti" className="flex items-center gap-2 text-sm hover:text-orange-500 transition-colors">
                  <ChevronRight className="w-3 h-3 text-orange-500" /> Prednosti
                </a>
                <a href="/#mnenja" className="flex items-center gap-2 text-sm hover:text-orange-500 transition-colors">
                  <ChevronRight className="w-3 h-3 text-orange-500" /> Mnenja strank
                </a>
                <a href="/#kontakt" className="flex items-center gap-2 text-sm hover:text-orange-500 transition-colors">
                  <ChevronRight className="w-3 h-3 text-orange-500" /> Kontakt
                </a>
              </div>
            </div>

            {/* City pages */}
            <div>
              <h2 className="text-lg font-bold mb-4 text-orange-500">Kontejnerji po mestih</h2>
              <div className="space-y-2">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    to={`/kontejner/${city.slug}`}
                    className="flex items-center gap-2 text-sm hover:text-orange-500 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-orange-500" />
                    Kontejner {city.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Keyword pages */}
            <div>
              <h2 className="text-lg font-bold mb-4 text-orange-500">O kontejnerjih</h2>
              <div className="space-y-2">
                {keywords.map((kw) => (
                  <Link
                    key={kw.slug}
                    to={`/${kw.slug}`}
                    className="flex items-center gap-2 text-sm hover:text-orange-500 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-orange-500" />
                    {kw.h1.split(' – ')[0]}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 dark:bg-navy-950 text-gray-400 py-8 border-t border-navy-800/50 dark:border-navy-800">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-gray-600">
          <div className="mb-3">
            <a href="https://skladiscko.si/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors font-semibold">
              Obiščite skladiscko.si →
            </a>
          </div>
          &copy; 2026 STAR Containers d.o.o.
        </div>
      </footer>
    </div>
  );
}
