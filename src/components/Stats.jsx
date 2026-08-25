import React from 'react';
import { useLanguage } from '../i18n.jsx';

const STATS = [
  { value: '30%', key: 'stat1' },
  { value: '12+ mo', key: 'stat2' },
  { value: '0', key: 'stat3' },
  { value: '100%', key: 'stat4' },
];

export default function Stats() {
  const { t } = useLanguage();

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
            <div key={s.key}>
              <p
                style={{
                  fontFamily: "'Inter'",
                  fontWeight: 600,
                  fontSize: 'clamp(32px,3.6vw,50px)',
                  lineHeight: 1,
                  margin: '0 0 10px',
                  color: '#fff',
                }}
              >
                {s.value}
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
                {t(s.key)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
