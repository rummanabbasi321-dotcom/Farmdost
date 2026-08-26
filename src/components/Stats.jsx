import React from 'react';
import { useLanguage } from '../i18n.jsx';

const STATS = [
  { valueKey: 'stat1v', labelKey: 'stat1' },
  { valueKey: 'stat2v', labelKey: 'stat2' },
  { valueKey: 'stat3v', labelKey: 'stat3' },
  { valueKey: 'stat4v', labelKey: 'stat4' },
];

export default function Stats() {
  const { t, lang } = useLanguage();

  return (
    <section
      aria-label="Why hermetic storage"
      style={{
        background:
          'radial-gradient(900px 420px at 85% -40%, color-mix(in srgb,var(--color-section-glow) 60%,transparent), transparent 64%), var(--color-section)',
        margin: '16px 0',
      }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(36px,4.5vw,60px) clamp(20px,5vw,64px)' }}>
        <div className="fd-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '28px 24px' }}>
          {STATS.map((s) => (
            <div key={s.labelKey}>
              <p
                className={lang === 'ur' ? undefined : 'fd-latin'}
                style={{
                  fontFamily: lang === 'ur' ? 'var(--font-urdu)' : 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: 'clamp(32px,3.6vw,50px)',
                  lineHeight: 1,
                  margin: '0 0 10px',
                  color: '#fff',
                  direction: lang === 'ur' ? 'rtl' : 'ltr',
                }}
              >
                {t(s.valueKey)}
              </p>
              <p
                style={{
                  fontSize: 12.5,
                  letterSpacing: '.05em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,.74)',
                  margin: 0,
                }}
              >
                {t(s.labelKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
