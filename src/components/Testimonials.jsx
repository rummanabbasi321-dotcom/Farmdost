import React from 'react';
import { useLanguage } from '../i18n.jsx';

const QUOTES = [
  { qKey: 't1q', cKey: 't1c' },
  { qKey: 't2q', cKey: 't2c' },
  { qKey: 't3q', cKey: 't3c' },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(40px,5vw,72px) clamp(20px,5vw,64px)' }}>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 11,
          fontSize: 13,
          letterSpacing: '.06em',
          textTransform: 'uppercase',
          color: 'var(--color-accent)',
          marginBottom: 26,
        }}
      >
        <span style={{ width: 36, height: 1, background: 'var(--color-accent)', display: 'inline-block' }} />
        <span>{t('test_kicker')}</span>
      </span>
      <div className="fd-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
        {QUOTES.map(({ qKey, cKey }) => (
          <figure className="card" style={{ padding: 24, margin: 0 }} key={qKey}>
            <blockquote style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: 17, lineHeight: 1.5, margin: '0 0 16px' }}>
              {t(qKey)}
            </blockquote>
            <figcaption style={{ fontSize: 13, color: 'color-mix(in srgb,var(--color-text) 58%,transparent)' }}>
              {t(cKey)}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
