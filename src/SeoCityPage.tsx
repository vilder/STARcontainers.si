import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { cities, containerTypes } from './seoData';
import {
  MapPin,
  Phone,
  Mail,
  Truck,
  Shield,
  ChevronRight,
  ArrowRight,
  Clock,
  Star,
} from 'lucide-react';

export default function SeoCityPage() {
  const { slug } = useParams<{ slug: string }>();
  const city = cities.find((c) => c.slug === slug);

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Stran ni najdena</h1>
          <Link to="/" className="text-orange-500 hover:underline">Nazaj na domačo stran</Link>
        </div>
      </div>
    );
  }

  const otherCities = cities.filter((c) => c.slug !== city.slug).slice(0, 6);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Helmet>
        <title>Kontejner {city.name} – Ladijski kontejnerji za prodajo | STAR Containers</title>
        <meta name="description" content={`Kupite ladijski kontejner v ${city.name}. Direktno iz Hongkonga. 10ft, 20ft, 40ft, High Cube, hladilni kontejnerji. Dostava v ${city.name} v 48h. Certificirani, vodoodporni. STAR Containers.`} />
        <meta name="keywords" content={city.keywords.join(', ')} />
        <meta property="og:title" content={`Kontejner ${city.name} – Ladijski kontejnerji za prodajo | STAR Containers`} />
        <meta property="og:description" content={`Kupite ladijski kontejner v ${city.name}. Dostava 48h. Certificirani in vodoodporni.`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://starcontainers.si/kontejner/${city.slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": `Ladijski kontejner ${city.name}`,
          "description": `Ladijski kontejnerji za prodajo v ${city.name}, ${city.region}. Dostava 48h.`,
          "brand": { "@type": "Brand", "name": "STAR Containers" },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "EUR",
            "lowPrice": "1490",
            "highPrice": "4990",
            "availability": "https://schema.org/InStock"
          },
          "availableDeliveryMethod": "https://schema.org/OnSitePickup"
        })}</script>
      </Helmet>

      {/* Nav */}
      <header className="bg-navy-700 sticky top-0 z-50 shadow-lg shadow-black/20">
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
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900/30" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            {city.region} regija
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Kontejner <span className="text-orange-400">{city.name}</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
            Kupite certificirani ladijski kontejner v {city.name} z dostavo v 48 urah. {city.description.split('.')[0]}.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#kontakt" className="group flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-7 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-1">
              Povpraševanje za {city.name}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+38630555001" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-4 rounded-full transition-all hover:-translate-y-1">
              <Phone className="w-4 h-4" />
              Pokličite nas
            </a>
          </div>
          <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-2xl font-black text-orange-400">48h</div>
              <div className="text-xs text-gray-400">Dostava</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-black text-orange-400">500+</div>
              <div className="text-xs text-gray-400">V zalogi</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-black text-orange-400">ISO</div>
              <div className="text-xs text-gray-400">Certificirano</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black mb-6">
                Ladijski kontejnerji za prodajo v <span className="text-orange-500">{city.name}</span>
              </h2>
              <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                <p>{city.description}</p>
                <p>
                  Star Containers zagotavlja dostavo kontejnerjev v {city.name} in celotni {city.region} regiji v roku 48 ur.
                  Vsi kontejnerji so pregledani, ISO certificirani in pripravljeni za takojšnjo uporabo.
                </p>
                <p>
                  V {city.name} smo že dostavili več kot 100 kontejnerjev za različne namene: skladiščenje, gradbeništvo,
                  transport, kmetijstvo in adaptacije. Naše stranke v {city.name} cenijo hitrost dostave, kakovost
                  kontejnerjev in konkurenčne cene.
                </p>
              </div>

              {/* Container types table */}
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4">Cene kontejnerjev za {city.name}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 font-bold">Tip kontejnerja</th>
                        <th className="text-left py-3 px-4 font-bold">Dimenzije</th>
                        <th className="text-left py-3 px-4 font-bold">Prostornina</th>
                        <th className="text-left py-3 px-4 font-bold">Cena od (brez DDV)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {containerTypes.map((ct) => (
                        <tr key={ct.slug} className="border-b border-gray-100 dark:border-gray-800 hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-colors">
                          <td className="py-3 px-4 font-semibold">{ct.name}</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{ct.dims}</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{ct.capacity}</td>
                          <td className="py-3 px-4 font-bold text-orange-500">€{ct.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-10 grid sm:grid-cols-2 gap-5">
                {[
                  { icon: Truck, title: `Dostava v ${city.name}`, desc: 'Rok 48 ur po celotni regiji' },
                  { icon: Shield, title: 'ISO certificirani', desc: 'Vsi kontejnerji pregledani in certificirani' },
                  { icon: Clock, title: 'Hitra realizacija', desc: 'Od naročila do dostave v 2 dneh' },
                  { icon: Star, title: 'Garancija kakovosti', desc: 'Vodoodporni in strukturno brezhibni' },
                ].map((b) => (
                  <div key={b.title} className="flex items-start gap-3 p-5 bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <div className="w-10 h-10 bg-orange-100 dark:bg-orange-950/40 rounded-lg flex items-center justify-center flex-shrink-0">
                      <b.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{b.title}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{b.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact card */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                <h3 className="font-bold mb-4">Povpraševanje za {city.name}</h3>
                <div className="space-y-3 text-sm">
                  <a href="tel:+38641000000" className="flex items-center gap-2.5 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors">
                    <Phone className="w-4 h-4 text-orange-500" />
                    +386 41 000 000
                  </a>
                  <a href="mailto:info@starcontainers.si" className="flex items-center gap-2.5 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors">
                    <Mail className="w-4 h-4 text-orange-500" />
                    info@starcontainers.si
                  </a>
                  <div className="flex items-center gap-2.5 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    Puhova ulica 12a, 2250 Ptuj, SI
                  </div>
                </div>
                <a href="/#kontakt" className="mt-4 block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl text-center text-sm transition-colors">
                  Pošlji povpraševanje
                </a>
              </div>

              {/* Other cities */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                <h3 className="font-bold mb-4">Kontejnerji v drugih mestih</h3>
                <div className="space-y-2">
                  {otherCities.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/kontejner/${c.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors py-1"
                    >
                      <ChevronRight className="w-3 h-3 text-orange-500" />
                      Kontejner {c.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Keyword links */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                <h3 className="font-bold mb-4">Več o kontejnerjih</h3>
                <div className="space-y-2">
                  <Link to="/kontejner-cena" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors py-1">
                    <ChevronRight className="w-3 h-3 text-orange-500" />
                    Kontejner cena
                  </Link>
                  <Link to="/ladijski-kontejner" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors py-1">
                    <ChevronRight className="w-3 h-3 text-orange-500" />
                    Ladijski kontejner
                  </Link>
                  <Link to="/kontejner-za-skladiscenje" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors py-1">
                    <ChevronRight className="w-3 h-3 text-orange-500" />
                    Kontejner za skladiščenje
                  </Link>
                </div>
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

      {/* FAQ */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black mb-8 text-center">
            Pogosta vprašanja – Kontejner {city.name}
          </h2>
          {[
            {
              q: `Kako hitro lahko dostavite kontejner v ${city.name}?`,
              a: `Dostava kontejnerja v ${city.name} je običajno v roku 48 ur od potrditve naročila. Za nujne primere nudimo hitro dostavo v 24 urah, kadar je kontejner na zalogi.`,
            },
            {
              q: `Katere velikosti kontejnerjev imate na zalogi za ${city.name}?`,
              a: `Na zalogi imamo 10ft, 20ft, 40ft standardne kontejnerje, High Cube (HC) različice in hladilne kontejnerje. Vse velikosti so takoj dostopne za dostavo v ${city.name}.`,
            },
            {
              q: `Ali potrebujem gradbeno dovoljenje za postavitev kontejnerja v ${city.name}?`,
              a: `Za začasno postavitev kontejnerja (do 12 mesecev) običajno ni potrebno gradbeno dovoljenje. Priporočamo, da preverite lokalne predpise v občini ${city.name}.`,
            },
            {
              q: `Kakšna je cena dostave kontejnerja v ${city.name}?`,
              a: `Cena dostave je vključena v končno ponudbo in se razlikuje glede na lokacijo in velikost kontejnerja. Kontaktirajte nas za točno ponudbo za ${city.name}.`,
            },
          ].map((faq, i) => (
            <div key={i} className="mb-6 p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
              <h3 className="font-bold mb-2">{faq.q}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-400 rounded-full opacity-30" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-3">
            Potrebujete kontejner v {city.name}?
          </h2>
          <p className="text-orange-100 mb-6">
            Kontaktirajte nas za brezplačno ponudbo. Odgovorimo v 2 urah.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#kontakt" className="flex items-center gap-2 bg-white text-orange-600 font-bold px-7 py-3.5 rounded-full hover:bg-orange-50 transition-all hover:-translate-y-0.5">
              Pošlji povpraševanje
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:+38641000000" className="flex items-center gap-2 bg-black/20 border border-white/20 text-white font-bold px-7 py-3.5 rounded-full hover:bg-black/30 transition-all hover:-translate-y-0.5">
              <Phone className="w-4 h-4" />
              +386 41 000 000
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-gray-400 py-8 border-t border-navy-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-600">
          <div className="mb-3">
            <a href="https://skladiscko.si/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors font-semibold">
              Obiščite skladiscko.si →
            </a>
          </div>
          &copy; 2026 STAR Containers d.o.o. Vse pravice pridržane.
        </div>
      </footer>
    </div>
  );
}
