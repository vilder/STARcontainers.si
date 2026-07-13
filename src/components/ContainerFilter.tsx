import { useState } from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';

const containers = [
  {
    id: 1,
    name: '10ft Standard',
    size: '10 čevljev',
    dimensions: '3.05m × 2.44m × 2.59m',
    capacity: '14 m³',
    price: '1.790',
    image: '/photos/10ft.webp',
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
    image: '/photos/skladiscko-20ft-standard.webp',
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
    image: '/photos/skladiscko-40ft-standard.webp',
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
    image: '/photos/skladiscko-20ft-hc.webp',
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
    image: '/photos/solidbox-40ft-hc.webp',
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
    image: '/photos/reefer-3.webp',
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
    image: '/photos/reefer-2.webp',
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
    image: '/photos/rabljen-20ft-main.webp',
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
    image: '/photos/rabljen-40ft-main.webp',
    features: ['Funkcionalnost jamčena', 'Vodoodporen', 'Protivlomna vrata', 'Certificiran'],
    badge: 'Rabljeni',
  },
];

const filters = ['Vsi', 'Standard', 'High Cube', 'Refrigerated', 'Rabljeni'];

export default function ContainerFilter() {
  const [activeFilter, setActiveFilter] = useState('Vsi');

  const filteredContainers = containers.filter((c) => {
    if (activeFilter === 'Vsi') return true;
    if (activeFilter === 'Standard') return c.name.includes('Standard');
    if (activeFilter === 'High Cube') return c.name.includes('High Cube');
    if (activeFilter === 'Refrigerated') return c.name.includes('Refrigerated');
    if (activeFilter === 'Rabljeni') return c.name.includes('Rabljeni');
    return true;
  });

  return (
    <>
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredContainers.map((container) => (
          <div
            key={container.id}
            className="group bg-white dark:bg-navy-700/40 dark:backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-navy-600/50 hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/15 transition-all duration-300 hover:-translate-y-2 animate-fade-in"
          >
            <div className="relative overflow-hidden aspect-[16/9]">
              <img
                src={container.image}
                alt={container.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
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
    </>
  );
}
