import React from 'react';
import { useLanguage } from '../i18n.jsx';

const CROPS = [
  { nKey: 'crop1n', bKey: 'crop1b' },
  { nKey: 'crop2n', bKey: 'crop2b' },
  { nKey: 'crop3n', bKey: 'crop3b' },
  { nKey: 'crop4n', bKey: 'crop4b' },
];

export default function Crops() {
  const { t } = useLanguage();

  return (
    <section id="crops" style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(40px,5vw,72px) clamp(20px,5vw,64px)', scrollMarginTop: 70 }}>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 11,
          fontSize: 13,
          letterSpacing: '.06em',
          textTransform: 'uppercase',
          color: 'var(--color-accent)',
          marginBottom: 18,
        }}
      >
        <span style={{ width: 36, height: 1, background: 'var(--color-accent)', display: 'inline-block' }} />
        <span>{t('crops_kicker')}</span>
      </span>
      <h2
        style={{
          fontFamily: "'Inter'",
          fontWeight: 600,
          fontSize: 'clamp(28px,3vw,40px)',
          letterSpacing: '-0.015em',
          margin: '0 0 28px',
          maxWidth: '20ch',
        }}
      >
        {t('crops_h2')}
      </h2>
      <div className="fd-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {CROPS.map(({ nKey, bKey }) => (
          <div className="card" style={{ padding: 22 }} key={nKey}>
            <div
              style={{
                fontSize: 15,
                letterSpacing: '.04em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                fontWeight: 600,
                marginBottom: 10,
              }}
            >
              {t(nKey)}
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: 'color-mix(in srgb,var(--color-text) 72%,transparent)', margin: 0 }}>
              {t(bKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
