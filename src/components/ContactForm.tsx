import { useState, useRef, useEffect } from 'react';
import { Send, ArrowRight, CheckCircle } from 'lucide-react';

const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSczK4-ovMRQAvtcIOqJ5GVyukWmUNwX0Q3E5RR_Po3yw2dhqA/formResponse';
const FIELD_MAP = {
  name: 'entry.1120910962',
  email: 'entry.1384294012',
  phone: 'entry.873864525',
  service: 'entry.881419699',
  message: 'entry.1499040418',
};

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const successRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submitStatus === 'success') {
      successRef.current?.focus();
    } else if (submitStatus === 'error') {
      errorRef.current?.focus();
    }
  }, [submitStatus]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const body = new URLSearchParams();
      body.append(FIELD_MAP.name, formData.name);
      body.append(FIELD_MAP.email, formData.email);
      body.append(FIELD_MAP.phone, formData.phone);
      body.append(FIELD_MAP.service, formData.service);
      body.append(FIELD_MAP.message, formData.message);

      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-8 shadow-xl shadow-gray-100/50 dark:shadow-none">
      <h3 className="text-xl font-bold mb-6">Pošljite povpraševanje</h3>
      {submitStatus === 'success' ? (
        <div ref={successRef} role="alert" aria-live="polite" tabIndex={-1} className="flex flex-col items-center justify-center py-12 text-center outline-none">
          <div className="w-16 h-16 bg-green-50 dark:bg-green-950/40 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-500" aria-hidden="true" />
          </div>
          <h4 className="text-lg font-bold mb-2">Sporočilo poslano!</h4>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Odgovorili vam bomo v najkrajšem možnem času.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                Ime in priimek *
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                aria-required="true"
                aria-describedby="name-desc"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Janez Novak"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-all"
              />
              <span id="name-desc" className="sr-only">Vpišite svoje ime in priimek</span>
            </div>
            <div>
              <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                Telefon
              </label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                aria-describedby="phone-desc"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+386 30 555 001"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-all"
              />
              <span id="phone-desc" className="sr-only">Vpišite svojo telefonsko številko</span>
            </div>
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
              E-pošta *
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              aria-required="true"
              aria-describedby="email-desc"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="janez@podjetje.si"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-all"
            />
            <span id="email-desc" className="sr-only">Vpišite svoj e-poštni naslov</span>
          </div>
          <div>
            <label htmlFor="contact-service" className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
              Vrsta povpraševanja
            </label>
            <select
              id="contact-service"
              name="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              aria-describedby="service-desc"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-all"
            >
              <option value="">-- Izberite tip --</option>
              <option>Nakup kontejnerja</option>
              <option>Izposoja kontejnerja</option>
              <option>Prevoz kontejnerja</option>
              <option>Splošno povpraševanje</option>
            </select>
            <span id="service-desc" className="sr-only">Izberite vrsto povpraševanja</span>
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
              Sporočilo *
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              aria-required="true"
              aria-describedby="message-desc"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Opišite kateri kontejner vas zanima, dimenzije, namen uporabe..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-all resize-none"
            />
            <span id="message-desc" className="sr-only">Opišite vaše povpraševanje</span>
          </div>
          {submitStatus === 'error' && (
            <div ref={errorRef} role="alert" aria-live="assertive" tabIndex={-1} className="text-sm text-red-500 text-center bg-red-50 dark:bg-red-950/20 p-3 rounded-lg border border-red-200 dark:border-red-900/30 animate-fade-in outline-none">
              <p className="mb-2">Napaka pri pošiljanju povpraševanja.</p>
              <p className="text-xs">Prosimo pokličite nas na <a href="tel:+38630555001" className="font-semibold hover:underline">+386 30 555 001</a> ali napišite na <a href="mailto:info@starcontainers.si" className="font-semibold hover:underline">info@starcontainers.si</a></p>
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="group w-full flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
          >
            <Send className="w-4 h-4" aria-hidden="true" />
            {isSubmitting ? 'Pošiljam...' : 'Pošlji povpraševanje'}
            {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />}
          </button>
          <p className="text-xs text-center text-gray-400 dark:text-gray-500">
            Vaši podatki so varni. Odgovorili vam bomo v 2 urah.
          </p>
        </form>
      )}
    </div>
  );
}
