'use client';

import React, { useState } from 'react';

export interface AccordionItem {
  question: string;
  answer: string;
  relatedLink?: { href: string; label: string };
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  theme?: 'paper' | 'forest';
}

export default function Accordion({ items, className = '', theme = 'paper' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  const isForest = theme === 'forest';

  return (
    <div className={`w-full divide-y divide-mist ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div key={idx} className="py-5 first:pt-0 last:pb-0">
            <button
              type="button"
              onClick={() => toggleItem(idx)}
              className="w-full text-left flex items-start justify-between gap-6 group cursor-pointer"
              aria-expanded={isOpen}
            >
              <span
                className={`font-display text-17 md:text-21 transition-colors ${
                  isForest
                    ? 'text-paper group-hover:text-lime'
                    : 'text-forest-ink group-hover:text-forest'
                }`}
              >
                {item.question}
              </span>

              {/* Rotating hairline cross indicator */}
              <span
                className={`relative flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ease-nova-ease ${
                  isOpen ? 'rotate-45' : 'rotate-0'
                }`}
                aria-hidden="true"
              >
                <span
                  className={`absolute w-4 h-[1px] ${
                    isForest ? 'bg-paper' : 'bg-forest-ink'
                  }`}
                />
                <span
                  className={`absolute h-4 w-[1px] ${
                    isForest ? 'bg-paper' : 'bg-forest-ink'
                  }`}
                />
              </span>
            </button>

            {/* Answer Content */}
            <div
              className={`grid transition-all duration-400 ease-nova-ease overflow-hidden ${
                isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
              }`}
            >
              <div className="min-h-0">
                <p
                  className={`font-body text-15 md:text-17 leading-relaxed ${
                    isForest ? 'text-paper/80' : 'text-forest-ink/80'
                  }`}
                >
                  {item.answer}
                </p>

                {item.relatedLink && (
                  <div className="mt-4 pt-3 border-t border-mist/40">
                    <a
                      href={item.relatedLink.href}
                      className={`font-body text-13 underline underline-offset-4 ${
                        isForest
                          ? 'text-lime hover:text-paper'
                          : 'text-forest hover:text-forest-light'
                      }`}
                    >
                      {item.relatedLink.label}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
