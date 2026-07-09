import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItemProps {
  q: string;
  a: string;
}

export default function FaqItem({ q, a }: FaqItemProps) {
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
        <div className="px-5 pb-5 bg-white dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-4 animate-fade-in">
          {a}
        </div>
      )}
    </div>
  );
}
