import { useParams, useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { keywords, cities, containerTypes } from './seoData';
import {
  ChevronRight,
  ArrowRight,
  Phone,
  CheckCircle,
  Shield,
  Truck,
  ChevronDown,
} from 'lucide-react';
import { useState } from 'react';

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <span className="font-semibold text-sm pr-4">{q}</span>
        <ChevronDown className={`w-4 h-4 text-orange-500 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 bg-white dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function SeoKeywordPage() {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const { pathname } = useLocation();
  const slug = paramSlug ?? pathname.replace(/^\//, '');
  const kw = keywords.find((k) => k.slug === slug);

  if (!kw) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Stran ni najdena</h1>
          <Link to="/" className="text-orange-500 hover:underline">Nazaj na domačo stran</Link>
        </div>
      </div>
    );
  }

  const paragraphs = kw.content.split('\n\n').filter(Boolean);

  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 text-gray-900 dark:text-white">
      <Helmet>
        <title>{kw.title}</title>
        <meta name="description" content={kw.description} />
        <meta name="keywords" content={kw.keywords.join(', ')} />
        <meta property="og:title" content={kw.title} />
        <meta property="og:description" content={kw.description} />
        <meta property="og:image" content={`https://starcontainers.si${kw.image}`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://starcontainers.si/${kw.slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": kw.h1,
          "description": kw.description,
          "image": `https://starcontainers.si${kw.image}`,
          "author": { "@type": "Organization", "name": "STAR Containers" },
          "publisher": { "@type": "Organization", "name": "STAR Containers", "url": "https://starcontainers.si" },
          "isPartOf": { "@type": "WebSite", "name": "STAR Containers", "url": "https://starcontainers.si" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": kw.faq.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        })}</script>
      </Helmet>

      {/* Nav */}
      <header className="bg-navy-700/98 backdrop-blur-md border-b border-navy-600 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/logo_starcontainers.png" alt="STAR Containers" className="h-8 w-auto" />
              <span className="hidden sm:block font-black text-lg text-white">
                STAR <span className="text-orange-500">CONTAINERS</span>
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
              <Link to="/" className="text-white hover:text-orange-400 transition-colors">Domov</Link>
              <a href="/#kontejnerji" className="text-white hover:text-orange-400 transition-colors">Kontejnerji</a>
              <a href="/#kontakt" className="text-white hover:text-orange-400 transition-colors">Kontakt</a>
            </div>
            <a href="/#kontakt" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all">
              Povpraševanje
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mb-4">
            <Link to="/" className="hover:text-orange-300 transition-colors">Domov</Link>
            <ChevronRight className="w-3 h-3" />
            <span>{kw.h1.split(' – ')[0]}</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight max-w-3xl">
            {kw.h1}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
            {kw.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#kontakt" className="group flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-7 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-1">
              Brezplačno povpraševanje
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+38630555001" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-4 rounded-full transition-all hover:-translate-y-1">
              <Phone className="w-4 h-4" />
              +386 30 555 001
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Feature image */}
              <div className="mb-8 rounded-2xl overflow-hidden aspect-[16/9] shadow-xl">
                <img
                  src={kw.image}
                  alt={kw.h1}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Intro text */}
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-base">{p}</p>
                ))}
              </div>

              {/* Price table for cena/ladijski pages */}
              {(kw.slug === 'kontejner-cena' || kw.slug === 'ladijski-kontejner') && (
                <div className="mb-10 bg-navy-50 dark:bg-navy-800/30 rounded-2xl p-6 border border-navy-100 dark:border-navy-700/30">
                  <h3 className="text-lg font-bold mb-4">Cenik kontejnerjev 2025</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left py-2.5 px-3 font-bold">Tip kontejnerja</th>
                          <th className="text-left py-2.5 px-3 font-bold hidden sm:table-cell">Kapaciteta</th>
                          <th className="text-right py-2.5 px-3 font-bold">Cena od (brez DDV)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {containerTypes.map((ct) => (
                          <tr key={ct.slug} className="border-b border-gray-100 dark:border-gray-800 hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-colors">
                            <td className="py-2.5 px-3 font-semibold">{ct.name}</td>
                            <td className="py-2.5 px-3 text-gray-500 dark:text-gray-400 hidden sm:table-cell">{ct.capacity}</td>
                            <td className="py-2.5 px-3 font-black text-orange-500 text-right text-base">€{ct.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">* Cene so brez DDV (22%). Dostava se obračuna posebej glede na lokacijo.</p>
                </div>
              )}

              {/* Sections */}
              {kw.sections.map((section, i) => (
                <div key={i} className="mb-8">
                  <h2 className="text-2xl font-black mb-4 text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{section.body}</p>
                </div>
              ))}

              {/* Quick features */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8 mb-10">
                {[
                  { icon: Truck, title: 'Dostava 48h', desc: 'Po vsej Sloveniji brez skrbi' },
                  { icon: Shield, title: 'ISO certificirani', desc: 'Pregledani pred vsako dostavo' },
                  { icon: CheckCircle, title: 'Direktno iz Hongkonga', desc: 'Brez posrednikov, nižje cene' },
                  { icon: Phone, title: 'Podpora 7 dni', desc: 'Odgovorimo v 2 urah' },
                ].map((b) => (
                  <div key={b.title} className="flex items-start gap-3 p-4 bg-navy-50 dark:bg-navy-800/30 rounded-xl border border-navy-100 dark:border-navy-700/30">
                    <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <b.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{b.title}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{b.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <div className="mt-10">
                <h2 className="text-2xl font-black mb-6">Pogosta vprašanja</h2>
                <div className="space-y-3">
                  {kw.faq.map((f, i) => (
                    <FaqItem key={i} q={f.q} a={f.a} />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact card */}
              <div className="bg-navy-700 rounded-2xl p-6">
                <h3 className="font-bold mb-2 text-white">Brezplačno povpraševanje</h3>
                <p className="text-navy-200 text-sm mb-4">Odgovorimo v 2 urah. Brez obveznosti.</p>
                <div className="space-y-3 text-sm mb-4">
                  <a href="tel:+38630555001" className="flex items-center gap-2.5 text-white/80 hover:text-orange-400 transition-colors">
                    <Phone className="w-4 h-4 text-orange-400" />
                    +386 30 555 001
                  </a>
                </div>
                <a href="/#kontakt" className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl text-center text-sm transition-colors">
                  Pošlji povpraševanje
                </a>
              </div>

              {/* City links */}
              <div className="bg-gray-50 dark:bg-navy-800/30 rounded-2xl p-6 border border-gray-100 dark:border-navy-700/30">
                <h3 className="font-bold mb-4">Kontejnerji po mestih</h3>
                <div className="space-y-1.5">
                  {cities.slice(0, 10).map((c) => (
                    <Link
                      key={c.slug}
                      to={`/kontejner/${c.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors py-1"
                    >
                      <ChevronRight className="w-3 h-3 text-orange-500 flex-shrink-0" />
                      Kontejner {c.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other keyword links */}
              <div className="bg-gray-50 dark:bg-navy-800/30 rounded-2xl p-6 border border-gray-100 dark:border-navy-700/30">
                <h3 className="font-bold mb-4">Sorodni vodniki</h3>
                <div className="space-y-1.5">
                  {keywords.filter((k) => k.slug !== kw.slug).map((k) => (
                    <Link
                      key={k.slug}
                      to={`/${k.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors py-1"
                    >
                      <ChevronRight className="w-3 h-3 text-orange-500 flex-shrink-0" />
                      {k.h1.split(' – ')[0]}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Container types */}
              <div className="bg-gray-50 dark:bg-navy-800/30 rounded-2xl p-6 border border-gray-100 dark:border-navy-700/30">
                <h3 className="font-bold mb-4">Naši kontejnerji</h3>
                <div className="space-y-2">
                  {containerTypes.slice(0, 6).map((ct) => (
                    <div key={ct.slug} className="flex items-center justify-between text-sm py-1.5 border-b border-gray-100 dark:border-gray-700 last:border-0">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{ct.name}</span>
                      <span className="text-orange-500 font-bold">€{ct.price}</span>
                    </div>
                  ))}
                </div>
                <a href="/#kontejnerji" className="mt-4 block text-sm text-orange-500 hover:text-orange-600 font-semibold transition-colors">
                  Vsi kontejnerji →
                </a>
              </div>

              {/* Facebook backlink */}
              <a
                href="https://www.facebook.com/profile.php?id=61590607888405"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-3 bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold px-5 py-4 rounded-2xl transition-all hover:shadow-lg hover:shadow-blue-500/25 group"
              >
                <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <div>
                  <div className="text-xs text-blue-200 font-medium">Facebook</div>
                  <div className="text-sm">Aktualna zaloga</div>
                </div>
                <svg className="w-4 h-4 ml-auto group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>

              {/* Skladiscko backlink */}
              <div className="bg-navy-700 rounded-2xl p-6">
                <div className="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-2">Partnerski portal</div>
                <h3 className="font-bold text-white mb-2">Iščete skladiščne rešitve?</h3>
                <p className="text-navy-200 text-sm mb-4 leading-relaxed">
                  Obiščite <strong className="text-white">skladiscko.si</strong> – portal za skladiščne prostore, kontejnerje in logistične rešitve v Sloveniji.
                </p>
                <a
                  href="https://skladiscko.si/"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-between bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors group"
                >
                  Obiščite skladiscko.si
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-400 rounded-full opacity-30" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-orange-600 rounded-full opacity-30" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-3">{kw.h1.split(' – ')[0]} – Kontaktirajte nas</h2>
          <p className="text-orange-100 mb-6">Brezplačno povpraševanje brez obveznosti. Odgovorimo v 2 urah.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#kontakt" className="flex items-center gap-2 bg-white text-orange-600 font-bold px-7 py-3.5 rounded-full hover:bg-orange-50 transition-all hover:-translate-y-0.5">
              Pošlji povpraševanje
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:+38630555001" className="flex items-center gap-2 bg-black/20 border border-white/20 text-white font-bold px-7 py-3.5 rounded-full hover:bg-black/30 transition-all hover:-translate-y-0.5">
              <Phone className="w-4 h-4" />
              +386 30 555 001
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-gray-400 py-8 border-t border-navy-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <img src="/logo_starcontainers.png" alt="STAR Containers" className="h-6 w-auto" />
              <span className="text-gray-500">&copy; 2026 STAR Containers d.o.o.</span>
            </div>
            <div className="flex gap-4">
              <a href="https://skladiscko.si/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors font-semibold">
                skladiscko.si →
              </a>
              <Link to="/" className="hover:text-orange-400 transition-colors">Domov</Link>
              <Link to="/sitemap" className="hover:text-orange-400 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
