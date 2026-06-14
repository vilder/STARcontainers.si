import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { cities, keywords } from './seoData';
import {
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  Star,
  Shield,
  Truck,
  Package,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Container,
  Layers,
  Award,
  Clock,
  ChevronRight,
  Send,
  Globe,
} from 'lucide-react';

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Takoj preveri, ali je element v viewportu (pomembno za hero sekcijo)
    const rect = element.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (isInViewport) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const containers = [
  {
    id: 1,
    name: '10ft Standard',
    size: '10 čevljev',
    dimensions: '3.05m × 2.44m × 2.59m',
    capacity: '14 m³',
    price: '1.790',
    image: '/photos/10ft.jpg',
    features: ['Protipožarna zaščita', 'Vodoodporen', 'Protivlomna vrata', 'Certificiran'],
    badge: null,
  },
  {
    id: 2,
    name: '20ft Standard',
    size: '20 čevljev',
    dimensions: '6.06m × 2.44m × 2.59m',
    capacity: '33 m³',
    price: '1.990',
    image: 'https://skladiscko.si/assets/20antracit-C8dMsk9V.jpg',
    features: ['Protipožarna zaščita', 'Vodoodporen', 'Protivlomna vrata', 'Certificiran'],
    badge: 'Najbolj priljubljen',
  },
  {
    id: 3,
    name: '40ft Standard',
    size: '40 čevljev',
    dimensions: '12.19m × 2.44m × 2.59m',
    capacity: '67 m³',
    price: '2.700',
    image: 'https://skladiscko.si/assets/40antracit-UFC3hngh.jpg',
    features: ['Protipožarna zaščita', 'Vodoodporen', 'Protivlomna vrata', 'Certificiran'],
    badge: null,
  },
  {
    id: 4,
    name: '20ft High Cube',
    size: '20 čevljev HC',
    dimensions: '6.06m × 2.44m × 2.90m',
    capacity: '37 m³',
    price: '2.490',
    image: 'https://skladiscko.si/assets/hc20-CasG8jl-.webp',
    features: ['Večja višina', 'Vodoodporen', 'Protivlomna vrata', 'Certificiran'],
    badge: 'Nova zaloga',
  },
  {
    id: 5,
    name: '40ft High Cube',
    size: '40 čevljev HC',
    dimensions: '12.19m × 2.44m × 2.90m',
    capacity: '76 m³',
    price: '2.790',
    image: 'https://solidboxcontainer.com/cdn/shop/files/WechatIMG304_46fd1337-9833-46ec-b8b8-ac7c9291e58e.jpg?v=1687164185&width=1946',
    features: ['Največja kapaciteta', 'Vodoodporen', 'Protivlomna vrata', 'Certificiran'],
    badge: null,
  },
  {
    id: 6,
    name: 'Refrigerated 20ft',
    size: '20 čevljev REF',
    dimensions: '6.06m × 2.44m × 2.59m',
    capacity: '28 m³',
    price: '6.990',
    image: '/photos/reefer-3.jpg',
    features: ['Hlajenje -25°C', 'Vodoodporen', 'Protivlomna vrata', 'Certificiran'],
    badge: 'Premium',
  },
  {
    id: 7,
    name: 'Refrigerated 40ft HC',
    size: '40 čevljev REF HC',
    dimensions: '12.19m × 2.44m × 2.90m',
    capacity: '67 m³',
    price: '9.900',
    image: '/photos/reefer-2.jpg',
    features: ['Hlajenje -25°C', 'High Cube višina', 'Protivlomna vrata', 'Certificiran'],
    badge: 'Premium Plus',
  },
  {
    id: 8,
    name: 'Rabljeni 20ft',
    size: '20 čevljev (rabljeni)',
    dimensions: '6.06m × 2.44m × 2.59m',
    capacity: '33 m³',
    price: '1.490',
    image: '/photos/rabljen-20ft-main.jpg',
    features: ['Funkcionalno brezhibni', 'Vodoodporen', 'Protivlomna vrata', 'Certificiran'],
    badge: 'Rabljeni',
  },
  {
    id: 9,
    name: 'Rabljeni 40ft HC',
    size: '40 čevljev HC (rabljeni)',
    dimensions: '12.19m × 2.44m × 2.90m',
    capacity: '76 m³',
    price: '2.190',
    image: '/photos/rabljen-40ft-main.jpg',
    features: ['Funkcionalnost jamčena', 'Vodoodporen', 'Protivlomna vrata', 'Certificiran'],
    badge: 'Rabljeni',
  },
];

const stats = [
  { value: '500+', label: 'Kontejnerjev v zalogi', icon: Container },
  { value: '12+', label: 'Let izkušenj', icon: Award },
  { value: '1.200+', label: 'Zadovoljnih strank', icon: Star },
  { value: '48h', label: 'Dostava po Sloveniji', icon: Clock },
];

const features = [
  {
    icon: Shield,
    title: 'Certificirani in preverjeni',
    desc: 'Vsi naši kontejnerji so certificirani po mednarodnih standardih ISO in pregledani pred dostavo.',
  },
  {
    icon: Truck,
    title: 'Dostava po vsej Sloveniji',
    desc: 'Zagotavljamo hitro in zanesljivo dostavo v roku 48 ur na vsak naslov v Sloveniji.',
  },
  {
    icon: Layers,
    title: 'Široka ponudba',
    desc: 'Od standardnih do hladilnih kontejnerjev – imamo rešitev za vsako potrebo.',
  },
  {
    icon: Package,
    title: 'Prilagojene rešitve',
    desc: 'Kontejnerje lahko prilagodimo vašim potrebam – predelave, odprtine, barve in več.',
  },
];

const testimonials = [
  {
    name: 'Marko Horvat',
    company: 'Horvat Logistika d.o.o.',
    text: 'Star Containers so nam zagotovili odlične kontejnerje za naše logistično središče. Kakovost je izjemna, dostava pa je bila točna do ure.',
    rating: 5,
    avatar: 'MH',
  },
  {
    name: 'Ana Kovač',
    company: 'Kovač Gradnje',
    text: 'Že tretjič naročamo pri Star Containers. Vsakič odlična izkušnja – profesionalna ekipa, vrhunski kontejnerji in super cene.',
    rating: 5,
    avatar: 'AK',
  },
  {
    name: 'Luka Novak',
    company: 'Novak Trade',
    text: 'Hladilni kontejner smo potrebovali urgentno. Star Containers so ga dostavili v 24 urah. Izjemna storitev!',
    rating: 5,
    avatar: 'LN',
  },
];

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Vsi');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const heroSection = useInView(0.1);
  const statsSection = useInView(0.2);
  const aboutSection = useInView(0.1);
  const featuresSection = useInView(0.1);
  const productsSection = useInView(0.1);
  const testimonialsSection = useInView(0.1);
  const contactSection = useInView(0.1);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filters = ['Vsi', 'Standard', 'High Cube', 'Refrigerated', 'Rabljeni'];

  const filteredContainers = containers.filter((c) => {
    if (activeFilter === 'Vsi') return true;
    if (activeFilter === 'Standard') return c.name.includes('Standard');
    if (activeFilter === 'High Cube') return c.name.includes('High Cube');
    if (activeFilter === 'Refrigerated') return c.name.includes('Refrigerated');
    if (activeFilter === 'Rabljeni') return c.name.includes('Rabljeni');
    return true;
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await fetch('https://skladiscko.si/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const navLinks = [
    { href: '#o-nas', label: 'O nas' },
    { href: '#kontejnerji', label: 'Kontejnerji' },
    { href: '#prednosti', label: 'Prednosti' },
    { href: '#mnenja', label: 'Mnenja' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 text-gray-900 dark:text-white overflow-x-hidden">
      <Helmet>
        <title>STAR Containers – Ladijski kontejnerji za prodajo po Sloveniji</title>
        <meta name="description" content="Vodilni prodajalec ladijskih kontejnerjev v Sloveniji. 10ft, 20ft, 40ft, High Cube, hladilni kontejnerji. Dostava 48h. Brezplačno povpraševanje." />
        <link rel="canonical" href="https://starcontainers.si" />
      </Helmet>

      {/* NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/98 dark:bg-navy-800/98 backdrop-blur-md shadow-lg shadow-black/10'
            : 'bg-navy-800/60 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">
            <a href="#" className="flex items-center gap-2.5 group">
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
                onClick={() => setDark(!dark)}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all hover:text-orange-500 ${scrolled ? 'text-gray-600 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/10' : 'text-white/80 hover:bg-white/10'}`}
                aria-label="Toggle dark mode"
              >
                {dark ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
              </button>

              <a
                href="#kontakt"
                className="hidden lg:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
              >
                Povpraševanje
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                className={`lg:hidden w-9 h-9 flex items-center justify-center transition-colors ${scrolled ? 'text-gray-700 dark:text-white' : 'text-white'}`}
                onClick={() => setMenuOpen(!menuOpen)}
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
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 bg-orange-500 text-white text-sm font-semibold px-4 py-3 rounded-lg text-center hover:bg-orange-600 transition-colors"
            >
              Povpraševanje
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Containers"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-800/95 via-navy-700/80 to-navy-800/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
        </div>

        {/* Accent lines */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-orange-500 via-orange-400 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

        <div
          ref={heroSection.ref}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
        >
          <div className="max-w-2xl">
            <div
              className={`inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 ${
                heroSection.inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            >
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
              Direktno iz Hongkonga • Vodilni prodajalec v Sloveniji
            </div>

            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 ${
                heroSection.inView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
              }`}
            >
              Kontejnerji <br />
              <span className="text-orange-500">brez kompromisov</span>
            </h1>

            <p
              className={`text-lg text-gray-300 leading-relaxed mb-10 max-w-lg ${
                heroSection.inView ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'
              }`}
            >
              Certificirani kontejnerji direktno iz Hongkonga brez posrednikov. Dostava po vsej Sloveniji v 48 urah.
              Kakovost, ki traja leta.
            </p>

            <div
              className={`flex flex-wrap gap-4 ${
                heroSection.inView ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'
              }`}
            >
              <a
                href="#kontejnerji"
                className="group flex items-center gap-2.5 bg-orange-500 hover:bg-orange-400 text-white font-bold px-7 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-1"
              >
                Oglej si ponudbo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#kontakt"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold px-7 py-4 rounded-full transition-all duration-300 hover:-translate-y-1"
              >
                Brezplačno povpraševanje
              </a>
            </div>

            <div
              className={`flex items-center gap-6 mt-12 pt-10 border-t border-white/10 ${
                heroSection.inView ? 'animate-fade-in-up animation-delay-800' : 'opacity-0'
              }`}
            >
              <div className="text-center">
                <div className="text-3xl font-black text-orange-400">500+</div>
                <div className="text-xs text-gray-400 mt-0.5">Kontejnerjev</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-black text-orange-400">12+</div>
                <div className="text-xs text-gray-400 mt-0.5">Let izkušenj</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-black text-orange-400">48h</div>
                <div className="text-xs text-gray-400 mt-0.5">Dostava</div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#o-nas"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-orange-400 transition-colors flex flex-col items-center gap-2 animate-bounce"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Razišči</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </section>

      {/* ABOUT */}
      <section id="o-nas" className="py-24 bg-white dark:bg-navy-800/30 border-b border-gray-100 dark:border-navy-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div ref={aboutSection.ref}>
              <span
                className={`inline-block text-orange-500 font-semibold text-sm tracking-widest uppercase mb-4 ${
                  aboutSection.inView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
              >
                O podjetju
              </span>
              <h2
                className={`text-4xl lg:text-5xl font-black leading-tight mb-6 ${
                  aboutSection.inView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
                }`}
              >
                Vaš zaupanja vreden{' '}
                <span className="text-orange-500">partner za kontejnerje</span>
              </h2>
              <p
                className={`text-gray-600 dark:text-gray-400 leading-relaxed mb-6 ${
                  aboutSection.inView ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'
                }`}
              >
                Star Containers je slovensko podjetje z več kot 12-letnimi izkušnjami na področju
                prodaje in dostave ladijskih kontejnerjev. Naša misija je zagotoviti visokokakovostne
                kontejnerje po konkurenčnih cenah z izjemno storitvijo.
              </p>
              <p
                className={`text-gray-600 dark:text-gray-400 leading-relaxed mb-8 ${
                  aboutSection.inView ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'
                }`}
              >
                Specializiramo se za prodajo standardnih, High Cube in hladilnih kontejnerjev, pridobljenih direktno iz Hongkonga brez posrednikov,
                ki jih dostavljamo po vsej Sloveniji in regiji. Vsak kontejner je pregledan,
                certificiran in pripravljen za takojšnjo uporabo. Naša prednost je direktna nabava iz Hongkonga, kar pomeni nižje cene in boljšo kakovost.
              </p>
              <div
                className={`flex flex-wrap gap-3 ${
                  aboutSection.inView ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'
                }`}
              >
                {['ISO certificirani', 'Dostava 48h', 'Prilagoditve po meri', 'Garancija kakovosti'].map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 text-sm font-semibold text-orange-700 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900/50 px-4 py-1.5 rounded-full"
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Container yard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white rounded-2xl p-6 shadow-xl shadow-orange-500/30">
                <div className="text-3xl font-black">1.200+</div>
                <div className="text-sm font-medium text-orange-100 mt-0.5">Zadovoljnih strank</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-xl px-5 py-3 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <div className="text-xs font-semibold text-gray-600 dark:text-gray-300 mt-1">Ocena 5.0 / 5.0</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-navy-800 dark:bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-64 bg-orange-600 rounded-full blur-3xl" />
        </div>
        <div
          ref={statsSection.ref}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center group ${
                  statsSection.inView ? `animate-fade-in-up` : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 bg-orange-500/15 border border-orange-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/25 group-hover:border-orange-500/50 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-orange-400" />
                </div>
                <div className="text-4xl lg:text-5xl font-black text-white">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium mt-1.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="kontejnerji" className="py-24 bg-white dark:bg-navy-800/20 border-b border-gray-100 dark:border-navy-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-orange-500 font-semibold text-sm tracking-widest uppercase mb-4">
              Naša ponudba
            </span>
            <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-4">
              Izberite <span className="text-orange-500">pravi kontejner</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Vsi kontejnerji so pregledani, certificirani in takoj dostopni.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61590607888405"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 mt-5 bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold px-6 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Aktualna zaloga na Facebooku
            </a>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-orange-300 hover:text-orange-500'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div ref={productsSection.ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredContainers.map((container, i) => (
              <div
                key={container.id}
                className={`group bg-white dark:bg-navy-700/40 dark:backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-navy-600/50 hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/15 transition-all duration-300 hover:-translate-y-2 ${
                  productsSection.inView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={container.image}
                    alt={container.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {container.badge && (
                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {container.badge}
                    </span>
                  )}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-white font-black text-xl">{container.name}</div>
                    <div className="text-gray-300 text-xs mt-0.5">{container.dimensions}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Prostornina</div>
                      <div className="text-lg font-bold">{container.capacity}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Cena od (brez DDV)</div>
                      <div className="text-2xl font-black text-orange-500">€{container.price}</div>
                    </div>
                  </div>
                  <div className="space-y-1.5 mb-5">
                    {container.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <a
                    href="#kontakt"
                    className="group/btn w-full flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-orange-500 dark:hover:bg-orange-500 dark:hover:text-white font-bold py-3 rounded-xl transition-all duration-300"
                  >
                    Povpraševanje
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RAL COLOR PALETTE */}
      <section className="py-20 bg-gray-50 dark:bg-navy-900/40 border-b border-gray-100 dark:border-navy-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-orange-500 font-semibold text-sm tracking-widest uppercase mb-4">
              Prilagoditve
            </span>
            <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-4">
              Izberite svojo <span className="text-orange-500">barvo RAL</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Kontejnerje lakiramo po vašem izboru. Spodaj so najpogostejše barve RAL – na voljo je celoten RAL vzorčnik.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
            {[
              { ral: 'RAL 9010', name: 'Bela', hex: '#F4F4F4', light: true },
              { ral: 'RAL 9016', name: 'Prometna bela', hex: '#F6F6F6', light: true },
              { ral: 'RAL 9002', name: 'Sivo bela', hex: '#E7E0D4', light: true },
              { ral: 'RAL 7035', name: 'Svetlo siva', hex: '#D7D7D7', light: true },
              { ral: 'RAL 7042', name: 'Prometna siva', hex: '#8F9695', light: false },
              { ral: 'RAL 7016', name: 'Antracit', hex: '#293133', light: false },
              { ral: 'RAL 9005', name: 'Črna', hex: '#0A0A0A', light: false },
              { ral: 'RAL 1015', name: 'Svetla slonovina', hex: '#E6D690', light: true },
              { ral: 'RAL 1003', name: 'Signalno rumena', hex: '#F9A800', light: true },
              { ral: 'RAL 1007', name: 'Narcisno rumena', hex: '#E5AC00', light: true },
              { ral: 'RAL 2000', name: 'Rumeno oranžna', hex: '#ED760E', light: false },
              { ral: 'RAL 2004', name: 'Čista oranžna', hex: '#F44611', light: false },
              { ral: 'RAL 3000', name: 'Ognjeno rdeča', hex: '#AF2B1E', light: false },
              { ral: 'RAL 3002', name: 'Karmin rdeča', hex: '#A52019', light: false },
              { ral: 'RAL 3020', name: 'Prometna rdeča', hex: '#CC0500', light: false },
              { ral: 'RAL 3031', name: 'Orient rdeča', hex: '#763C28', light: false },
              { ral: 'RAL 4003', name: 'Reseda vijolična', hex: '#8D1D82', light: false },
              { ral: 'RAL 5002', name: 'Ultramarin modra', hex: '#20214F', light: false },
              { ral: 'RAL 5010', name: 'Encijan modra', hex: '#0E4472', light: false },
              { ral: 'RAL 5013', name: 'Kobalt modra', hex: '#1D1E33', light: false },
              { ral: 'RAL 5015', name: 'Nebeško modra', hex: '#2271B3', light: false },
              { ral: 'RAL 5024', name: 'Pastelno modra', hex: '#5D9B9B', light: false },
              { ral: 'RAL 6005', name: 'Mah zelena', hex: '#2F4538', light: false },
              { ral: 'RAL 6011', name: 'Reseda zelena', hex: '#587246', light: false },
              { ral: 'RAL 6018', name: 'Rumeno zelena', hex: '#57A639', light: false },
              { ral: 'RAL 6029', name: 'Mint zelena', hex: '#1E5945', light: false },
              { ral: 'RAL 8001', name: 'Ohrovt rjava', hex: '#9E551B', light: false },
            ].map((color) => (
              <div key={color.ral} className="group flex flex-col items-center">
                <div
                  className="w-full aspect-square rounded-xl shadow-md border border-black/10 mb-2 group-hover:scale-105 group-hover:shadow-lg transition-all duration-200"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="text-center">
                  <div className="text-xs font-bold text-gray-800 dark:text-gray-200">{color.ral}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight mt-0.5">{color.name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Ne vidite želene barve? Na voljo je celoten RAL Classic vzorčnik z več kot 200 barvami.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
            >
              Povprašajte o barvah
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="prednosti" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-orange-500 font-semibold text-sm tracking-widest uppercase mb-4">
              Zakaj Star Containers
            </span>
            <h2 className="text-4xl lg:text-5xl font-black leading-tight">
              Prednosti, ki nas <span className="text-orange-500">ločijo od ostalih</span>
            </h2>
          </div>
          <div ref={featuresSection.ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`group p-7 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-orange-200 dark:hover:border-orange-900 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 hover:-translate-y-2 ${
                  featuresSection.inView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 bg-orange-50 dark:bg-orange-950/40 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-100 dark:group-hover:bg-orange-950/70 transition-colors">
                  <feature.icon className="w-5.5 h-5.5 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2.5">{feature.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTION & LOCATIONS */}
      <section className="py-20 overflow-hidden bg-gradient-to-br from-navy-50 via-white to-navy-50 dark:from-navy-800/40 dark:via-navy-800/20 dark:to-transparent border-b border-gray-100 dark:border-navy-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block text-orange-500 font-semibold text-sm tracking-widest uppercase mb-4">
                O nas
              </div>
              <h2 className="text-4xl font-black mb-6">
                Direktno iz <span className="text-orange-500">Hongkonga</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                STAR Containers nabavlja kontejnerje direktno iz Hongkonga, brez posrednikov.
                To pomeni nižje cene in boljšo kakovost za naše stranke v Sloveniji in celotni Evropi.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-950/40 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Proizvodnja Hong Kong</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Certificirani kontejnerji iz vodilnih proizvajalcev v Hongkongu.
                      Direktna nabava ohne mittelsmänner.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-950/40 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Depo Slovenija (Koper, Ptuj)</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Strateška lokacija v Ptuju za hitro dostavo po vsej Sloveniji.
                      Dostava v 48 urah.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-950/40 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Prodaja za celotno Evropo</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Poleg Slovenije poslujemo tudi z Avstrijo, Hrvasko, Italijo in drugimi evropskimi državami.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://www.starcontainers.si/images/7_How_Do_You_Make_Shipping_Containers.png"
                alt="Proizvodnja kontejnerjev"
                className="rounded-2xl shadow-2xl w-full h-auto lg:scale-125 lg:origin-left"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
                Proizvodnja kontejnerjev iz Hongkonga
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-orange-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-400 rounded-full opacity-40" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-600 rounded-full opacity-40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
            Potrebujete kontejner? <br className="hidden sm:block" />
            Pokličite nas danes!
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
            Brezplačno povpraševanje brez obveznosti. Odgovorimo v 2 urah.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+38630555001"
              className="flex items-center gap-2.5 bg-white text-orange-600 hover:bg-orange-50 font-bold px-7 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <Phone className="w-4.5 h-4.5" />
              +386 30 555 001
            </a>
            <a
              href="#kontakt"
              className="flex items-center gap-2 bg-black/20 hover:bg-black/30 backdrop-blur-sm text-white font-bold px-7 py-4 rounded-full transition-all duration-300 border border-white/20 hover:-translate-y-1"
            >
              Pošlji povpraševanje
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="mnenja" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-orange-500 font-semibold text-sm tracking-widest uppercase mb-4">
              Mnenja strank
            </span>
            <h2 className="text-4xl lg:text-5xl font-black leading-tight">
              Kaj pravijo naše <span className="text-orange-500">stranke</span>
            </h2>
          </div>
          <div ref={testimonialsSection.ref} className="grid md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`group p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-orange-200 dark:hover:border-orange-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 ${
                  testimonialsSection.inView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100 dark:border-gray-800">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="py-24 bg-navy-50 dark:bg-navy-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div ref={contactSection.ref}>
              <span
                className={`inline-block text-orange-500 font-semibold text-sm tracking-widest uppercase mb-4 ${
                  contactSection.inView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
              >
                Kontakt
              </span>
              <h2
                className={`text-4xl lg:text-5xl font-black leading-tight mb-6 ${
                  contactSection.inView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
                }`}
              >
                Stopite v <span className="text-orange-500">stik z nami</span>
              </h2>
              <p
                className={`text-gray-600 dark:text-gray-400 mb-10 leading-relaxed ${
                  contactSection.inView ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'
                }`}
              >
                Imate vprašanja o kontejnerjih ali želite prejeti ponudbo? Kontaktirajte nas –
                odgovorimo hitro in brez zapletov.
              </p>

              <div
                className={`space-y-5 ${
                  contactSection.inView ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'
                }`}
              >
                {[
                  { icon: Phone, label: 'Telefon', value: '+386 30 555 001', href: 'tel:+38630555001' },
                  { icon: Mail, label: 'E-pošta', value: 'info@starcontainers.si', href: 'mailto:info@starcontainers.si' },
                  { icon: MapPin, label: 'Naslov', value: 'Puhova ulica 12a, 2250 Ptuj, SI', href: '#' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-5 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-orange-200 dark:hover:border-orange-900 transition-all group"
                  >
                    <div className="w-11 h-11 bg-orange-50 dark:bg-orange-950/40 rounded-xl flex items-center justify-center group-hover:bg-orange-100 dark:group-hover:bg-orange-950/70 transition-colors flex-shrink-0">
                      <item.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{item.label}</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div
                className={`mt-8 p-6 bg-navy-800 dark:bg-navy-900 rounded-2xl ${
                  contactSection.inView ? 'animate-fade-in-up animation-delay-800' : 'opacity-0'
                }`}
              >
                <div className="text-sm font-bold text-white mb-3">Delovni čas</div>
                <div className="space-y-1.5 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Ponedeljek – Petek</span>
                    <span className="text-white font-medium">7:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sobota</span>
                    <span className="text-white font-medium">8:00 – 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nedelja</span>
                    <span className="text-orange-400 font-medium">Zaprto</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-8 shadow-xl shadow-gray-100/50 dark:shadow-none">
              <h3 className="text-xl font-bold mb-6">Pošljite povpraševanje</h3>
              {submitStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-50 dark:bg-green-950/40 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Sporočilo poslano!</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Odgovorili vam bomo v najkrajšem možnem času.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                        Ime in priimek *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Janez Novak"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+386 30 555 001"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                      E-pošta *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="janez@podjetje.si"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                      Vrsta kontejnerja
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-all"
                    >
                      <option value="">-- Izberite tip --</option>
                      <option>10ft Standard</option>
                      <option>20ft Standard</option>
                      <option>40ft Standard</option>
                      <option>20ft High Cube</option>
                      <option>40ft High Cube</option>
                      <option>Refrigerated 20ft</option>
                      <option>Refrigerated 40ft HC</option>
                      <option>Rabljeni kontejner</option>
                      <option>Drugo / Svetovanje</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                      Sporočilo *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Opišite kateri kontejner vas zanima, dimenzije, namen uporabe..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-all resize-none"
                    />
                  </div>
                  {submitStatus === 'error' && (
                    <div className="text-sm text-red-500 text-center bg-red-50 dark:bg-red-950/20 p-3 rounded-lg border border-red-200 dark:border-red-900/30">
                      <p className="mb-2">Napaka pri pošiljanju povpraševanja.</p>
                      <p className="text-xs">Prosimo pokličite nas na <a href="tel:+38630555001" className="font-semibold hover:underline">+386 30 555 001</a> ali napišite na <a href="mailto:info@starcontainers.si" className="font-semibold hover:underline">info@starcontainers.si</a></p>
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? 'Pošiljam...' : 'Pošlji povpraševanje'}
                    {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </button>
                  <p className="text-xs text-center text-gray-400 dark:text-gray-500">
                    Vaši podatki so varni. Odgovorili vam bomo v 2 urah.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-900 text-gray-400 py-12 border-t border-navy-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div>
              <a href="#" className="flex items-center gap-2.5 mb-4">
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
                <Link to="/sitemap" className="block text-sm hover:text-orange-400 transition-colors">
                  Zemljevid strani
                </Link>
              </div>
            </div>
            <div>
              <div className="font-bold text-white text-sm mb-4">Kontejnerji po mestih</div>
              <div className="space-y-2">
                {cities.slice(0, 8).map((city) => (
                  <Link
                    key={city.slug}
                    to={`/kontejner/${city.slug}`}
                    className="block text-sm hover:text-orange-400 transition-colors"
                  >
                    Kontejner {city.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="font-bold text-white text-sm mb-4">O kontejnerjih</div>
              <div className="space-y-2">
                {keywords.map((kw) => (
                  <Link
                    key={kw.slug}
                    to={`/${kw.slug}`}
                    className="block text-sm hover:text-orange-400 transition-colors"
                  >
                    {kw.h1.split(' – ')[0]}
                  </Link>
                ))}
              </div>
              <div className="font-bold text-white text-sm mb-4 mt-6">Kontakt</div>
              <div className="space-y-3 text-sm">
                <a href="tel:+38630555001" className="flex items-center gap-2.5 hover:text-orange-400 transition-colors">
                  <Phone className="w-4 h-4 text-orange-500" />
                  +386 30 555 001
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
            <span>© 2026 Star Containers d.o.o. Vse pravice pridrzane.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-400 transition-colors">Politika zasebnosti</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Pogoji poslovanja</a>
              <Link to="/sitemap" className="hover:text-orange-400 transition-colors">Zemljevid strani</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
